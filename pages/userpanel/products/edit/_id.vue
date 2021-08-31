<template>
  <v-flex xs12 sm10 md8 class="ma-auto">
    <div id="edit_product" class="w-100">
      <div class="form">
        <v-form ref="form" @submit.prevent="register">
          <div id="image">
            <input
              type="file"
              id="input_image"
              accept="image/png,image/jpeg,image/bmp"
              ref="image_local"
              @change="selectImage"
            />
            <div v-if="image_local" class="show_image" :style="'backgroundImage:url('+ image_local+ ')'">

            </div>
            <div v-else class="show_image"  :style="'backgroundImage:url('+ product.product_image+')'">
            </div>
          </div>
            <div class="text-center "><small class="primary--text">برای ویرایش عکس محصول روی عکس کلیک کنید</small></div>
          <v-text-field
            label="نام محصول"
            v-model="product.title"
            placeholder="نام محصول را واردکنید"
            id="name"
            name="name"
            ref="name"
            :rules="nameRules"
          ></v-text-field>
          <ClientOnly>
            <tiptap-vuetify
              v-model="product.description"
              :extensions="extensions"
              placeholder="توضیحات محصول خود را وارد کنید"
            />
            <template #placeholder> Loading... </template>
          </ClientOnly>
          <v-btn type="submit" color="#BBE1FA" class="#1B262C--text mt-5">
            ثبت
          </v-btn>
        </v-form>
      </div>
    </div>
  </v-flex>
</template>
<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
} from 'tiptap-vuetify'
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
      return {
        product: data,
      }
    } catch (e) {
      console.log(e)
    }
  },
  components: {
    TiptapVuetify,
  },
  computed: {
    regEx() {
      return this.$store.getters.regEx
    },
    msg_regEx() {
      return this.$store.getters.msg_regEx
    },
  },
  data() {
    return {
      picture: [],
      image_local:null,
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
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Link,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
    }
  },
  methods: {
    async register() {
      const form = new FormData()
      form.append('title', this.product.name)
      form.append('discription', this.product.description)
      if(this.image_local){
       form.append('product_image', this.$refs.image_local.files[0])
      }
      form.append('_method', 'PUT')
      const data = {
        token: this.$auth.$storage._state['_token.local'],
        id: this.$route.params.id,
        form: form,
      }
      this.$store.dispatch('edit_product', data)
    },
    selectImage(e){
      const file=e.target.files[0]
      this.image_local=URL.createObjectURL(file)
      console.log(this.image_local)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
