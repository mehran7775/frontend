<template>
  <v-app>
    <TopNavigationbar />
    <v-main class="grey lighten-4">
      <v-container class="py-5">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer padless class="grey lighten-4">
      <v-layout column>
        <v-container class="my-5">
          <FooterCategories />  
          <FooterGeneralInfo />
        </v-container>
        <FooterPolicyAndCopyrights />
      </v-layout>
    </v-footer>
    <MobileBottomNavigation />
  </v-app>
</template>


