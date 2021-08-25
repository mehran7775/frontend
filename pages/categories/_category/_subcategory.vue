<template>
  <v-layout column>
    <v-breadcrumbs :items="breadcrumbs" divider="/" />
    <v-card class="pa-5 my-5" elevation="0">
      <h1 class="text-h6 primary--text mb-3">{{ page.title }}</h1>
      <p>
        در پایین لیست محصولات می‌توانید پاسخ سوالات احتمالی خود را در مورد محصولات
        {{ page.title }} ببینید.<br />
        در نهایت اگر مایل بودید باز هم برای مشاوره و انتخاب بهتر دستگاه مورد
        نظرتان با ما تماس بگیرید.
        <v-btn text dir="ltr" href="tel:02177569156">021-77569156</v-btn>
      </p>
    </v-card>
    <TitleBox class="mt-5">{{ page.title }}</TitleBox>
    <v-card
      v-for="item in products_selected"
      :key="item.id"
      elevation="0"
      class="my-1"
      v-bind:href="'/products/product-detail/' + item.slug"
    >
      <v-row no-gutters>
        <v-col cols="12" md="3" class="pa-5">
          <v-img :src="item.product_image" :alt="item.image_alt" height="200" contain>
            <template v-slot:placeholder>
              <v-skeleton-loader type="image" height="200"></v-skeleton-loader>
            </template>
          </v-img>
        </v-col>
        <v-col cols="12" md="6" class="pa-5 d-flex flex-column justify-center">
          <h3 class="text-h6 font-weight-bold">{{ item.title }}</h3>
          <p>{{ item.short_discription }}</p>
        </v-col>
        <v-col cols="12" md="3" class="pa-5 d-flex flex-column justify-center align-center">
          <div >
            <span class=" primary--text text-h6" v-text="item.price? item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','):'' " />
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
    <v-card elevation="0" class="px-2 py-5 my-5" v-html="page.seo_post" />

    <CommentForm1 post_url="/api/categories-api/category-comments/" v-bind:object_id="page.id"/>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = (
      await $axios.get(
        `/api/categories-api/categories/?slug=${encodeURIComponent(
          params.subcategory
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
      product_pagenation: 1,
      page: {},
      username_rules: [
        (v) => !!v || 'لطفا نام خود را وارد نمایید!',
        (v) =>
          /^[\u0600-\u06FF ]+$/.test(v) ||
          'لطفا نام خود را به فارسی وارد نمایید!',
      ],
      email_rules: [
        (v) => !!v || 'لطفا ایمیل خود را وارد نمایید!',
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'لطفا یک ایمیل معتبر وارد کنید!',
      ],
      content_rules: [(v) => !!v || 'لطفا نظر خود را وارد نمایید!'],
      phone_number_rules: [
        (v) => !!v || 'لطفا شماره همراه خود را وارد نمایید!',
        (v) =>
          /^09[0-9]{9}$/.test(v) ||
          /^\+[0-9]+$/.test(v) ||
          'شماره همراه معتبر نیست!',
      ],
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
    products_selected() {
      return this.page.product_set.slice(
        5 * this.product_pagenation - 5,
        5 * this.product_pagenation
      )
    },
    product_pagenation_length() {
      return Math.ceil(this.page.product_set.length / 5)
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
          href: `/product-categories/${this.page.slug}`,
        },
      ]
    },
  },
}
</script>