<template>
  <v-layout column>
    <v-layout row class="px-3">
      <!-- <v-flex md2 class="hidden-sm-and-down menu3">
        <Menu @get_id_sub="set_sub_id($event)" :items="items" />
        <div class="m2" id="subMenu">
          <Menu :sId="sub_id" he="max-content" :items="items" />
        </div>
      </v-flex> -->
      <v-flex xs12 md10 id="slider">
        <div class="slider">
          <Carousel />
        </div>
      </v-flex>
    </v-layout>
    <v-layout row id="det">
      <div class="det">
        <section>
          <div class="svg">
            <v-img src="/images/shield.svg" width="70"></v-img>
          </div>
          <div class="text">
            <v-icon x-small color="primary">mdi-circle</v-icon>
            <span class="font-weight-bold">گارانتی</span>
          </div>
        </section>
        <section>
          <div class="svg">
            <v-img src="/images/hand.svg" width="70"></v-img>
          </div>
          <div class="text">
            <v-icon x-small color="primary">mdi-circle</v-icon>
            <span class="font-weight-bold">دسرسی به تامین کننگان</span>
          </div>
        </section>
        <section>
          <div class="svg">
            <v-img src="/images/award.svg" width="70"></v-img>
          </div>
          <div class="text">
            <v-icon x-small color="primary">mdi-circle</v-icon>
            <span class="font-weight-bold">تایید کنترل کیفیت</span>
          </div>
        </section>
        <section>
          <div class="svg">
            <v-img src="/images/return-box.svg" width="70"></v-img>
          </div>
          <div class="text">
            <v-icon x-small color="primary">mdi-circle</v-icon>
            <span class="font-weight-bold">مرجوعی کالا</span>
          </div>
        </section>
      </div>
    </v-layout>
    <v-layout column v-for="label in labels" :key="label.title">
      <v-card elevation="0" class="mt-5 pa-5 text-center font-weight-bold mb-1">
        <span v-text="label.title"></span>
      </v-card>
      <div class="d-flex" style="overflow: auto">
        <div
          v-for="product in label.products"
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
    <v-layout column>
      <v-card elevation="0" class="mt-5 pa-5 text-center font-weight-bold mb-1">
        مشتریان ما
      </v-card>
      <div class="d-flex py-5 white" style="overflow: auto">
        <div class="my-card">
          <v-card elevation="0" width="108">
            <v-img src="/images/my_customer1.png"></v-img>
          </v-card>
        </div>
        <div class="my-card">
          <v-card elevation="0" width="108">
            <v-img src="/images/my_customer2.png"></v-img>
          </v-card>
        </div>
        <div class="my-card">
          <v-card elevation="0" width="108">
            <v-img src="/images/my_customer3.png"></v-img>
          </v-card>
        </div>
        <div class="my-card">
          <v-card elevation="0" width="108">
            <v-img src="/images/my_customer4.png"></v-img>
          </v-card>
        </div>
        <div class="my-card">
          <v-card elevation="0" width="108">
            <v-img src="/images/my_customer5.png"></v-img>
          </v-card>
        </div>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  header: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  async asyncData({ $axios, error }) {
    try {
      const data = (await $axios.get('api/categories-api/main-categories')).data
      const la = (await $axios.get('/api')).data
      return {
        items: data.results,
        labels: la.results,
      }
    } catch (e) {
      console.log(e)
      error({
        statusCode: 503,
        message: 'خطایی رخ داده است',
      })
    }
  },
  components: {
    Menu: () => import('@/components/MenuSidebarIndex.vue'),
    Carousel: () => import('@/components/Carousel.vue'),
  },
  data() {
    return {
      sub_id: null,
      // labels: [
      //   {
      //     title: 'ویژه',
      //     products: [
      //       {
      //         id: 1,
      //         title: 'محصول ویژه 1',
      //         price: 2000000,
      //         second_price: 25000000,
      //         slug: 'محصول-ویژه-1',
      //         product_image: 'f.png',
      //         image_alt: 'rd',
      //       },
      //       {
      //         id: 2,
      //         title: 'محصول ویژه 2',
      //         price: 4000000,
      //         second_price: 45000000,
      //         slug: 'محصول-ویژه-2',
      //         product_image: 'f.png',
      //         image_alt: 'rd',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'جدید',
      //     products: [
      //       {
      //         id: 1,
      //         title: 'محصول جدید 1',
      //         price: 3200000,
      //         second_price: 28000000,
      //         slug: 'محصول-جدید-1',
      //         product_image: 'f.png',
      //         image_alt: 'rd',
      //       },
      //       {
      //         id: 2,
      //         title: 'محصول جدید 2',
      //         price: 9000000,
      //         second_price: 110000000,
      //         slug: 'محصول-جدید-2',
      //         product_image: 'f.png',
      //         image_alt: 'rd',
      //       },
      //     ],
      //   },
      // ],
    }
  },
  methods: {
    set_sub_id(value) {
      this.sub_id = value
    },
  },
}
</script>

<style scoped lang="scss">
.menu3 {
  .m2 {
    width: 200px;
    height: max-content;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    right: 283px;
    z-index: 999;
  }
}

#slider {
  border: 5px solid rgba(173, 173, 173, 0.171) !important;
  border-right: none;
  box-sizing: border-box;
  height: 400px;

  .slider {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}
#det {
  margin: 80px 0 20px 0;
  .det {
    width: 100%;
    display: flex;
    align-items: center;

    section {
      width: 25%;
      border: 2px solid rgba(173, 173, 173, 0.171) !important;
      box-sizing: border-box;
      .svg {
        background-color: #fff;
        text-align: center;
        padding: 20px 0;
        .v-image {
          margin: auto;
        }
      }
      .text {
        border-top: 2px solid rgba(173, 173, 173, 0.171) !important;
        text-align: center;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          padding-right: 4px;
          box-sizing: border-box;
        }
      }
    }
  }
}

.my-card {
  max-width: 115px;
  padding: 5px;
  margin: 0 5%;
  box-sizing: border-box;
}
</style>
