<template>
  <v-card height="400" elevation="0">
    <v-layout justify-space-between align-center fill-height>
      <v-card height="60" width="60" >  </v-card>
      <v-card height="60" width="60" >  </v-card>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = (
      await $axios.get(`/api/categories-api/categories/?slug=${encodeURIComponent(params.slug)}`)
    ).data
    if (data.count > 0) {
      return {
        page: data,
      }
    }
  },
  data() {
    return {
      page:{}
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