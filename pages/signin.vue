<template>
  <v-flex class="ma-auto">
    <div class="signin">
      <v-card>
        <v-card-title>
          <h3>ورود</h3>
        </v-card-title>
        <v-card-text>
          <v-form ref="form_login" lazy-validation @submit.prevent="login">
            <v-text-field
              label="نام کاربری"
              v-model="username"
              :rules="usernameRules"
            ></v-text-field>
            <v-text-field
              label="رمز عبور"
              v-model="password"
              type="password"
              :rules="passwordRules"
            ></v-text-field>
            <v-btn type="submit" class="primary mt-2">ورود</v-btn>
            <div class="mt-5">
              هنوز ثبت نام نکرده اید،برای ثبت نام
              <nuxt-link to="/signup">کلیک</nuxt-link>
              کنید
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </v-flex>
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
      usernameRules: [
        (v) => !!v || this.msg_regEx.username.empty,
        (v) => v.length >= 3 || this.msg_regEx.username.length,
      ],
      passwordRules: [
        (v) => !!v || this.msg_regEx.password.empty,
        (v) => v.length >= 4 || this.msg_regEx.username.length,
      ],
      previous_route: '',
    }
  },
  computed: {
    regEx() {
      return this.$store.getters.regEx
    },
    msg_regEx() {
      return this.$store.getters.msg_regEx
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
     vm.previous_route=from.fullPath
      next()
    })
    // this.previous_route = from.fullPath
  },
  methods: {
    async login() {
      if (this.$refs.form_login.validate()) {
        const credential = {
          username: this.username,
          password: this.password,
        }
        try {
          await this.$auth
            .loginWith('local', {
              data: credential,
            })
            .then((res) => {
              if(this.previous_route !=='/userpanel' || this.previous_route !=='/'){
                this.$router.push('/userpanel')
              }else{
              this.$router.back()
              }
            })
        } catch (e) {
          console.log(e)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables';
// #signin {
//   width: 100%;
.signin {
  min-width: 320px;
  max-width: 500px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 5px;
  transform: translate(-50%, -50%);
}
</style>
