<template>
  <v-layout column>
    <v-breadcrumbs :items="breadcrumbs" divider="/" />
    <v-card class="pa-5 my-5" elevation="0">
      <h1 class="text-h6 primary--text mb-3">{{ page.title }}</h1>
      <p>
        در پایین لیست محصولات می‌توانید پاسخ سوالات احتمالی خود را در مورد
        محصولات {{ page.title }} ببینید.<br />
        در نهایت اگر مایل بودید باز هم برای مشاوره و انتخاب بهتر دستگاه مورد
        نظرتان با ما تماس بگیرید.
        <v-btn text dir="ltr" href="tel:02177569156">021-77569156</v-btn>
      </p>
    </v-card>
    <TitleBox>بلاگ</TitleBox>
    <div class="d-flex mb-5" style="overflow: auto">
      <v-card v-for="item in all_posts" :key="item.id" v-bind:href="'/blog/post/' + item.slug" width="310px" elevation="0" class="pa-5 ma-1">
        <v-layout column>
          <v-img :src="item.thumbnail" :alt="item.image_alt" height="250" contain>
            <template v-slot:placeholder>
              <v-skeleton-loader
                type="image"
                height="250" 
              ></v-skeleton-loader>
            </template>
          </v-img>
          <h2 class="text-body-1 font-weight-bold pa-2">{{item.title}}</h2>
          <div class="text-caption">{{item.short_description}}</div>
        </v-layout>
      </v-card>
    </div>
    <TitleBox class="mt-5">محصولات</TitleBox>
    <v-card
      v-for="item in products_selected"
      :key="item.id"
      elevation="0"
      class="my-1"
      v-bind:href="'/products/product-detail/' + item.slug"
    >
      <v-row no-gutters>
        <v-col cols="12" md="3" class="pa-5">
          <v-img :src="item.product_image" :alt="item.image_alt" height="200" contain >
            <template v-slot:placeholder>
              <v-skeleton-loader
                type="image"
                height="200"
              ></v-skeleton-loader>
            </template>
          </v-img>
        </v-col>
        <v-col cols="12" md="6" class="pa-5 d-flex flex-column justify-center">
          <h3 class="text-h6 font-weight-bold">{{ item.title }}</h3>
          <p>{{ item.short_discription }}</p>
        </v-col>
        <v-col
          cols="12"
          md="3"
          class="pa-5 d-flex flex-column justify-center align-center"
        >
          <div>
            <span class="primary--text text-h6">{{ item.price }}</span>
            <span class="font-weight-bold">تومان</span>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <div class="text-center my-5">
      <v-pagination
        v-model="product_pagenation"
        :length="product_pagenation_length"
      ></v-pagination>
    </div>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = (
      await $axios.get(
        `/api/categories-api/main-categories/?slug=${encodeURIComponent(
          params.category
        )}`
      )
    ).data
    if (data.count > 0) {
      return {
        page: data.results[0],
      }
    }
  },
  data() {
    return {
      page: {},
      product_pagenation: 1,
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.meta_description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.page.meta_keywords,
        },
        {
          hid: 'author',
          name: 'author',
          content: this.page.meta_author,
        },
      ],
    }
  },
  computed: {
    all_products() {
      const results = []
      this.page.category_set.forEach((category) => {
        category.product_set.forEach((product) => {
          results.push(product)
        })
      })
      
      return results
    },
    all_posts() {
      const results = []
      this.page.category_set.forEach((category) => {
        category.post_set.forEach((post) => {
          results.push(post)
        })
      })
      return results
    },
    product_pagenation_length(){
      return   Math.ceil(this.all_products.length / 5)
    },
    products_selected(){
      return this.all_products.slice(
        5 * this.product_pagenation - 5,
        5 * this.product_pagenation
        )
    },
    breadcrumbs() {
      return [
        {
          text: 'خانه',
          disabled: false,
          href: '/',
        },
        {
          text: this.page.title,
          disabled: false,
          href: `/categories/${this.page.slug}`,
        },
      ]
    },
  }
}
</script>