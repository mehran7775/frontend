<template>
  <v-card text v-html="page.description"></v-card>
</template>

<script>
export default {
  async asyncData({ $axios,params }) {
    const data = (await $axios.get(`/products/api/products/?slug=${encodeURIComponent(params.slug)}`)).data;
    if (data.count > 0){
      return { page: data.results[0] };
    }
  },
  data() {
      return{
        page: {
          title: "",
          description: "",
        },
      }
    },
    head(){
      return{
        title: this.page.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.page.meta_description
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.page.meta_keywords
          },
          {
            hid: 'author',
            name: 'author',
            content: this.page.meta_author
          },
        ]
      }
    },
}
</script>