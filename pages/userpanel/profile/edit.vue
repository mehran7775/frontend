<template>
  <div id="edit_profile">
    <div class="w-100">
      <div id="btn_edit">
        <v-btn color="#BBE1FA" class="#1B262C--text" @click="$router.back()">
          بازگشت
        </v-btn>
      </div>
    </div>
    <v-flex xs12 sm10 md8 class="ma-auto">
      <div class="infoo">
        <v-form ref="info_form" @submit.prevent="register">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  label="نام"
                  id="firstName"
                  name="firstname"
                  ref="firstName"
                  :counter="25"
                  :value="name"
                  required
                  placeholder="نام خودرا به فارسی وارد کنید"
                  :rules="fnameRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  label="نام خانوادگی"
                  id="lastName"
                  name="lastName"
                  :counter="35"
                  :value="lname"
                  ref="lastName"
                  placeholder="نام خانوادگی به فارسی وارد شود"
                  :rules="lnameRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  label="نام کاربری"
                  id="username"
                  name="username"
                  :counter="20"
                  ref="username"
                  placeholder="نام کاربری خود را وارد کنید"
                  :value="username"
                  :rules="usernameRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  label="نام شرکت"
                  id="company"
                  name="company"
                  ref="company"
                  :counter="70"
                  placeholder="نام شرکت خودرا وارد کنید"
                  title="نام شرکت درست وارد نشده است"
                  v-model="company_name"
                  :rules="company_nameRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  label="شماره تلفن"
                  id="phoneNumber"
                  name="phoneNumber"
                  title="شماره تلفن اشتباه وارد شده است"
                  ref="phoneNumber"
                  :counter="11"
                  placeholder="09xxxxxxxxx"
                  v-model="phoneNumber"
                  :rules="phone_numberRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  label="ایمیل"
                  id="email"
                  name="email"
                  ref="email"
                  :counter="50"
                  placeholder="ایمیل خود را وارد کنید"
                  title="ایمل اشتباه وارد شده است"
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>
              </v-col>
            </v-row>
            <div id="register" class="mt-4">
              <v-btn
                type="submit"
                width="100%"
                color="#BBE1FA"
                class="#1B262C--text"
              >
                ثبت
              </v-btn>
            </div>
          </v-container>
        </v-form>
      </div>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      vphone_number: '',
      vemail: '',
      vcompany_name: '',
      fnameRules: [
        (v) => !!v || this.msg_regEx.fname.empty,
        (v) => v.length >= 3 || this.msg_regEx.fname.length,
        // (v) => this.regEx.fname.test(v) || this.msg_regEx.fname.alphabet,
      ],
      lnameRules: [
        (v) => !!v || this.msg_regEx.lname.empty,
        (v) => v.length >= 2 || this.msg_regEx.lname.length,
        // (v) => this.regEx.lname.test(v) || this.msg_regEx.lname.alphabet,
      ],
      usernameRules: [
        (v) => !!v || this.msg_regEx.username.empty,
        (v) => v.length >= 3 || this.msg_regEx.username.length,
      ],
      company_nameRules: [
        (v) => !!v || this.msg_regEx.company_name.empty,
        (v) => v.length >= 3 || this.msg_regEx.company_name.empty,
      ],
      phone_numberRules: [
        (v) => !!v || this.msg_regEx.phone_number.empty,
        (v) =>
          this.regEx.phone_number.test(v) ||
          this.regEx.phone_number2.test(v) ||
          this.msg_regEx.phone_number.valid,
      ],
      emailRules: [
        (v) => !!v || this.msg_regEx.email.empty,
        (v) => this.regEx.email.test(v) || this.msg_regEx.email.valid,
      ],
    }
  },
  computed: {
    info_user() {
      const data = this.$auth.user
      return data
    },
    name: {
      get() {
        return this.$store.state.auth.user.fname
      },
      set(value) {
        const payload = {
          id: 'fname',
          value: value,
        }
        this.$store.commit('update_user', payload)
      },
    },
    lname: {
      get() {
        return this.$store.state.auth.user.lname
      },
      set(value) {
        const payload = {
          id: 'lname',
          value: value,
        }
        this.$store.commit('update_user', payload)
      },
    },
    username: {
      get() {
        return this.$store.state.auth.user.username
      },
      set(value) {
        const payload = {
          id: 'username',
          value: value,
        }
        this.$store.commit('update_user', payload)
      },
    },
    phoneNumber: {
      get() {
        if (this.$store.state.auth.user.phone_number) {
          return this.$store.state.auth.user.phone_number
        } else {
          return this.vphone_number
        }
      },
      set(value) {
        if (this.$store.state.auth.user.phone_number) {
          const payload = {
            id: 'phone_number',
            value: value,
          }
          this.$store.commit('update_user', payload)
        } else {
          this.vphone_number = value
        }
      },
    },
    email: {
      get() {
        if (this.$store.state.auth.user.email) {
          return this.$store.state.auth.user.email
        } else {
          return this.vemail
        }
      },
      set(value) {
        if (this.$store.state.auth.user.email) {
          const payload = {
            id: 'email',
            value: value,
          }
          this.$store.commit('update_user', payload)
        } else {
          this.vemail = value
        }
      },
    },
    company_name: {
      get() {
        if (this.$store.state.auth.user.company_name) {
          return this.$store.state.auth.user.company_name
        } else {
          return this.vcompany_name
        }
      },
      set(value) {
        if (this.$store.state.auth.user.company_name) {
          const payload = {
            id: 'company_name',
            value: value,
          }
          this.$store.commit('update_user', payload)
        } else {
          this.vcompany_name = value
        }
      },
    },
    msg_regEx() {
      return this.$store.getters.msg_regEx
    },
    regEx() {
      return this.$store.getters.regEx
    },
  },
  methods: {
    async register() {
      if (this.$refs.info_form.validate()) {
        const company_name = this.info_user.company_name
          ? this.info_user.company_name
          : this.vcompany_name
        const email = this.info_user.email ? this.info_user.email : this.vemail
        const phone_number = this.info_user.phone_number
          ? this.info_user.phone_number
          : this.vphone_number
        const form = new FormData()
        form.append('firstname', this.info_user.fname)
        form.append('lastname', this.info_user.lname)
        form.append('username', this.info_user.username)
        form.append('company', company_name)
        form.append('phoneNumber', phone_number)
        form.append('email', email)
        const datas = {
          token: this.$auth.$storage._state['_token.local'],
          form: form,
        }
        this.$store.dispatch('complete_information', datas)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
