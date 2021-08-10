<template>
  <v-container>
    <v-layout column>
      <v-layout row>
        <v-flex xs12 sm10 md8 class="ma-auto">
          <div id="signin">
            <div class="signin">
              <v-card>
                <v-card-title>
                  <h3>ورود</h3>
                </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="نام کاربری"
                      v-model="username"
                    ></v-text-field>
                    <v-text-field
                      label="رمز عبور"
                      v-model="password"
                    ></v-text-field>
                    <v-btn class="primary" @click="login">ورود</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
              <div class="to_signup">
                هنوز ثبت نام نکرده اید،برای ثبت نام
                <nuxt-link to="/signup">کلیک</nuxt-link>
                کنید
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'sign',
  head() {
    return {
      title: 'صفحه ورود',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'با ورود به دمیرکو میتوانید به خرید و فروش و تعامل بپردازید',
        },
      ],
    }
  },
  middleware: 'guest',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      let form = new FormData()
      form.append('username', this.username)
      form.append('password', this.password)
      this.$store.dispatch('do_login', form)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables';
// @import "assets/scss/main";
#signin {
  width: 100%;
  // background-color:  map-get($colors,da_light);

  .signin {
    width: 60%;
    position: absolute;
    top: 100px;
    right: 19%;
    // vertical-align: middle;
    // margin: auto;
    // background-color: map-get($colors, da_light);
    .to_signup {
      width: 100%;
      margin: auto;
      text-align: center;
      padding: 10px;
      font-weight: bold;
      a {
        color: map-get($colors, da_blue_light);
      }
    }
  }
}
</style>
