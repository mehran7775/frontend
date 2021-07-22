<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
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
          <v-layout justify-space-between align-start>
            <v-img src="/logo.webp" max-width="150"></v-img>
            <v-responsive max-width="250" class="d-none d-md-block">
              <v-autocomplete
                outlined
                rounded
                dense
                solo
                flat
                color="grey lighten-2"
                label="جستجو"
                :loading="search - loading"
                font-size="0.5rem"
              ></v-autocomplete>
            </v-responsive>
            <v-btn color="primary" rounded href="tel:02177569156">
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

    <v-footer :fixed="false">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card
              color="grey lighten-5"
              height="400"
              flat
              class="rounded-card"
            >
              <v-layout class="pa-3">
                <h3>تماس:</h3>
                <v-layout class="pa-3">
                  <v-btn color="primary" rounded href="tel:02177569156">
                    021-77569156
                    <v-icon class="mr-1">mdi-phone</v-icon>
                  </v-btn><br/>
                  <v-btn color="primary" rounded href="tel:02177569156">
                    021-77569156
                    <v-icon class="mr-1">mdi-phone</v-icon>
                  </v-btn>
                </v-layout>
              </v-layout>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card
              color="grey lighten-5"
              height="400"
              flat
              class="rounded-card"
            >
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card
              color="grey lighten-5"
              height="400"
              flat
              class="rounded-card"
            >
            </v-card>
          </v-col>
        </v-row>
        <v-layout justify-center align-center class="mt-5">
          <v-btn href="/privacy_policy" text>حریم خصوصی</v-btn>
          <v-btn href="/rules_to_use" text>شرایط استفاده</v-btn>
        </v-layout>
        <v-divider></v-divider>
        <v-layout justify-center class="mt-3">
          <div>© تمام حقوق این سایت متعلق به دمیرکو است</div>
        </v-layout>
      </v-container>
    </v-footer>
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
