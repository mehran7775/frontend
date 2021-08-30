<template>
  <v-flex>
    <div class="sign">
      <v-card class="px-5 py-2">
        <v-card-title>
          <h3>ورود/ثبت نام</h3>
        </v-card-title>
        <v-card-text>
          <v-form lazy-validation ref="form" @submit.prevent="continuee()">
            <v-text-field
              label="شماره تلفن"
              v-model="phone_number"
              :rules="phone_numberRules"
            ></v-text-field>
            <!-- <v-btn class="primary" @click="login">ورود</v-btn> -->
            <v-btn class="primary mt-2" type="submit">ادامه</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </v-flex>
</template>

<script>
import EventService from '@/services/EventService'
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
      phone_number: '',
      phone_numberRules: [
        (v) => !!v || this.msg_regEx.phone_number.empty,
        (v) =>
          this.regEx.phone_number.test(v) ||
          this.regEx.phone_number2.test(v) ||
          this.msg_regEx.phone_number.valid,
      ],
    }
  },
  methods: {
    async continuee() {
      if (this.$refs.form.validate()) {
        try {
          await EventService.send_sms_to_number(this.phone_number).then(
            (response) => {
              console.log(response)
            }
          )
          this.$router.push(`signVerify/${this.phone_number}`)
        } catch (e) {
          console.log(e)
        }
      }
    },
  },
  computed: {
    msg_regEx() {
      return this.$store.getters.msg_regEx
    },
    regEx() {
      return this.$store.getters.regEx
    },
  },
}
</script>

<
<style lang="scss" scoped>
@import 'assets/scss/variables';

  .sign {
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
