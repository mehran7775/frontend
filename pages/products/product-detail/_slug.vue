<template>
  <v-layout column>
    <v-breadcrumbs :items="breadcrumbs" divider="/" />
    <v-card elevation="0" class="my-5 pa-2">
      <v-row>
        <v-col cols="12" md="6">
          <v-layout justify-space-between align-center class="d-md-none">
            <v-card
              elevation="0"
              class="primary--text"
              v-text="page.title"
            ></v-card>
            <ProductRating />
          </v-layout>
          <v-carousel v-model="model" >
            <v-carousel-item v-for="(item,i) in carousel_items" :key="i" :src="item.src" />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6" class="pa-5 d-flex flex-column justify-space-between">
          <v-layout justify-space-between align-center  class="flex-grow-0">
            <v-card
              elevation="0"
              class="primary--text"
              v-text="page.title"
            ></v-card>
            <ProductRating />
          </v-layout>
          <v-card
            elevation="0"
            text
            class="my-5 py-5 flex-grow-1"
            v-text="page.short_discription"
          ></v-card>
          <v-row class="flex-grow-0">
            <v-col cols="12" md="9">
              <div class="font-weight-bold">
                آخرین بروزرسانی قیمت <span>{{ page.last_edited }}</span>
              </div>
              <div class="font-weight-bold">
                قیمت:
                <span class="text-h5 primary--text"
                  >{{ page.price }} تومان</span
                >
              </div>
            </v-col>
            <v-col cols="12" md="3" class="d-flex flex-column justify-end">
              <v-btn color="primary">استعلام قیمت</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-row no-gutters>
      <v-col cols="12" md="8" class="pa-2">
        <v-card elevation="0" class="pa-5 text-center font-weight-bold mb-1"
          >توضیحات محصول</v-card
        >
        <v-card
          elevation="0"
          v-html="page.description"
          class="px-2 py-5"
        ></v-card>
      </v-col>
      <v-col cols="12" md="4" class="pa-2">
        <v-card elevation="0" class="pa-5 text-center font-weight-bold mb-1"
          >مشخصات محصول</v-card
        >
        <v-card
          v-for="item in page.productdetail_set"
          :key="item.id" class="mb-1" elevation="0"
        >
          <v-row class="pa-4" no-gutters>
            <v-col cols="6">{{ item.variation.name }}</v-col>
            <v-col cols="6">{{ item.value }}</v-col>
          </v-row>
        </v-card>
        <v-card
          v-if="page.productdetail_set.length === 0"
          elevation="0"
          class="pa-5 text-center grey lighten-4"
          >وارد نشده</v-card
        >
      </v-col>
    </v-row>
    <v-layout column>
      <v-card elevation="0" class="mt-5 pa-5 text-center font-weight-bold mb-1">
        محصولات مشابه
      </v-card>
      <div class="d-flex">
        <div v-for="n in 7" :key="n" class="pa-1" style="min-width:350px;">
          <v-card elevation="0" class="pa-2">
            <v-layout column>
              <v-img :src="page.product_image" :alt="page.image_alt"></v-img>
            </v-layout>
          </v-card>
        </div>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = (
      await $axios.get(
        `/products/api/products/?slug=${encodeURIComponent(params.slug)}`
      )
    ).data
    if (data.count > 0) {
      const result = data.results[0]
      return {
        page: result,
        breadcrumbs: [
          {
            text: 'خانه',
            disabled: false,
            href: '/',
          },
          {
            text: result.category[0].title,
            disabled: false,
            href: `/categories/${result.category[0].slug}`,
          },
          {
            text: result.title,
            disabled: false,
            href: `/products/product-detail/${result.slug}`,
          },
        ],
        carousel_items: [
          {
            src: "https://test.damirco.com/images/documents/blobid1604672419153.jpg",
            alt: result.image_alt,
          },
        ],
      }
    }
  },
  data() {
    return {
      title: 'ss',
      page: {
        slug: '',
        category: [{}],
      },
      breadcrumbs: [],
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      rating: 4.3,
      carousel_items: [
        {
          src: '',
        },
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
}
</script>