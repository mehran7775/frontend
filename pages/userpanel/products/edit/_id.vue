<template>
  <v-flex xs12 sm10 md8 class="ma-auto">
    <div id="create_product" class="w-100">
      <div class="form">
        <v-form>
          <v-file-input
            placeholder="Upload your documents"
            label="عکس محصول"
            multiple
            prepend-icon="mdi-paperclip"
            id="picture"
            ref="picture"
          >
            <template v-slot:selection="{ text }">
              <v-chip small label color="primary">
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
          <!--
        <small v-if="image.length < 1" class="des_image"
          >می توانید هرتعداد عکسی که از محصول میخواهید آپلود کنید</small
        >
        <small
          class="text text-danger"
          v-if="errors.picture"
          v-text="errors.picture"
        ></small> -->
          <!-- <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <div class="picture" v-if="image.length > 0 && !errors.picture">
              <img
                v-for="(img ,i) of image" v-bind:key="i"
                :src="img"
                width="100"
                height="100"
                alt="تصویر ناقص است"
              />
            </div>
            <div>
              <button
                v-if="image.length !== 0"
                class="btn btn-secondary m-2"
                @click="removeImage"
              >
                حذف عکس ها
              </button>
            </div>
          </div> -->
          <v-text-field
            label="نام محصول"
            v-model="name"
            placeholder="نام محصول را واردکنید"
            id="name"
            name="name"
            ref="name"
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
          ></v-textarea>
          <v-btn class="primary" @click="register">ثبت</v-btn>
        </v-form>
      </div>
    </div>
  </v-flex>
</template>

<script>
import btn from '@/components/buttons/btn.vue'
import EventService from '@/services/EventService'
export default {
  layout: 'userpanel/index',
  async asyncData({ route, store, $auth }) {
    const data = {
      token: $auth.$storage._state['_token.local'],
      id: route.params.id,
    }
    await EventService.get_product_edit(data)
      .then((response) => {
        console.log(response)
      })
      .then((error) => {
        console.log(error)
      })
  },
  computed: {
    name: {
      get() {
        return this.$store.state.product_edit.title
      },
      set(value) {
        this.$store.commit('UPDATENAME', value)
      },
    },
    description: {
      get() {
        return this.$store.state.product_edit.description
      },
      set(value) {
        this.$store.commit('UPDATEDESCRIPTION', value)
      },
    },
  },
  components: {
    btn,
  },
  data() {
    return {
      picture: [],
      image: [],
      errors: {
        picture: '',
      },
    }
  },
  methods: {
    createImage(file) {
      new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        // vm.image = e.target.result;
        vm.image.push(e.target.result)
      }
      reader.readAsDataURL(file)
    },
    removeImage(e) {
      this.validated.picture = false
      this.image = []
      this.$refs.picture.value = ''
    },
    async register() {
      const form = new FormData()
      form.append('name', this.name)
      form.append('description', this.description)
      form.append('picture', this.$refs.picture.files[0])
      form.append('_method', 'PUT')
      const data = {
        token: $auth.$storage._state['_token.local'],
        id: route.params.id,
        form: form,
      }
      try {
        await EventService.edit_product(data).then((response) => {
          console.log(response)
        })
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
