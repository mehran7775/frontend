<template>
  <v-layout column v-if="re_render.customers" id="customers" class="pa-3">
    <v-row>
      <v-col cols="12">
        <div id="search_category">
          <div id="search">
            <div class="form-group">
              <label>جست و جو براساس نام یا شماره</label>
              <div class="btn_search">
                <input type="search" class="form-control" />
                <div @click="search()">
                  <font-awesome-icon
                    id="icon_search"
                    :icon="['fas', 'search']"
                  ></font-awesome-icon>
                </div>
              </div>
            </div>
          </div>
          <!-- <div id="state">
          <label for="">نمایش:</label>
          <b-form-select v-model="selected" :options="options" id="select_state"></b-form-select>
        </div> -->
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div id="table" v-if="orders.length > 0">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">شماره درخواست</th>
                <th scope="col">موضوع درخواست</th>
                <th scope="col">نام</th>
                <th scope="col">توضیحات</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" v-bind:key="order.id">
                <th scope="row" class="mw-t" v-text="order.id">1</th>
                <td class="mw-t1">Markrhtrhjtdyj drjdtyhndytjy strjtyj</td>
                <td class="mw-t2" v-text="order.name">Otto</td>
                <td class="mw-t3" v-text="order.description">@mdo</td>
                <td class="mw-t4">
                  <btn @event_fell="verify_order(order.id)" class="p-0">
                    <span>تایید مشتری</span>
                  </btn>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="w-100 text-center" v-else>
          <strong class="text-warning">هنوز موردی وجود ندار</strong>
        </div>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import btn from '@/components/buttons/btn.vue'
export default {
  layout: 'userpanel/index',
  components: {
    btn,
  },
  data() {
    return {}
  },
  async asyncData(context) {
    try {
      const token = context.$auth.$storage._state['_token.local']
      // console.log(token)
      await context.store.dispatch('get_orders', token)
    } catch (e) {
      context.error({
        statusCode: 503,
        message: 'خطایی رخ داده است',
      })
    }
  },
  computed: {
    orders() {
      return this.$store.getters.orders
    },
    re_render() {
      return this.$store.getters.re_render_components
    },
  },
  // methods: {
  //   search() {},
  //   async verify_order(id) {
  //     const payload = {
  //       token: this.$auth.$storage._state['_token.local'],
  //       id: id,
  //     }
  //     try {
  //       await this.$store.dispatch('verify_order', payload)
  //       // this.$router.go(0)
  //       this.$nuxt.refresh()
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   },
  // },
}
</script>

<style lang="scss" scoped>
@media screen and(max-width:670px) {
  #table {
    overflow-x: auto;
  }
  .table {
    width: 900px !important;
  }
}
</style>
