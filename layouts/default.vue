<template>
  <v-app>
    <v-app-bar flat prominent>
      <v-container class="px-0 px-md-2">
        <v-layout column>
          <v-layout justify-space-between align-center>
            <v-img src="/logo.webp" max-width="150" class="me-3"></v-img>
            <v-spacer></v-spacer>
            <v-card flat height="50" class="mb-2">
              <v-layout justify-center align-start>
                <v-autocomplete
                  dense
                  class="mt-3 px-2"
                  label="جستجو کنید ..."
                  append-icon=""
                ></v-autocomplete>
                <v-btn
                  fab
                  small
                  tile
                  flat
                  color="primary"
                  href="tel:02177569156"
                  class="pa-0 ma-1"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-layout>
            </v-card>
            <v-card flat height="50" class="mb-2 mx-5  d-none d-md-block">
              <v-layout justify-center align-center>
                <v-layout column>
                  <v-row no-gutters class="text-caption px-2"
                    >021-77569156</v-row
                  >
                  <v-row no-gutters class="text-caption px-2"
                    >021-77542719</v-row
                  >
                </v-layout>
                <v-btn
                  fab
                  small
                  tile
                  flat
                  color="primary"
                  href="tel:02177569156"
                  class="pa-0 ma-1"
                >
                  <v-icon>mdi-phone</v-icon>
                </v-btn>
              </v-layout>
            </v-card>
            <v-card flat height="50" width="50" class="mb-2 d-none d-md-block">
              <v-btn
                fab
                small
                tile
                flat
                color="primary"
                href="/users/entry/"
                class="pa-0 ma-1"
              >
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </v-card>
          </v-layout>
          <v-layout align-center justify-start class="grey lighten-5 pa-2">
            <v-btn v-for="link in links" :key="link" :href="link.href" text class="d-none d-md-flex">
              {{ link.text }}
            </v-btn>
            <v-icon color="primary" class="d-md-none">mdi-phone</v-icon>
            <v-btn class="d-md-none text-caption px-1" text href="tel:02177569156">021-77569156</v-btn>
            <v-btn class="d-md-none text-caption px-1" text href="tel:02177569156">021-77569156</v-btn>
            <v-spacer></v-spacer>
            <v-btn text class="white text-caption font-weight-bold pe-1 ps-0">
              <v-icon color="primary" class="mx-2">mdi-database-outline</v-icon>
              تامین کننده ما شوید
            </v-btn>
          </v-layout>
        </v-layout>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-4">
      <v-container class="py-5">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer padless>
      <v-layout column>
        <v-container class="my-5">
          <v-card flat class="text-h6 text-center pa-5 font-weight-bold ma-1">لیست دسته‌بندی ها</v-card>
          <v-row class="my-5 mt-1 flex-nowrap" no-gutters style="overflow:auto;">
            <v-col v-for="k in 8" :key="k" cols="12" md="3" class="px-1">
              <v-layout column class="text-center">
                <v-card
                  flat
                  class="pa-3 text-center primary--text font-weight-bold"
                >
                  بسته بندی
                </v-card>
                <v-btn v-for="n in 5" :key="n" text class="my-1 grey lighten-5">میز ترافیک</v-btn>
                <v-btn text class="my-1 grey lighten-5 font-weight-bold">
                  بیشتر
                  <v-icon small>mdi-arrow-left</v-icon>
                </v-btn>
              </v-layout>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" md="4" order-md="3" offset-md="1">
              <v-card flat class="pa-5 text-center">
                <v-layout justify-center>
                  <v-img src="/logo.webp" max-width="150"></v-img>
                </v-layout>
              </v-card>
              <v-card flat class="pa-5 mt-1 text-justify" height="175px">
                <p class="text-caption">
                  هدف ما در دمیرکو آسان کردن خرید صنعتی و ایجاد اعتماد بین
                  خریدار و فروشنده است. و در زمینه‌ی فروش جت پرینتر،شیرینگ پک،خط
                  تولید لنت،خط تولید سیم و کابل و ... آماده خدمت‌رسانی هستیم.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" order-md="1" class="px-md-1">
              <v-card
                flat
                class="pa-5 text-center primary--text font-weight-bold"
              >
                تماس با ما
              </v-card>
              <v-card flat class="mt-1 pa-4" height="130px">
                <v-row no-gutters>
                  <v-col cols="3" class="text-caption font-weight-bold"
                    >تلفن:</v-col
                  >
                  <v-col cols="4">
                    <v-btn text class="text-caption" href="tel:02177569156"
                      >021-77569156</v-btn
                    >
                  </v-col>
                  <v-col cols="4">
                    <v-btn text class="text-caption" href="tel:02177542719"
                      >021-77542719</v-btn
                    >
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="3" class="text-caption font-weight-bold"
                    >واتسپ:</v-col
                  >
                  <v-col cols="4">
                    <v-btn
                      text
                      class="text-caption"
                      href="https://api.whatsapp.com/send/?phone=989107545479&text&app_absent=0"
                      >09107545479</v-btn
                    >
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="3" class="text-caption font-weight-bold"
                    >ایمیل:</v-col
                  >
                  <v-col cols="4">
                    <v-btn
                      text
                      class="text-caption text-lowercase"
                      href="mailto:info@damirco.com"
                      >info@damirco.com</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card>
              <v-card flat class="mt-1 pa-2">
                <v-layout justify-space-around>
                  <v-btn icon color="blue">
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="green"
                    href="https://api.whatsapp.com/send/?phone=989124242066&text&app_absent=0"
                  >
                    <v-icon>mdi-whatsapp</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="red"
                    href="https://www.instagram.com/damir_co/"
                  >
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                </v-layout>
              </v-card>
            </v-col>
            <v-col cols="12" md="3" order-md="2" class="px-md-1">
              <v-card
                flat
                class="pa-5 text-center primary--text font-weight-bold"
              >
                درباره ما
              </v-card>
              <v-card flat class="mt-1 pa-4" height="185px">
                <v-layout column align-center>
                  <v-btn text class="text-caption" href="/sell/">
                    فروش در دمیرکو
                  </v-btn>
                  <v-btn text class="text-caption" href="/buy/">
                    خرید از دمیرکو
                  </v-btn>
                </v-layout>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card color="white" flat class="mx-0">
          <v-layout justify-center align-center class="py-5">
            <v-btn href="/privacy_policy" text>حریم خصوصی</v-btn>
            <v-btn href="/rules_to_use" text>شرایط استفاده</v-btn>
          </v-layout>
        </v-card>
        <v-layout justify-center class="py-5">
          <div>© تمام حقوق این سایت متعلق به دمیرکو است</div>
        </v-layout>
        <div style="height:100px; width:100%"></div>
      </v-layout>
    </v-footer>
    <v-bottom-navigation
      fixed
      app
      hide-on-scroll
      :grow="false"
      style="background-color: transparent;box-shadow:none;"
      class="d-md-none"
      height="70"
      mandatory
    >
      <v-container>
        <v-card color="primary" height="70" rounded>
          <v-layout justify-center align-center fill-height>
            <v-btn color="primary" depressed class="white--text" href="/users/entry/">
                ورود
                <v-icon color="white">mdi-account</v-icon>
            </v-btn>
            <v-btn color="primary" depressed class="white--text" href="/users/entry/">
                خانه
                <v-icon color="white">mdi-home</v-icon>
            </v-btn>
            <v-btn color="primary" depressed class="white--text" href="/users/entry/">
                یلاگ
                <v-icon color="white">mdi-book-open-blank-variant</v-icon>
            </v-btn>
            <v-btn color="primary" depressed class="white--text" href="/users/entry/">
                دسته بندی
                <v-icon color="white">mdi-view-dashboard-outline</v-icon>
            </v-btn>
          </v-layout>
        </v-card>
      </v-container>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: 'خانه',
        href: '/',
      },
      {
        text: 'محصولات',
        href: '#products-footer',
      },
      {
        text: 'وبلاگ',
        href: '/blog/posts/',
      },
      {
        text: 'درباره ما',
        href: '/about_us/',
      },
      {
        text: 'ورود',
        href: '/users/entry/',
      },
    ],
  }),
}
</script>
