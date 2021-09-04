<template>
  <v-card height="400" elevation="0">
    <v-layout justify-space-between align-center fill-height>
      <v-card height="60" width="60" >  </v-card>
      <v-card height="60" width="60" >  </v-card>
    </v-layout>
  </v-card>
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
}
</script>
