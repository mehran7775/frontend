<template>
  <v-app>
    <v-container fluid id="userpanel">
      <v-layout column>
        <v-layout row>
          <div id="header">
            <div id="toggle_sidebar" @click="toggle_sidebar">
              <font-awesome-icon
                :class="[
                  bars_menu_active ? 'bars_menu_active' : null,
                  'bars_menu',
                ]"
                :icon="['fas', 'bars']"
              />
            </div>
            <div id="brand" class="brand_userpanel">
              <nuxt-link to="/">
                <img src="/images/icons/brand_da.png" alt="" />
              </nuxt-link>
            </div>
            <div id="pro_log">
              <div id="profile">
                <div id="pic_pro">
                  <img src="" alt="" />
                </div>
                <div id="name_pro">
                  <span v-text="$auth.user.username"></span>
                  <!-- <span>بی نام</span> -->
                </div>
              </div>
              <div id="logout" @click="$auth.logout()">
                <font-awesome-icon
                  title="خروج"
                  class="fa-2x fa-rotate-180 logout"
                  :icon="['fa', 'sign-out-alt']"
                />
              </div>
            </div>
          </div>
        </v-layout>
        <v-layout row id="body_userpanel">
          <v-flex sm-3 md2 id="sidebar">
            <div class="sidebar">
              <ul>
                <li>
                  <nuxt-link to="/userpanel/customers">
                    <img
                      width="28"
                      height="28"
                      src="/images/add-product-1-68ds7275.png"
                      alt=""
                    />
                    <span>مشتریان من</span>
                  </nuxt-link>
                </li>
                <!-- <li>
                    <nuxt-link to="/userpanel/products/create">
                      <img
                        width="28"
                        height="28"
                        src="/images/icons/add-product-1-68ds7275.png"
                        alt=""
                      />
                      <span>افزودن محصول</span>
                    </nuxt-link>
                  </li> -->
                <li>
                  <nuxt-link to="/userpanel/products">
                    <img
                      width="28"
                      height="28"
                      src="/images/icons/add-product-1-68ds7275.png"
                      alt=""
                    />
                    <span>محصولات من</span>
                  </nuxt-link>
                </li>
                <li>
                  <div id="settings" @click="toggle_sub_settings">
                    <font-awesome-icon
                      class="fa-lg"
                      :icon="['fas', 'cog']"
                    ></font-awesome-icon>
                    <span>تنظیمات</span>
                  </div>
                </li>
                <li id="sub_settings">
                  <nuxt-link to="/userpanel/profile">
                    <img
                      width="28"
                      height="28"
                      src="/images/edit-icon-vector-16.png"
                      alt=""
                    />
                    <span>پروفایل</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </v-flex>
          <v-flex xs12 sm9 md10>
            <transition name="fade">
              <Nuxt />
            </transition>
          </v-flex>
        </v-layout>
      </v-layout>
      <template>
        <modal>
          <template v-slot:title> آیا میخواهید این مورد را حذف کنید </template>
        </modal>
      </template>
    </v-container>
  </v-app>
</template>

<script>
import Modal from "@/components/modals/Modal.vue";
export default {
  components:{
    Modal
  },
  data() {
    return {
      bars_menu_active: false,
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize()
    })
    window.addEventListener('resize', this.onResize)
    if (window.location.pathname === '/userpanel/profile/') {
      document.getElementById('settings').click()
    }
  },
  destroyed() {
    document.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      // if(process.client){
      //   console.log('client')
      // }
      if (window.innerWidth > 600) {
        const el = document.getElementById('sidebar')
        el.style.visibility = 'visible'
        el.style.opacity = '1'
      }
    },
    toggle_sidebar() {
      const el = document.getElementById('sidebar')
      if (!el.style.visibility || el.style.visibility === 'hidden') {
        el.style.transition = 'all 0.3s'
        el.style.visibility = 'visible'
        el.style.opacity = '1'
        this.bars_menu_active = true
      } else {
        el.style.transition = 'all 0.3s'
        el.style.visibility = 'hidden'
        el.style.opacity = '0'
        this.bars_menu_active = false
      }
    },
    toggle_sub_settings() {
      const el = document.getElementById('sub_settings')
      // console.log(el.childElementCount)
      // const number_child = el.childElementCount;
      if (!el.style.height || el.style.height === '0px') {
        el.style.transition = 'all 0.2s linear'
        el.style.height = el.childElementCount * 40 + 'px'
      } else {
        el.style.height = '0'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  #sidebar {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: 999;
    // right:-230px;
    top: 80px;
    max-width: 230px;
    width: 230px;
    background-color: #fff;
  }
}
@media (min-width: 600px) {
  #sidebar {
    visibility: visible;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
