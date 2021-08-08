<template>
  <div id="products">
    <div class="add_product pa-4">
      <nuxt-link to="/userpanel/products/create">افزودن محصول جدید</nuxt-link>
    </div>
    <div class="products">
      <!-- <template v-if="products.length > 0">
        <product-card
          v-for="product in products"
          v-bind:key="product.id"
          :id="product.id"
          :title="product.name"
          image=""
          :description="product.description"
        />
      </template>
      <template v-else> محصولی ایجاد نکرده اید </template> -->
      <template v-if="products.length > 0">
        <product-card
          v-for="product in products"
          v-bind:key="product.id"
          :id="product.id"
          :title="product.name"
          image=""
          :description="product.description"
        />
      </template>
      <template v-else>محصولی ایجاد نکرده اید </template>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/layouts/userpanel/ProductCard.vue'
export default {
  layout: 'userpanel/index',
  data() {
    return {}
  },
  components: {
    ProductCard,
  },
  async fetch(context) {
    const token = context.$auth.$storage._state['_token.local']
    try {
      await context.store.dispatch('get_products_supplier', token)
    } catch (e) {
      context.error({
        statusCode: 500,
        message: 'خطایی رخ داده است',
      })
    }
  },
  computed: {
    products() {
      return this.$store.getters.products_panel
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
