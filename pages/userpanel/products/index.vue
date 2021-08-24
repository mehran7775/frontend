<template>
  <div id="products">
    <div class="add_product pa-4">
      <nuxt-link to="/userpanel/products/create">افزودن محصول جدید</nuxt-link>
    </div>
    <div class="products">
      <template v-if="products.length > 0">
        <!-- <product-card
          v-for="product in products"
          v-bind:key="product.id"
          :id="product.id"
          :title="product.title"
          :image="product.product_image"
          :description="product.description"
          :slug="product.slug"
        /> -->
        <v-card
          max-width="344"
          outlined
          v-for="product in products"
          v-bind:key="product.id"
        >
          <nuxt-link :to="`/products/${product.slug}`" id="product">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">تایید نشده</div>
                <v-list-item-title class="text-h5 mb-1" v-text="product.title">
                </v-list-item-title>
                <v-list-item-subtitle v-text="product.description"
                  >Greyhound divisely hello coldly
                  fonwderfully</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey">
                <img :src="product.image" width="80" height="80" />
              </v-list-item-avatar>
            </v-list-item>
          </nuxt-link>
          <v-card-actions>
            <div class="icons">
              <span
                @click="delete_event(product.id, product.title)"
                id="delete_icon"
              >
                <v-icon title="حذف" class="trash">mdi-delete</v-icon>
              </span>
              <nuxt-link :to="`/userpanel/products/edit/${id}`">
                <v-icon title="ویرایش" class="edit">mdi-delete</v-icon>
              </nuxt-link>
            </div>
          </v-card-actions>
        </v-card>
      </template>
      <template v-else>محصولی ایجاد نکرده اید </template>
    </div>
  </div>
</template>

<script>
import EventService from '@/services/EventService'
export default {
  layout: 'userpanel/index',
  data() {
    return {}
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
  methods: {
    delete_event(id, title) {
      $nuxt.$emit('delete_product', {
        id: id,
        title: title,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
