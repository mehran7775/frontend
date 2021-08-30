<template>
  <v-flex xs12 sm10 md8 class="ma-auto">
    <div id="create_product" class="w-100">
      <div class="form">
        <!-- <v-layout column>
        <v-layout rout>

        </v-layout>
      </v-layout> -->
        <v-form ref="form" lazy-validation @submit.prevent="register">
          <v-file-input
            placeholder="عکس را آپلود کنید"
            label="عکس محصول"
            prepend-icon="mdi-paperclip"
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
          class="my-2"
            label="نام محصول"
            placeholder="نام محصول را واردکنید"
            id="name"
            name="name"
            ref="name"
            v-model="name"
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
            v-model="description"
            :rules="descriptionRules"
          ></v-textarea>
          <v-btn type="submit" color="#BBE1FA" class="#1B262C--text">
            ثبت
          </v-btn>
        </v-form>
        <!-- <div class="w-50 m-auto">
        <btn @event_fell="register" class="pt-1 pb-1">ثبت</btn>
      </div> -->
      </div>
    </div>
  </v-flex>
</template>

<script>
export default {
  layout: 'userpanel/index',
  data() {
    return {
      name: '',
      description: '',
      picture: [],
      image: [],
      btnStatus: true,
      validated: {
        picture: false,
        name: false,
      },
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
  computed: {
    regEx() {
      return this.$store.getters.regEx
    },
    msg_regEx() {
      return this.$store.getters.msg_regEx
    },
  },
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        const form = new FormData()
        form.append('title', this.name)
        form.append('short_discription', this.description)
        form.append(
          'product_image',
          document.getElementById('picture').files[0]
        )
        const data = {
          form: form,
          token: this.$auth.$storage._state['_token.local'],
        }
        this.$store.dispatch('create_product', data)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
