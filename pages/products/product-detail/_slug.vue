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
                <span class="text-h5 primary--text" v-text="page.price? page.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','):'' + ' تومان'"/>
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
                      <v-text class="font-weight-bold text-h6"
                        >استعلام قیمت</v-text
                      >
                      <v-btn icon @click="request_for_quotation.dialog = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-layout>
                    <v-alert
                      v-model="request_for_quotation.error"
                      type="error"
                      >{{ request_for_quotation.message }}</v-alert
                    >
                    <v-alert
                      v-model="request_for_quotation.success"
                      type="success"
                      >{{ request_for_quotation.message }}</v-alert
                    >
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
                    <div
                      v-for="question in questions"
                      :key="question.id"
                    >
                      <v-textarea
                        v-if="question.question_type === 'B'"
                        v-model="question.customerAnswer"
                        outlined
                        :name="question.question"
                        :label="question.question"
                      />
                      <v-checkbox
                        v-else-if="question.question_type === 'A'"
                        v-model="question.customerAnswer"
                        :name="question.question"
                        :label="question.question"
                      />
                      <v-select
                        v-else-if="question.question_type === 'C'"
                        v-model="question.customerAnswer"
                        :items="question.choices.split(/[،,]+/)"
                        :name="question.question"
                        :label="question.question"
                        outlined
                        dense
                      />
                      <v-select
                        v-else-if="question.question_type === 'D'"
                        v-model="question.customerAnswer"
                        :items="question.choices.split(/[،,]+/)"
                        :name="question.question"
                        :label="question.question"
                        chips
                        multiple
                        outlined
                      />
                    </div>
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
          v-for="item in page.productdetail_set"
          :key="item.id"
          elevation="0"
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
            width="280"
          >
            <v-layout column>
              <v-img
                :src="product.product_image"
                :alt="product.image_alt"
                class="ma-5"
                height="200"
                contain
              >
                <template v-slot:placeholder>
                  <v-skeleton-loader
                    type="image"
                    height="200"
                  ></v-skeleton-loader>
                </template>
              </v-img>
              <v-layout justify-center align-center class="px-2">
                <v-card
                  style="height: 2px"
                  color="grey lighten-4 flex-grow-1"
                />
                <div
                  class="d-flex justify-center align-center primary"
                  style="width: 10px; height: 10px"
                >
                  <div
                    style="width: 5px; height: 5px; border-radius: 50%"
                    class="white"
                  ></div>
                </div>
                <v-card
                  style="height: 2px"
                  color="grey lighten-4 flex-grow-1"
                />
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
                      از <b v-text="product.price? product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','):'-' " /> تومان
                    </div>
                    <div>
                      تا <b v-text="product.second_price? product.second_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','):'-' " /> تومان
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
    <CommentForm1
      post_url="/api/products-api/product-comments/"
      v-bind:object_id="page.id"
    />
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = (
      await $axios.get(
        `/api/products-api/products/?slug=${encodeURIComponent(params.slug)}/`
      )
    ).data
    if (data.count > 0) {
      return {
        page: data.results[0],
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
      rating: 4.3,
      // inputs
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
  computed: {
    breadcrumbs() {
      return [
        {
          text: 'خانه',
          disabled: false,
          href: '/',
        },
        {
          text: this.page.category[0].title,
          disabled: false,
          href: `/product-category/${this.page.category[0].slug}`,
        },
        {
          text: this.page.title,
          disabled: false,
          href: `/products/product-detail/${this.page.slug}`,
        },
      ]
    },
    carousel_items() {
      return [
        {
          src: this.page.product_image,
          alt: this.page.image_alt,
        },
      ]
    },
    questions(){
      return this.page.category[0].questions
    }
  },
  watch: {
    request_for_quotation(val) {
      this.request_for_quotation.phone_number = val.phone_number.replace(
        /[۰-۹]/g,
        (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)
      )
    },
  },
  methods: {
    async sendRequestForQuotation() {
      if (this.request_for_quotation.success) return
      const isValid = await this.$refs.RequestForQuotationForm.validate()
      if (!isValid) return
      this.request_for_quotation.loading = true
      const cumulativeDescription =
        this.questions.map(
          (item) => `${item.question}: ${item.customerAnswer}\n`
        ) + this.request_for_quotation.extra_fields
      const data = {
        name: this.request_for_quotation.name,
        phone_number: this.request_for_quotation.phone_number,
        extra_fields: cumulativeDescription,
        item: this.page.id,
      }
      try {
        const res1 = await this.$axios.get('/api/get-csrftoken/')
        this.$axios.defaults.headers.common['X-CSRFToken'] = res1.data.csrftoken
        await this.$axios.post('/api/products-api/miniorder/', data)
        this.request_for_quotation.success = true
        this.request_for_quotation.error = false
        this.request_for_quotation.message = 'با موفقیت ثبت شد.'
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
