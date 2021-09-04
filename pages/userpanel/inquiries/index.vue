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
        <div id="table" v-if="inquiries.length > 0">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">شماره</th>
                <th scope="col">نام دستگاه</th>
                <th scope="col">توضیحات</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="inq in inquiries" v-bind:key="inq.id">
                <th scope="row" class="mw-t" v-text="inq.id">1</th>
                <td class="mw-t2" v-text="inq.name">Otto</td>
                <td class="mw-t3" v-text="inq.description">@mdo</td>
                <td class="mw-t4">
                  <v-btn
                    color="#BBE1FA"
                    class="#1B262C--text"
                    @click="verify_order(order.id)"
                  >
                    <nuxt-link :to="`/userpanel/inquiries/${inq.id}`"
                      ><span>مشاهده بیشتر</span></nuxt-link
                    >
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="w-100 text-center" v-else>
          <strong class="text-warning">هنوز موردی وجود ندار</strong>
        </div> -->
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import EventService from '@/services/EventService'
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
      const { data } = await EventService.get_inquiries(token)
      return {
        inquiries: data.results,
      }
    } catch (e) {
      context.error({
        statusCode: 503,
        message: 'خطایی رخ داده است',
      })
    }
  },
  computed: {},
  methods: {
    search() {},
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
a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>
