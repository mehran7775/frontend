<template>
  <v-card elevation="0" class="my-5 py-5">
    <v-form ref="CommentForm" lazy-validation @submit.prevent="sendComment">
      <v-alert v-model="error" type="error">{{
        message
      }}</v-alert>
      <v-alert v-model="success" type="success">{{
        message
      }}</v-alert>
      <v-row no-gutters>
        <v-col cols="12" md="6" class="px-5 d-flex flex-column justify-end">
          <v-text-field
            v-model="username"
            outlined
            name="username"
            :rules="username_rules"
            required
            label="نام"
            validate-on-blur
          />
          <v-text-field
            v-model="email"
            name="email"
            required
            :rules="email_rules"
            outlined
            label="ایمیل"
            validate-on-blur
          />
        </v-col>
        <v-col cols="12" md="6" class="px-5">
          <v-textarea
            v-model="content"
            outlined
            :rules="content_rules"
            validate-on-blur
            name="content"
            label="نظر"
            required
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" md="6" offset-md="6" class="px-5">
          <v-layout class="justify-center justify-md-start">
            <v-btn
              :color="success ? 'success' : 'primary'"
              type="submit"
              :loading="loading"
            >
              <v-icon v-if="success">mdi-check-outline</v-icon>
              <v-text v-else>ثبت نظر</v-text>
            </v-btn>
          </v-layout>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>
<script>
export default {
  props:{
    post_url:{
      type: String,
      required: true
    },
    object_id:{
      type: Number,
      required: true
    }
  },
  data() {
    return {
      success: false,
      error: false,
      message: '',
      loading: false,
      username: '',
      email: '',
      content: '',
      username_rules: [
        (v) => !!v || 'لطفا نام خود را وارد نمایید!',
        (v) =>
          /^[\u0600-\u06FF ]+$/.test(v) ||
          'لطفا نام خود را به فارسی وارد نمایید!',
      ],
      email_rules: [
        (v) => !!v || 'لطفا ایمیل خود را وارد نمایید!',
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'لطفا یک ایمیل معتبر وارد کنید!',
      ],
      content_rules: [(v) => !!v || 'لطفا نظر خود را وارد نمایید!'],
      phone_number_rules: [
        (v) => !!v || 'لطفا شماره همراه خود را وارد نمایید!',
        (v) =>
          /^09[0-9]{9}$/.test(v) ||
          /^\+[0-9]+$/.test(v) ||
          'شماره همراه معتبر نیست!',
      ],
    }
  },
  methods: {
    async sendComment() {
      if (this.success) return
      const isValid = await this.$refs.CommentForm.validate()
      if (!isValid) return
      this.loading = true
      const data = {
        username: this.username,
        email: this.email,
        content: this.content,
        object_id: this.object_id,
      }
      try {
        const res1 = await this.$axios.get('/api/get-csrftoken')
        this.$axios.defaults.headers.common['X-CSRFToken'] = res1.data.csrftoken
        await this.$axios.post(this.post_url, data)
        this.success = true
        this.error = false
        this.message =
          'با موفقیت ثبت شد.'
      } catch (err) {
        this.error = true
        this.message =
          'خطای سرور! لطفا بعدا دوباره امتحان کنید.'
      }

      this.loading = false
    },
  }
}
</script>