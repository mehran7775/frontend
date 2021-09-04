<template>
  <v-layout column id="customers" class="pa-3">
    <v-row>
      <v-col cols="12">
        <div id="search_category">
          <div id="search">
            <div class="form-group">
              <label>جست و جو براساس نام یا شماره</label>
              <!-- <div class="btn_search"> -->
              <!-- <input type="search" class="form-control" />
                <div @click="search()">
                  <font-awesome-icon
                    id="icon_search"
                    :icon="['fas', 'search']"
                  ></font-awesome-icon>
                </div> -->
              <v-autocomplete
                dense
                class="mt-4 px-2"
                label="نام یا شماره را وارد کنید ..."
                append-icon=""
              ></v-autocomplete>
              <!-- </div> -->
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
          <table class="table py-2">
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
                <td class="mw-t1" v-text="order.title">
                  Markrhtrhjtdyj drjdtyhndytjy strjtyj
                </td>
                <td class="mw-t2" v-text="order.name">Otto</td>
                <td class="mw-t3" v-text="order.description">@mdo</td>
                <td class="mw-t4">
                  <v-btn
                    color="#BBE1FA"
                    class="#1B262C--text"
                    @click="verify_order(order.id)"
                  >
                    تایید مشتری
                  </v-btn>
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
import EventService from '@/services/EventService'
export default {
  layout: 'userpanel/index',
  data() {
    return {}
  },
  async asyncData(context) {
    try {
      const token = context.$auth.$storage._state['_token.local']
      const { data } = await EventService.get_orders(token)
      return {
        orders: data.results,
      }
    } catch (e) {
      if (e.response) {
        context.error({
          statusCode: e.response.status,
        })
      } else {
        context.error({
          statusCode: '',
          message: 'خطا در ارتباط با سرور',
        })
      }
    }
  },
  computed: {},
  methods: {
    search() {},
    async verify_order(id) {
      const payload = {
        token: this.$auth.$storage._state['_token.local'],
        id: id,
      }
      try {
        const { data } = await EventService.verify_order(payload)
        console.log(data)
        this.$nuxt.refresh()
        const data_snack = {
          snackbar: true,
          text: 'مشتری با موفقیت تایید شد',
          color: 'success lighten-1',
        }
        this.$store.commit('SET_INFO_SNACKBAR', data_snack)
      } catch (e) {
        const data = {
          snackbar: true,
          text: 'خطایی در تایید محصول رخ داد',
          color: 'red lighten-1',
        }
        commit('SET_INFO_SNACKBAR', data)
      }
    },
  },
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
