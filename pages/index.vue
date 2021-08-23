<template>
  <v-layout column>
    <v-layout row class="px-3">
      <v-flex md2 class="hidden-sm-and-down menu3">
        <Menu @get_id_sub="set_sub_id($event)" />
        <div class="m2" id="subMenu">
          <Menu :sId="sub_id" he="max-content" />
        </div>
      </v-flex>
      <v-flex xs12 md10 id="slider">
        <div class="slider">
          <Carousel />
        </div>
      </v-flex>
    </v-layout>
    <v-layout row class="" id="det">
      <div class="det">
        <section>
          <div class="svg">rg</div>
          <div class="text">
            <font-awesome-icon :icon="['fas', 'sign-out-altcircle']" />
            <span class="font-weight-bold">گارانتی</span>
          </div>
        </section>
        <section>
          <div class="svg">ilui</div>
          <div class="text">
            <font-awesome-icon :icon="['fas', 'sign-out-altcircle']" />
            <span class="font-weight-bold">دسرسی به تامین کننگان</span>
          </div>
        </section>
        <section>
          <div class="svg">tky</div>
          <div class="text">
            <font-awesome-icon :icon="['fas', 'sign-out-altcircle']" />
            <span class="font-weight-bold">تایید کنترل کیفیت</span>
          </div>
        </section>
        <section>
          <div class="svg">u6</div>
          <div class="text">
            <font-awesome-icon :icon="['fas', 'sign-out-altcircle']" />
            <span class="font-weight-bold">مرجوعی کالا</span>
          </div>
        </section>
      </div>
    </v-layout>

    <!-- <v-layout row>
    <v-col cols="3" class="">d</v-col>
    <v-col cols="9" class="blue">v</v-col>
  </v-layout> -->
  </v-layout>
  <!-- <v-card height="400" elevation="0">
    <v-layout justify-space-between align-center fill-height>
      <v-card height="60" width="60" >  </v-card>
      <v-card height="60" width="60" >  </v-card>
    </v-layout>
  </v-card> -->
</template>

<script>
export default {
  header: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: {
    Menu: () => import('@/components/MenuSidebarIndex.vue'),
    Carousel: () => import('@/components/Carousel.vue'),
  },
  data() {
    return {
      sub_id: null,
    }
  },
  methods: {
    set_sub_id(value) {
      this.sub_id = value
    },
  },
}
</script>

<style scoped lang="scss">
.menu3 {
  .m2 {
    width: 200px;
    height: max-content !important;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    // subs.style.position='10px'
    right: 283px;
    z-index: 9999;
  }
}

#slider {
  // padding: 1.5px;
  border: 5px solid rgba(173, 173, 173, 0.171) !important;
  border-right: none;
  box-sizing: border-box;
  height: 400px;

  .slider {
    width: 100%;
    height: 100%;
    background-color: #fff;
    // direction: ltr;
  }
}
#det {
  margin: 80px 0 20px 0;

  .det {
    width: 100%;
    display: flex;
    align-items: center;
    // flex-wrap: wrap;

    section {
      width: 25%;
      border: 2px solid rgba(173, 173, 173, 0.171) !important;
      box-sizing: border-box;
      .svg {
        background-color: #fff;
        text-align: center;
      }
      .text {
        border-top: 2px solid rgba(173, 173, 173, 0.171) !important;
        text-align: center;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          padding-right: 4px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
