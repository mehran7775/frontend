<template>
  <v-flex xs12 sm10 md8 class="ma-auto">
    <div id="create_product" class="w-100">
      <div class="form">
        <v-form ref="form" @submit.prevent="register">
          <v-file-input
            placeholder="عکس را آپلود کنید"
            label="عکس محصول"
            prepmend-icon="mdi-paperclip"
            id="picture"
            :rules="pictureRules"
            accept="image/png,image/jpeg,image/bmp"
          >
            <template v-slot:selection="{ text }">
              <v-chip small label color="primary">
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
          <v-text-field
            label="نام محصول"
            v-model="product.name"
            placeholder="نام محصول را واردکنید"
            id="name"
            name="name"
            ref="name"
            :rules="nameRules"
          ></v-text-field>
          <v-textarea
            label="توضیحات"
            placeholder="توضیحات محصول خود را وارد کنید"
            auto-grow
            outlined
            rows="3"
            row-height="25"
            shaped
            id="description"
            ref="description"
            name="description"
            v-model="product.description"
            :rules="descriptionRules"
          ></v-textarea>
          <v-btn type="submit" color="#BBE1FA" class="#1B262C--text">
            ثبت
          </v-btn>
        </v-form>
      </div>
    </div>
  </v-flex>
</template>
<script>
import EventService from '@/services/EventService'
export default {
  layout: 'userpanel/index',
  async asyncData({ route, store, $auth }) {
    const datas = {
      token: $auth.$storage._state['_token.local'],
      id: route.params.id,
    }
    try {
      const { data } = await EventService.get_product_edit(datas)
      if (data.count > 0) {
        return {
          product: data.results,
        }
      }
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      picture: [],
      image: [],
      errors: {
        picture: '',
      },
      pictureRules: [
        (v) => !!v || this.msg_regEx.product.picture.empty,
        // (v) => v.size > 5242880 || this.msg_regEx.product.length,
      ],
      nameRules: [
        (v) => !!v || this.msg_regEx.product.name.empty,
        (v) => v.length > 2 || this.msg_regEx.product.name.length,
      ],
      descriptionRules: [
        (v) => !!v || this.msg_regEx.product.description.empty,
        (v) => v.length > 9 || this.msg_regEx.product.description.length,
      ],
    }
  },
  methods: {
    async register() {
      const form = new FormData()
      form.append('name', this.product.name)
      form.append('description', this.product.description)
      form.append('picture', this.$refs.picture.files[0])
      form.append('_method', 'PUT')
      const data = {
        token: $auth.$storage._state['_token.local'],
        id: route.params.id,
        form: form,
      }
      this.$store.dispatch('edit_product', data)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
