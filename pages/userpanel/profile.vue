<template>
  <div class="profile w-100">
    <Nuxt />
  </div>
</template>

<script>
export default {
  layout: "userpanel/index",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
label {
  font-weight: bold;
  color: map-get($colors, da_dismal);
  //  color:red;
}
</style>
