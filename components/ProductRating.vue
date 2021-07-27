<template>
  <div class="d-flex flex-column justify-center align-center">
    <span>
      <span class="font-weight-bold">{{ rating }}</span
      ><span class="text-caption">/5</span>
    </span>
    <v-rating
      v-model="rating"
      color="yellow darken-3"
      background-color="grey darken-1"
      empty-icon="$ratingFull"
      hover
      size="20"
      style="direction: ltr"
    ></v-rating>
    <span class="text-caption">امتیاز براساس نظر مشتریان</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    rating: 4.3,
  }),
}
</script>