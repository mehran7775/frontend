<template>
  <v-row justify="center" style="z-index: 20001">
    <v-dialog v-model="dialog" persistent max-width="75%">
      <v-card>
        <v-card-title class="text-h5">
          آیا مطممئنید میخواهید
          <span v-text="title" class="px-2 primary--text"></span>
          را حذف کنید؟
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            انصراف
          </v-btn>
          <v-btn color="green darken-1" text @click="verify_delete">
            تایید
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      title: '',
      dialog: false,
    }
  },
  mounted() {
    this.$nuxt.$on('delete_product', (item) => {
      this.id = item.id
      this.title = item.title
      this.dialog = true
    })
  },
  methods: {
    async verify_delete() {
      const data = {
        token: this.$auth.$storage._state['_token.local'],
        id: this.id,
      }
      try {
        await this.$store.dispatch('remove_product', data)
        this.dialog=false
      } catch (e) {
        this.dialog=false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
