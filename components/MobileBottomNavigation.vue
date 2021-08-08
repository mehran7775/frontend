<template>
  <v-bottom-navigation
    fixed
    app
    hide-on-scroll
    :grow="false"
    style="background-color: transparent; box-shadow: none"
    class="d-md-none"
    height="70"
    mandatory
  >
    <v-container>
      <v-card color="primary" height="70" rounded>
        <v-layout justify-center align-center fill-height>
          <v-btn
            color="primary"
            depressed
            class="white--text"
            href="/users/entry/"
          >
            ورود
            <v-icon color="white">mdi-account</v-icon>
          </v-btn>
          <v-btn
            color="primary"
            depressed
            class="white--text"
            href="/"
          >
            خانه
            <v-icon color="white">mdi-home</v-icon>
          </v-btn>
          <v-btn
            color="primary"
            depressed
            class="white--text"
            href="/blog/posts/"
          >
            یلاگ
            <v-icon color="white">mdi-book-open-blank-variant</v-icon>
          </v-btn>
          <v-btn
            color="primary"
            depressed
            class="white--text"
            href="#products-footer"
          >
            دسته بندی
            <v-icon color="white">mdi-view-dashboard-outline</v-icon>
          </v-btn>
        </v-layout>
      </v-card>
    </v-container>
  </v-bottom-navigation>
</template>