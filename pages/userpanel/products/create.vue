<template>
  <div id="create_product" class="w-100">
    <div class="form">
      <v-form>
        <v-file-input
          placeholder="Upload your documents"
          label="عکس محصول"
          multiple
          prepend-icon="mdi-paperclip"
          id="picture"
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
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div class="picture" v-if="image.length > 0 && !errors.picture">
            <img
              v-for="img of image"
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
        </div>
        <v-text-field
          label="نام محصول"
          placeholder="نام محصول را واردکنید"
          id="name"
          name="name"
          ref="name"
          v-model="name"
        ></v-text-field>
        <v-text-field
          label="توضیحات"
          placeholder="توضیحات محصول خود را وارد کنید"
          id="description"
          ref="description"
          name="description"
          v-model="description"
        ></v-text-field>
        <v-btn class="primary" @click="register">ثبت</v-btn>
      </v-form>
      <!-- <div class="w-50 m-auto">
        <btn @event_fell="register" class="pt-1 pb-1">ثبت</btn>
      </div> -->
    </div>
  </div>
</template>

<script>
import btn from '@/components/buttons/btn.vue'
export default {
  layout: 'userpanel/index',
  components: {
    btn,
  },
  data() {
    return {
      name:'',
      description:'',
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
    }
  },
  computed: {
    regEx() {
      return this.$store.getters.regEx
    },
    // btnStatus() {
    //   if (this.validated.picture && this.validated.name) {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
  },
  methods: {
    amount(e) {
      // console.log(e.target.files.length);
      if (e.target.files.length > 0) {
        if (
          e.target.files[0]['type'] === 'image/jpeg' ||
          e.target.files[0]['type'] === 'image/png'
        ) {
          this.errors.picture = ''
          this.picture.push(e.target.files)
          const pic = e.target.files
          this.createImage(pic[0])
          this.validated.picture = true
        } else {
          this.errors.picture = 'فرمت فایل باید بصورت jpg یا png باشد'
          e.target.value = ''
          this.validated.picture = false
        }
      } else {
        this.validated.picture = false
      }
    },
    validate(e) {
      const value = e.target.value
      if (value === '') {
        e.target.classList.remove('is-invalid', 'is-valid')
      } else {
        // this.$store.commit("RESET_EXIST_USER", "phoneNumber");
        var res = value.match(this.regEx.regNameCompany)
        if (res) {
          e.target.classList.remove('is-invalid')
          e.target.classList.add('is-valid')
          this.validated.name = true
          // this.valid_phoneNumber = true;
        } else {
          e.target.classList.remove('is-valid')
          e.target.classList.add('is-invalid')
          this.validated.name = false
        }
      }
    },
    createImage(file) {
      new Image()
      let reader = new FileReader()
      let vm = this

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
    register() {
      // console.log(this.$refs.picture.files[0])
      // this.$refs.picture = this.picture;
      const form = new FormData()
      form.append('name', this.name)
      form.append('description', this.description)
      form.append('image', document.getElementById('picture').files[0])
      // this.picture.forEach((element, i) => {
      //   form.append('pics[' + i + ']', element[0])
      // })

      const data = {
        form: form,
        token: this.$auth.$storage._state['_token.local'],
      }
      this.$store.dispatch('create_product', data)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
