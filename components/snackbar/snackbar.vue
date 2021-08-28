<template>
  <v-snackbar
    v-model="snackbar"
    class="white--text text--darken-1"
    :color="color"
    top
  >
    <template v-slot:action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="$store.commit('DEACTIVE_SNACKBAR', false)"
      >
        بستن
      </v-btn>
    </template>
    <b>{{ text }}</b>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    snackbar: {
      get() {
        return this.$store.state.info_snackbar.snackbar
      },
      set(value) {
        this.$store.commit('DEACTIVE_SNACKBAR', value)
      },
    },
    text() {
      return this.$store.state.info_snackbar.text
    },
    color() {
      return this.$store.state.info_snackbar.color
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
