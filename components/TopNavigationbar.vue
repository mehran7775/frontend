<template>
  <v-app-bar elevation="0" prominent>
    <v-container class="px-0 px-md-2">
      <v-layout column>
        <v-layout justify-space-between align-center>
          <v-img src="/static/logo.webp" max-width="150" class="me-3"></v-img>
          <v-spacer></v-spacer>
          <v-card elevation="0" height="50" class="mb-2">
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
                elevation="0"
                text
                color="primary"
                href="tel:02177569156"
                class="pa-0 ma-1"
              >
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-layout>
          </v-card>
          <v-card elevation="0" height="50" class="mb-2 mx-5 d-none d-md-block">
            <v-layout justify-center align-center>
              <v-layout column>
                <v-row no-gutters class="text-caption px-2">021-77569156</v-row>
                <v-row no-gutters class="text-caption px-2">021-77542719</v-row>
              </v-layout>
              <v-btn
                fab
                small
                tile
                elevation="0"
                color="primary"
                href="tel:02177569156"
                class="pa-0 ma-1"
              >
                <v-icon>mdi-phone</v-icon>
              </v-btn>
            </v-layout>
          </v-card>
          <v-card elevation="0" height="50" width="50" class="mb-2 d-none d-md-block">
            <v-btn
              fab
              small
              tile
              elevation="0"
              color="primary"
              href="/signin"
              class="pa-0 ma-1"
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </v-card>
        </v-layout>
        <v-layout align-center justify-start class="grey lighten-5 pa-2">
          <v-btn
            v-for="link in links"
            :key="link"
            :href="link.href"
            text
            class="d-none d-md-flex"
          >
            {{ link.text }}
          </v-btn>
          <v-icon color="primary" class="d-md-none">mdi-phone</v-icon>
          <v-btn class="d-md-none text-caption px-1" text href="tel:02177569156"
            >021-77569156</v-btn
          >
          <v-btn class="d-md-none text-caption px-1" text href="tel:02177569156"
            >021-77569156</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn text class="white text-caption font-weight-bold pe-1 ps-0">
            <v-icon color="primary" class="mx-2">mdi-database-outline</v-icon>
            تامین کننده ما شوید
          </v-btn>
        </v-layout>
      </v-layout>
    </v-container>
  </v-app-bar>
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
