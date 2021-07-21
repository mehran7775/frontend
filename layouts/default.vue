<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app color="white" elevate-on-scroll prominent>
      <v-container>
        <v-layout column>
          <v-layout justify-space-between  align-start>
            <v-img src="/logo.webp" max-width="150"></v-img>
            <v-responsive max-width="250" class="d-none d-md-block">
              <v-autocomplete outlined rounded dense solo flat color="grey lighten-2" label="جستجو" :loading="search-loading" font-size="0.5rem" ></v-autocomplete>
            </v-responsive>
            <v-btn color="primary" rounded  href="tel:02177569156">
              021-77569156
              <v-icon class="mr-1">mdi-phone</v-icon>
            </v-btn>
          </v-layout>
          <v-layout align-center justify-start>
            <v-btn v-for="link in links" :key="link" :href="link.href" text>
              {{ link.text }}
            </v-btn>
            <v-btn color="primary mx-2"> تامین کننده ما شوید </v-btn>
          </v-layout>
        </v-layout>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-4">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <v-container>
        <v-row>
          <v-col> asd </v-col>
          <v-col> asd </v-col>
          <v-col> asd </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: "خانه",
        href: "/"
      }, {
        text: "محصولات",
        href: "/categories/"
      }, 
      {
        text: "وبلاگ",
        href: "/blog/"
      }, 
      {
        text: "درباره ما",
        href: "/aboutus/"
      },
      { 
        text: "ورود",
        href: "/login/"
      }],

  }),
}
</script>
