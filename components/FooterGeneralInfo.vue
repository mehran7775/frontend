<template>
  <v-row no-gutters>
    <v-col cols="12" md="4" order-md="3" offset-md="1" class="py-5">
      <v-card elevation="0" class="pa-5 text-center ">
        <v-layout justify-center>
          <v-img src="/logo.webp" max-width="150"></v-img>
        </v-layout>
      </v-card>
      <v-card elevation="0" class="pa-5 mt-1 text-justify mb-5" height="175px">
        <p class="text-caption">
          هدف ما در دمیرکو آسان کردن خرید صنعتی و ایجاد اعتماد بین خریدار و
          فروشنده است. و در زمینه‌ی فروش جت پرینتر،شیرینگ پک،خط تولید لنت،خط
          تولید سیم و کابل و ... آماده خدمت‌رسانی هستیم.
        </p>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" order-md="1" class="px-md-1 py-5">
      <v-card elevation="0" class="pa-5 text-center primary--text font-weight-bold">
        تماس با ما
      </v-card>
      <v-card elevation="0" class="mt-1 pa-4" height="130px">
        <v-row no-gutters>
          <v-col cols="3" class="text-caption font-weight-bold">تلفن:</v-col>
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
          <v-col cols="3" class="text-caption font-weight-bold">واتسپ:</v-col>
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
          <v-col cols="3" class="text-caption font-weight-bold">ایمیل:</v-col>
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
      <v-card elevation="0" class="mt-1 pa-2">
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
          <v-btn icon color="red" href="https://www.instagram.com/damir_co/">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-layout>
      </v-card>
    </v-col>
    <v-col cols="12" md="3" order-md="2" class="px-md-1 py-5">
      <v-card elevation="0" class="pa-5 text-center primary--text font-weight-bold">
        درباره ما
      </v-card>
      <v-card elevation="0" class="mt-1 pa-4" height="185px">
        <v-layout column align-center>
          <v-btn text class="text-caption" href="/sell/">
            فروش در دمیرکو
          </v-btn>
          <v-btn text class="text-caption" href="/buy/"> خرید از دمیرکو </v-btn>
        </v-layout>
      </v-card>
    </v-col>
  </v-row>
</template>