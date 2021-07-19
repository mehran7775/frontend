<template>
  <v-app>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
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
    </v-navigation-drawer> -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="white"
      elevate-on-scroll
    >
      <v-container class="py-0 fill-height">
        <v-img src="/logo.webp" max-width="150"></v-img>
        <v-spacer />
        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            background-color="gray"
            placeholder="جستجو"
          ></v-text-field>
        </v-responsive>
        <v-spacer />
        <v-btn rounded color="primary">
          <v-icon dark>mdi-phone</v-icon>
          <span>021-77569156</span>
        </v-btn>

        <!-- <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>خانه</v-tab>
            <v-tab>محصولات</v-tab>
            <v-tab>وبلاگ</v-tab>
            <v-tab>درباره ما</v-tab>
            <v-tab>ورود</v-tab>
          </v-tabs>
        </template> -->
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
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
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
}
</script>
