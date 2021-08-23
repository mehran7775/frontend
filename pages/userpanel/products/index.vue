<template>
  <div id="products">
    <div class="add_product pa-4">
      <nuxt-link to="/userpanel/products/create">افزودن محصول جدید</nuxt-link>
    </div>
    <div class="products">
      <template v-if="products.length > 0">
        <product-card
          v-for="product in products"
          v-bind:key="product.id"
          :id="product.id"
          :title="product.title"
          :image="product.product_image"
          :description="product.description"
          :slug="product.slug"
        />
      </template>
      <template v-else>محصولی ایجاد نکرده اید </template>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/layouts/userpanel/ProductCard.vue'
import EventService from '@/services/EventService'
export default {
  layout: 'userpanel/index',
  data() {
    return {}
  },
  components: {
    ProductCard,
  },
  async asyncData(context) {
    const token = context.$auth.$storage._state['_token.local']
    try {
      const { data } = await EventService.get_products_supplier(token)
      if (data.count > 0) {
        return {
          products: data.results,
        }
      }
    } catch (e) {
      context.error({
        statusCode: 500,
        message: 'خطایی رخ داده است',
      })
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
