<template>
  <v-card class="mx-100 w-100" :height="he ? he : 400" id="menu">
    <v-navigation-drawer>
      <v-list v-if="!sId">
        <nuxt-link
          v-for="item in items"
          :id="item.id"
          :key="item.id"
          :to="`/${item.title}`"
        >
          <v-list-item
            @mouseover="observe_subs(item.id)"
            @mouseleave="hide_subs"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list>
      <v-list v-else>
        <nuxt-link
          v-for="item in sItem.subs"
          :id="item.id"
          :key="item.id"
          :to="`/${item.title}`"
        >
          <v-list-item
            @mouseover="observe_subs2()"
            @mouseleave="hide_subs"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  props: {
    sId: {
      default: null,
      type: Number,
    },
    he:{
      default:null,
      type:String
    }
  },
  // fetch() {
  //   if (this.sId) {
  //     console.log('ye')
  //   } else {
  //     console.log('no')
  //   }
  // },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'خط تولید',
          icon: 'mdi-view-dashboard',
          subs: [
            {
              id: 1,
              title: 'خط تولید سیمان',
              icon: 'mdi-view-dashboard',
            },
          ],
        },
        {
          id: 2,
          title: 'بسته بندی',
          icon: 'mdi-account-box',
          subs: [
            {
              id: 1,
              title: 'بسته بندی مرغ',
              icon: 'mdi-view-dashboard',
            },
          ],
        },
        {
          id: 3,
          title: 'مخازن',
          icon: 'mdi-gavel',
          subs: [
            {
              id: 1,
              title: 'مخازن استریل',
              icon: 'mdi-view-dashboard',
            },
          ],
        },
      ],
    }
  },
  methods: {
    observe_subs(id) {
      const subs = document.getElementById('subMenu')
      subs.style.transition = 'all 0.4s'
      const t = id * 38 - 30
      subs.style.top = t + 'px'
      subs.style.visibility = 'visible'
      subs.style.opacity = 1
      this.$emit('get_id_sub', id)
    },
    hide_subs() {
      const subs = document.getElementById('subMenu')
      subs.style.transition = 'all 0.2s'
      subs.style.opacity = 0
      subs.style.visibility = 'hidden'
    },
    observe_subs2() {
      const subs = document.getElementById('subMenu')
      subs.style.visibility = 'visible'
      subs.style.opacity = 1    },
  },
  computed: {
    sItem() {
      if (this.sId !== null) {
        return this.items.find((item) => item.id === this.sId)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#menu {
  min-height: 300px;
  border-radius: 0 !important;
  box-sizing: border-box;
  border: 2.2px solid rgba(173, 173, 173, 0.253);
  // border-right: 1.8px solid rgba(173, 173, 173, 0.253);
  box-shadow: none !important;

  .v-navigation-drawer {
    width: 100% !important;

    .v-list {
      padding: 0 0 8px 1.8px !important;
      a {
        display: block;
        text-decoration: none;
        color: unset;
        transition: all 0.2s;
      }

      a:hover {
        background-color: whitesmoke;
      }
      .v-list-item {
        height: 38px;
        min-height: 32px !important;
        padding: 0 5px !important;
        border-bottom: 1.8px solid rgba(173, 173, 173, 0.253);
        box-sizing: border-box;
        // a{
        //   width:100%;
        //   height: 100%;
        // }

        .v-list-item__icon {
          // margin-left: 5px!important;
          margin: 7px 5px 0 0 !important;
        }
      }
    }
  }
}
</style>
