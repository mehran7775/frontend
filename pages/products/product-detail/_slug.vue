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
            <v-carousel-item
              v-for="(item, i) in carousel_items"
              :key="i"
              :src="item.src"
            />
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
              <v-btn color="primary">استعلام قیمت</v-btn>
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
          :key="item.id" class="mb-2"
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
          v-for="n in 1"
          :key="n"
          class="pa-1"
          style="min-width: 290px; max-width: 290 !important"
        >
          <v-card
            elevation="0"
            v-bind:href="'/product/product-detail/' + page.slug"
          >
            <v-layout column>
              <v-img
                :src="page.product_image"
                :alt="page.image_alt"
                class="ma-5"
                max-width="250"
              />
              <v-layout justify-center align-center>
                <v-card style="height: 2px" color="grey" />
                <div
                  class="d-flex justify-center align-center primary"
                  style="width: 10px; height: 10px"
                >
                  <div
                    style="width: 5px; height: 5px; border-radius: 50%"
                    class="white"
                  ></div>
                </div>
                <v-card style="height: 2px" color="grey" />
              </v-layout>
              <v-card
                elevation="0"
                class="pa-5 text-center font-weight-bold mb-1"
                >{{ page.title }}</v-card
              >
              <v-card elevation="0" color="grey lighten-3" class="ma-5 pa-2">
                <v-row>
                  <v-col cols="9">
                    <div>
                      از <b>{{ page.price }}</b> تومان
                    </div>
                    <div>
                      تا <b>{{ page.second_price }}</b> تومان
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
      <v-form ref="CommentForm" @submit.prevent="sendComment" lazy-validation>
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
            <v-btn color="primary" type="submit" :loading="product_comment.loading" v-te>ارسال نظر</v-btn>
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
        `/products/api/products/?slug=${encodeURIComponent(params.slug)}`
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
      product_comment:{
        loading: false,
        success: false,
        error: false,
        username: "",
        email: "",
        content:""
      },
      // rules \u0600-\u06FF
      username_rules:[
        v => !!v || "لطفا نام خود را وارد نمایید!", 
        v => /^[\u0600-\u06FF ]+$/.test(v) || "لطفا نام خود را به فارسی وارد نمایید!",
      ],
      email_rules:[
        v => !!v || "لطفا نظر خود را وارد نمایید!",
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "لطفا یک ایمیل معتبر وارد کنید!"
      ],
      content_rules:[
        v => !!v || "لطفا نظر خود را وارد نمایید!",
      ]
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
  watch:{

  },
  methods:{
    sendComment() {
      this.product_comment.loading = true;
      let data = {
        username: this.product_comment.username,
        email: this.product_comment.email,
        content: this.product_comment.content,
        content_type:"products | product",
        object_id:this.page.id
      }
      // this.$axios
      //   .post("/products/api/product-comment/", data)
      //   .then(response => {
      //     this.product_comment.success = true
      //     this.product_comment.errored =false
      //   })
      //   .catch(error => {
      //     this.product_comment.errored = true
      //   })
      //   .finally(() => {
      //     this.product_comment.loading = false
      //   });
    }
  }
}
</script>