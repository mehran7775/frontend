<template>
  <v-breadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon>mdi-chevron-left</v-icon>
    </template>
  </v-breadcrumbs>
  <!-- <v-row>
    <v-col v-for="n in 24" :key="n" cols="4">
      <v-card height="200" flat></v-card>
    </v-col>
  </v-row> -->
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
  }
}
</script>