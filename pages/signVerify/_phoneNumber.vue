<template>
  <div class="verify">
    <v-card>
      <v-card-title>
        <h3>
          کد ارسال شده به شماره <span>({{ phone_number }})</span> را وارکنید
        </h3>
      </v-card-title>
      <v-card-text>
        <!-- <v-form> -->
        <section class="inputs_code">
          <input
            type="text"
            id="input_code"
            size="1"
            v-for="(key, i) in activationKeyFields"
            :key="i"
            :maxlength="key.length"
            :data-length="key.length"
            :data-index="i"
            :ref="`input-${i}`"
            v-model="key.value"
            @input="handleActivationInput($event)"
          />
        </section>
        <section id="send_again">
          <button
            class="btn_again_code"
            type="button"
            @click="again_send_code_verify()"
            :disabled="again_send_code"
          >
            دریافت دوباره کد -
          </button>
          <span id="counter_time"></span>
        </section>
        <div>
          <div class="end_register">
            <input type="hidden" name="code_email" :value="activationKey" />
            <v-btn
              :class="[activationKey.length === 5 ? 'active-btn' : null]"
              :disabled="activationKey.length === 5 ? false : true"
              @click="end_sign()"
              >ثبت
            </v-btn>
            <!-- <input
                :class="[
                  activationKey.length === 5 ? 'active-btn' : null,
                  'w-100 text-center form-control font-weight-bold',
                ]"
                type="submit"
                value="ثبت"
                :disabled="activationKey.length === 5 ? false : true"
              /> -->
          </div>
        </div>
        <!-- </v-form> -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import EventService from '@/services/EventService'
export default {
  layout: 'sign',
  computed: {
    phone_number() {
      return this.$route.params.phoneNumber
    },
    activationKey() {
      let value = ''
      for (let field of this.activationKeyFields) {
        value += field.value
      }
      return value
    },
  },
  data() {
    return {
      valid_phoneNumber: false,
      activationKeyFields: [
        { length: 1, value: '' },
        { length: 1, value: '' },
        { length: 1, value: '' },
        { length: 1, value: '' },
        { length: 1, value: '' },
      ],
      phone_nu: '',
      again_send_code: true,
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    handleActivationInput(e) {
      let value = e.target.value
      let index = parseInt(e.target.dataset.index)
      let maxlength = e.target.dataset.length
      if (this.activationKeyFields[index].value.length > maxlength) {
        e.preventDefault()
        this.activationKeyFields[index].value = value.slice(0, 6)
        try {
          this.$refs[`input-${parseInt(index + 1)}`][0].focus()
        } catch (e) {}
        return
      }

      if (value.length >= maxlength) {
        if (typeof this.activationKeyFields[index + 1] == 'undefined') {
          e.preventDefault()
          return
        }
        this.$refs[`input-${parseInt(index + 1)}`][0].focus()
        e.preventDefault()
      }
    },
    startTimer() {
      const duration = 90
      const display = document.getElementById('counter_time')
      let vm = this
      let timer = duration,
        minutes,
        seconds
      let start = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        display.textContent = minutes + ':' + seconds
        if (--timer < 0) {
          clearInterval(start)
          vm.again_send_code = false
        }
      }, 1000)
    },
    async again_send_code_verify() {
      try {
        await EventService.send_sms_to_number(
          this.$route.params.phoneNumber
        ).then((response) => {
          console.log(response)
        })
        this.$router.app.refresh()
        this.startTimer()
      } catch (e) {
        console.log(e)
      }
    },
    async end_sign() {
      const form = new FormData()
      form.append('phone_number', this.$route.params.phoneNumber)
      form.append('code_verify', this.activationKey)
      try {
        await this.$auth.loginWith('local', {
          data: form,
        }).then(res =>{
          this.$router.back()
        })
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.verify {
  width: 60%;
  position: absolute;
  top: 100px;
  right: 19%;

  .inputs_code {
    direction: ltr;

    #input_code {
      width: 30px;
      height: 30px;
      background-color: whitesmoke;
      margin: 5px;
      border: solid 1px solid;
      text-align: center;
    }
  }
  #send_again {
    .btn_again_code {
      background-color: white;
      width: max-content;
      padding: 1px 5px 1px 5px;
      color: var(--blue) !important;
      border: none;
    }
  }
  .end_register {
    width: 100%;
    display: flex;
    justify-content: center;
    // background-color: yellowgreen;

    button {
      width: 60%;
      margin: auto;
    }
  }
}
</style>
