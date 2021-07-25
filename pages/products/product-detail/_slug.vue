<template>
  <v-card>{{description}}</v-card>
</template>

<script>
export default {
    data: ()=>{
        page: {}
    },
    head: ()=> {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    },
    async fetch({ $axios,params }) {
      this.page = await $axios.get(`/products/api/products/?slug=${params.slug}`);
    }
}
</script>