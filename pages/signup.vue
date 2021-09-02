<template>
  <v-flex xs12 sm10 md8 class="ma-auto">
    <div id="signup">
      <div class="signup" max-width="500">
        <v-card>
          <v-card-title>
            <h3>ثبت نام</h3>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" lazy-validation @submit.prevent="register">
              <v-text-field label="نام" v-model="fname"></v-text-field>
              <v-text-field label="نام خانوادگی" v-model="lname"></v-text-field>
              <v-text-field
                label="نام کاربری"
                v-model="username"
                :rules="usernameRules"
              ></v-text-field>
              <v-text-field
                label="شماره تلفن"
                v-model="phone_number"
                :rules="phoneRules"
              ></v-text-field>
              <v-text-field
                label="رمز عبور"
                v-model="password"
                :rules="passwordRules"
                type="password"
              ></v-text-field>
              <v-btn class="primary mt-2" type="submit">ثبت</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-flex>
</template>

<script>
// import EventService from '@/services/EventService'
export default {
  layout: 'sign',
  middleware: 'guest',
  head() {
    return {
      title: 'صفحه ثبت نام',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'با ثبت نام در دمیرکو از خدمات خرید و فروش استفاده کنید',
        },
      ],
    }
  },
  data() {
    return {
      fname: '',
      lname: '',
      username: '',
      password: '',
      phone_number: '',
      usernameRules: [
        (v) => !!v || this.msg_regEx.username.empty,
        (v) => v.length >= 3 || this.msg_regEx.username.length,
      ],
      phoneRules: [
        (v) => !!v || this.msg_regEx.phone_number.empty,
        (v) =>
          this.regEx.phone_number.test(v) ||
          this.regEx.phone_number2.test(v) ||
          this.msg_regEx.phone_number.valid,
      ],
      passwordRules: [
        (v) => !!v || this.msg_regEx.password.empty,
        (v) => v.length >= 4 || this.msg_regEx.password.length,
      ],
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
  methods: {
    async register() {
      if (this.$refs.form.validate()) {
        const signup_data = {
          first_name:this.fname,
          last_name: this.lname,
          username: this.username,
          phone_number: this.phone_number,
          password: this.password
        }
        try {
          // await EventService.do_register(form).then((res) => {
          //   console.log(res)
          const res = await this.$axios.get('/api/get-csrftoken/')
          this.$axios.defaults.headers.common['X-CSRFToken'] =res.data.csrftoken
          await this.$axios.post('/api/signup/', signup_data)
          await this.$auth.loginWith('local', {
            data: signup_data,
          }).then(res =>{
            this.$router.back()
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
.signup {
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
