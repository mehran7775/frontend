<template>
  <v-flex xs12 sm10 md8 class="ma-auto">
    <div id="signup">
      <div class="signup">
        <v-card>
          <v-card-title>
            <h3>ثبت نام</h3>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="نام" v-model="fname"></v-text-field>
              <v-text-field label="نام خانوادگی" v-model="lname"></v-text-field>
              <v-text-field
                label="نام کاربری"
                v-model="username"
              ></v-text-field>
              <v-text-field
                label="شماره تلفن"
                v-model="phone_number"
              ></v-text-field>
              <v-text-field label="رمز عبور" v-model="password"></v-text-field>
              <v-btn class="primary--text" @click="register">ثبت</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-flex>
</template>

<script>
import EventService from '@/services/EventService'
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
      lanme: '',
      username: '',
      password: '',
      phone_number: '',
    }
  },
  methods: {
    async register() {
      let form = new FormData()
      form.append('fname', this.fname)
      form.append('lname', this.lname)
      form.append('username', this.username)
      form.append('phone_number', this.phone_number)
      form.append('password', this.password)
      // formData.append('data', JSON.stringify(this.data));
      this.$store.dispatch('do_register', form)
      try {
        await EventService.do_register(form)
        .then(res =>{
          console.log(res)
        })
        await this.$auth.loginWith('local', {
          data: form,
        })
      } catch (e) {
        console.log(e)
      }

    },
  },
}
</script>

<style lang="scss" scoped>
#signup {
  width: 100%;
}
.signup {
  width: 60%;
  position: absolute;
  top: 100px;
  right: 19%;
  // vertical-align: middle;
  // margin: auto;
  // background-color: map-get($colors, da_light);
}
</style>
