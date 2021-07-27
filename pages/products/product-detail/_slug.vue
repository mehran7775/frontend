<template>
  <v-layout column>
    <v-breadcrumbs :items="breadcrumbs" divider="/" />
    <v-row>
      <v-col cols="12" md="8" class="pa-2">
        <v-card elevation="0" class="pa-5 text-center font-weight-bold mb-1 ">توضیحات محصول</v-card>
        <v-card elevation="0" v-html="page.description" class="px-2 py-5"></v-card>
      </v-col>
      <v-col cols="12" md="4" class="pa-2">
        <v-card elevation="0" class="pa-5 text-center font-weight-bold mb-1 ">مشخصات محصول</v-card>
        <v-card elevation="0" >
          <v-card elevation="0" class="pa-5 text-center grey lighten-4">وارد نشده</v-card>
        </v-card>
      </v-col>
    </v-row>
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
      const result= data.results[0]
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
      }
    }
  },
  data() {
    return {
      title:"ss",
      page: {
        slug:"",
        category: [{}],
      },
      breadcrumbs:[]
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