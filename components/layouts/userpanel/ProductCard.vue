<template>
  <v-card max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">تایید نشده</div>
        <v-list-item-title class="text-h5 mb-1" v-text="title">
        </v-list-item-title>
        <v-list-item-subtitle v-text="description"
          >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
        >
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <div class="icons">
        <span @click="delete_event()"
          ><font-awesome-icon
            title="حدف"
            :icon="['fa', 'trash']"
            class="trash ml-2"
          ></font-awesome-icon
        ></span>
        <nuxt-link :to="`/userpanel/products/edit/${id}`"
          ><font-awesome-icon
            title="ویرایش"
            :icon="['fa', 'edit']"
            class="edit"
          ></font-awesome-icon
        ></nuxt-link>
      </div>
      <!-- <v-btn outlined rounded text> Button </v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['id', 'title', 'image', 'description'],
  methods: {
    delete_event() {
      $nuxt.$emit('delete_product', this.id)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
