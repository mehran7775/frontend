<template>
  <v-layout column>
    <v-breadcrumbs :items="breadcrumbs" divider="/" />
    <v-card elevation="0" class="my-5 pa-2 pa-md-5">
      <v-row>
        <v-col cols="12" md="6">
          <v-layout justify-space-between align-center class="d-md-none">
            <v-card
              elevation="0"
              class="primary--text"
              v-text="page.title"
            ></v-card>
            <ProductRating />
          </v-layout>
          <v-carousel>
            <v-carousel-item v-for="(item, i) in carousel_items" :key="i">
              <v-img :src="item.src"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="pa-5 d-flex flex-column justify-space-between"
        >
          <v-layout justify-space-between align-center class="flex-grow-0">
            <v-card
              elevation="0"
              class="primary--text"
              v-text="page.title"
            ></v-card>
            <ProductRating />
          </v-layout>
          <v-card
            elevation="0"
            text
            class="my-5 py-5 flex-grow-1"
            v-text="page.short_discription"
          ></v-card>
          <v-row class="flex-grow-0">
            <v-col cols="12" md="9">
              <div class="font-weight-bold">
                آخرین بروزرسانی قیمت: <span>{{ page.last_edited }}</span>
              </div>
              <div class="font-weight-bold">
                قیمت:
                <span class="text-h5 primary--text"
                  >{{ page.price }} تومان</span
                >
              </div>
            </v-col>
            <v-col cols="12" md="3" class="d-flex flex-column justify-end">
              <v-btn
                color="primary"
                @click="request_for_quotation.dialog = true"
                >استعلام قیمت</v-btn
              >
              <v-dialog
                v-model="request_for_quotation.dialog"
                max-width="450"
                class="pa-2"
              >
                <v-form
                  ref="RequestForQuotationForm"
                  lazy-validation
                  @submit.prevent="sendRequestForQuotation"
                >
                  <v-card class="px-5 pb-5">
                    <v-layout justify-space-between align-center class="py-3">
                      <v-text class="font-weight-bold text-h6">استعلام قیمت</v-text>
                      <v-btn icon @click="request_for_quotation.dialog = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-layout>
                    <v-alert  v-model="request_for_quotation.error" type="error">{{request_for_quotation.message}}</v-alert>
                    <v-alert  v-model="request_for_quotation.success" type="success">{{request_for_quotation.message}}</v-alert>
                    <v-text-field
                      v-model="request_for_quotation.name"
                      outlined
                      name="name"
                      :rules="username_rules"
                      label="نام و نام خانوادگی"
                      validate-on-blur
                    />
                    <v-text-field
                      v-model="request_for_quotation.phone_number"
                      outlined
                      name="phone_number"
                      :rules="phone_number_rules"
                      label="شماره همراه"
                      validate-on-blur
                    />
                    <v-textarea
                      v-model="request_for_quotation.extra_fields"
                      outlined
                      name="extra_fields"
                      label="توضیحات"
                    />
                    <v-layout justify-center>
                      <v-btn
                        type="submit"
                        :color="
                          request_for_quotation.success ? 'success' : 'primary'
                        "
                        :loading="request_for_quotation.loading"
                      >
                        <v-icon v-if="request_for_quotation.success"
                          >mdi-check-outline</v-icon
                        >
                        <v-text v-else> درخواست استعلام</v-text>
                      </v-btn>
                    </v-layout>
                  </v-card>
                </v-form>
              </v-dialog>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-row no-gutters>
      <v-col cols="12" md="8" class="pa-2">
        <v-card elevation="0" class="pa-5 text-center font-weight-bold mb-1"
          >توضیحات محصول</v-card
        >
        <v-card
          elevation="0"
          v-html="page.description"
          class="px-2 py-5"
        ></v-card>
      </v-col>
      <v-col cols="12" md="4" class="pa-2">
        <v-card elevation="0" class="pa-5 text-center font-weight-bold mb-1"
          >مشخصات محصول</v-card
        >
        <v-card
          elevation="0"
          v-for="item in page.productdetail_set"
          :key="item.id"
          class="mb-2"
        >
          <v-row class="pa-2">
            <v-col cols="6">{{ item.variation.name }}</v-col>
            <v-col cols="6">{{ item.value }}</v-col>
          </v-row>
        </v-card>
        <v-card
          v-if="page.productdetail_set.length === 0"
          elevation="0"
          class="pa-5 text-center grey lighten-4"
          >وارد نشده</v-card
        >
      </v-col>
    </v-row>
    <v-layout column class="py-5">
      <v-card elevation="0" class="mt-5 pa-5 text-center font-weight-bold mb-1">
        محصولات مشابه
      </v-card>
      <div class="d-flex" style="overflow: auto">
        <div
          v-for="product in page.related_products"
          :key="product.id"
          class="pa-1"
          style="min-width: 290px; max-width: 290 !important"
        >
          <v-card
            elevation="0"
            v-bind:href="'/products/product-detail/' + product.slug"
          >
            <v-layout column>
              <v-img
                :src="product.product_image"
                :alt="product.image_alt"
                class="ma-5"
                max-width="250"
              />
              <v-layout justify-center align-center class="px-2">
                <v-card style="height: 2px" color="grey lighten-4 flex-grow-1" />
                <div
                  class="d-flex justify-center align-center primary"
                  style="width: 10px; height: 10px"
                >
                  <div
                    style="width: 5px; height: 5px; border-radius: 50%"
                    class="white"
                  ></div>
                </div>
                <v-card style="height: 2px" color="grey lighten-4 flex-grow-1" />
              </v-layout>
              <v-card
                elevation="0"
                class="pa-5 text-center text-body-2 font-weight-bold mb-1"
                >{{ product.title }}</v-card
              >
              <v-card elevation="0" color="grey lighten-3" class="ma-5 pa-2">
                <v-row>
                  <v-col cols="9">
                    <div>
                      از <b>{{ product.price }}</b> تومان
                    </div>
                    <div>
                      تا <b>{{ product.second_price }}</b> تومان
                    </div>
                  </v-col>
                  <v-col cols="3">
                    <v-layout justify-center align-center fill-height>
                      <v-btn icon color="primary">
                        <v-icon large>mdi-database-cog</v-icon>
                      </v-btn>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-card>
            </v-layout>
          </v-card>
        </div>
      </div>
    </v-layout>
    <v-card elevation="0" class="my-5 py-5">
      <v-form ref="CommentForm" lazy-validation @submit.prevent="sendComment">
        <v-alert v-model="product_comment.error" type="error" >{{product_comment.message}}</v-alert>
        <v-alert v-model="product_comment.success" type="success" >{{product_comment.message}}</v-alert>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="px-5 d-flex flex-column justify-end">
            <v-text-field
              v-model="product_comment.username"
              outlined
              name="username"
              :rules="username_rules"
              required
              label="نام"
              validate-on-blur
            />
            <v-text-field
              v-model="product_comment.email"
              name="email"
              required
              :rules="email_rules"
              outlined
              label="ایمیل"
              validate-on-blur
            />
          </v-col>
          <v-col cols="12" md="6" class="px-5">
            <v-textarea
              v-model="product_comment.content"
              outlined
              :rules="content_rules"
              validate-on-blur
              name="content"
              label="نظر"
              required
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" md="6" offset-md="6" class="px-5">
            <v-layout class="justify-center justify-md-start">
              <v-btn
                :color="product_comment.success? 'success':'primary'"
                type="submit"
                :loading="product_comment.loading"
              >
                <v-icon  v-if="product_comment.success" >mdi-check-outline</v-icon>
                <v-text v-else>ثبت نظر</v-text>
              </v-btn>
            </v-layout>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = (
      await $axios.get(
        `/api/products-api/products/?slug=${encodeURIComponent(params.slug)}`
      )
    ).data
    if (data.count > 0) {
      const result = data.results[0]
      return {
        page: result,
        breadcrumbs: [
          {
            text: 'خانه',
            disabled: false,
            href: '/',
          },
          {
            text: result.category[0].title,
            disabled: false,
            href: `/categories/${result.category[0].slug}`,
          },
          {
            text: result.title,
            disabled: false,
            href: `/products/product-detail/${result.slug}`,
          },
        ],
        carousel_items: [
          {
            src: result.product_image,
            alt: result.image_alt,
          },
        ],
      }
    }
  },
  data() {
    return {
      title: '',
      page: {
        slug: '',
        category: [{}],
      },
      breadcrumbs: [],
      rating: 4.3,
      carousel_items: [
        {
          src: '',
        },
      ],
      // inputs
      product_comment: {
        loading: false,
        success: false,
        error: false,
        message: '',
        username: '',
        email: '',
        content: '',
      },
      request_for_quotation: {
        dialog: false,
        loading: false,
        success: false,
        error: false,
        message: '',
        name: '',
        extra_fields: '',
        phone_number: '',
      },
      username_rules: [
        (v) => !!v || 'لطفا نام خود را وارد نمایید!',
        (v) =>
          /^[\u0600-\u06FF ]+$/.test(v) ||
          'لطفا نام خود را به فارسی وارد نمایید!',
      ],
      email_rules: [
        (v) => !!v || 'لطفا ایمیل خود را وارد نمایید!',
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'لطفا یک ایمیل معتبر وارد کنید!',
      ],
      content_rules: [(v) => !!v || 'لطفا نظر خود را وارد نمایید!'],
      phone_number_rules: [
        (v) => !!v || 'لطفا شماره همراه خود را وارد نمایید!',
        (v) =>
          /^09[0-9]{9}$/.test(v) ||
          /^\+[0-9]+$/.test(v) ||
          'شماره همراه معتبر نیست!',
      ],
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.meta_description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.page.meta_keywords,
        },
        {
          hid: 'author',
          name: 'author',
          content: this.page.meta_author,
        },
      ],
    }
  },
  watch: {},
  methods: {
    async sendComment() {
      if (this.product_comment.success) return
      const isValid = await this.$refs.CommentForm.validate()
      if (!isValid) return
      this.product_comment.loading = true
      const data = {
        username: this.product_comment.username,
        email: this.product_comment.email,
        content: this.product_comment.content,
        object_id: this.page.id,
      }
      try {
        const res1 = await this.$axios.get('/api/get-csrftoken')
        this.$axios.defaults.headers.common['X-CSRFToken'] = res1.data.csrftoken
        await this.$axios.post('/api/products-api/product-comments/', data)
        this.product_comment.success = true
        this.product_comment.error = false
        this.product_comment.message =
          'با موفقیت ثبت شد.'
      } catch (err) {
        this.product_comment.error = true
        this.product_comment.message =
          'خطای سرور! لطفا بعدا دوباره امتحان کنید.'
      }

      this.product_comment.loading = false
    },
    async sendRequestForQuotation() {
      if (this.request_for_quotation.success) return
      const isValid = await this.$refs.RequestForQuotationForm.validate()
      if (!isValid) return
      this.request_for_quotation.loading = true
      const data = {
        name: this.request_for_quotation.name,
        phone_number: this.request_for_quotation.phone_number,
        extra_fields: this.request_for_quotation.extra_fields,
        item: this.page.id,
      }
      try {
        const res1 = await this.$axios.get('/api/get-csrftoken')
        this.$axios.defaults.headers.common['X-CSRFToken'] = res1.data.csrftoken
        await this.$axios.post('/api/products-api/miniorder/', data)
        this.request_for_quotation.success = true
        this.request_for_quotation.error = false
        this.request_for_quotation.message =
          'با موفقیت ثبت شد.'
      } catch (err) {
        this.request_for_quotation.error = true
        this.request_for_quotation.message =
          'خطای سرور! لطفا بعدا دوباره امتحان کنید.'
        console.log(err)
      }

      this.request_for_quotation.loading = false
    },
  },
}
</script>

<style scoped>
img {
    max-width: 100% !important;
}
</style>