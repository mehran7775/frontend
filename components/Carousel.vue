<template>
   <v-carousel
    cycle
    height="402"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :style="`backgroundImage:url('${slide}')`"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
 data () {
      return {
        slides: [
          '/images/slider1.webp',
          '/images/slider2.webp',
          '/images/slider3.webp',
        ],
      }
    },
}
</script>

<style lang="scss" scoped>
.v-window-item{
  background-size: 100% 97%;
  background-repeat: no-repeat;
}
</style>
