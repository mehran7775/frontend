<template>
  <v-flex class="ma-auto">
    <div class="signin">
      <v-card>
        <v-card-title>
          <h3>ورود</h3>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="نام کاربری" v-model="username"></v-text-field>
            <v-text-field label="رمز عبور" v-model="password"></v-text-field>
            <v-btn class="primary" @click="login">ورود</v-btn>
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
    }
  },
  methods: {
    async login() {
      let form = new FormData()
      form.append('username', this.username)
      form.append('password', this.password)
      try {
        await this.$auth.loginWith('local', {
          data: form,
        })
      } catch (e) {
        console.log('e', e.response)
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
    max-width:500px;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 5px;
    transform: translate(-50%,-50%);
  }
</style>
