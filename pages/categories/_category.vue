<template>
  <v-layout column>
    <v-breadcrumbs :items="breadcrumbs" divider="/" />
    <v-card class="pa-5 my-5" elevation="0">
      <h1 class="text-h6 primary--text mb-3">{{page.title}}</h1>
      <p> در پایین لیست محصولات می‌توانید پاسخ سوالات احتمالی خود را در مورد محصولات {{page.title}} ببینید.<br>
      در نهایت اگر مایل بودید باز هم برای مشاوره و انتخاب بهتر دستگاه مورد نظرتان با ما تماس بگیرید. <v-btn text dir="ltr" href="tel:02177569156">021-77569156</v-btn></p>
    </v-card>
    <TitleBox>محصولات</TitleBox>
    <v-card elevation="0" class="my-5 py-5">
      <v-form ref="CommentForm" lazy-validation @submit.prevent="sendComment">
        <v-alert v-model="category_comment.error" type="error" >{{category_comment.message}}</v-alert>
        <v-alert v-model="category_comment.success" type="success" >{{category_comment.message}}</v-alert>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="px-5 d-flex flex-column justify-end">
            <v-text-field
              v-model="category_comment.username"
              outlined
              name="username"
              :rules="username_rules"
              required
              label="نام"
              validate-on-blur
            />
            <v-text-field
              v-model="category_comment.email"
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
              v-model="category_comment.content"
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
                :color="category_comment.success? 'success':'primary'"
                type="submit"
                :loading="category_comment.loading"
              >
                <v-icon  v-if="category_comment.success" >mdi-check-outline</v-icon>
                <v-text v-else>ثبت نظر</v-text>
              </v-btn>
            </v-layout>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = (
      await $axios.get(`/api/categories-api/main-categories/?slug=${encodeURIComponent(params.category)}`)
    ).data
    if (data.count > 0) {
      const result=data.results[0]
      return {
        page: result,
        breadcrumbs: [
          {
            text: 'خانه',
            disabled: false,
            href: '/',
          },
          {
            text: result.title,
            disabled: false,
            href: `/categories/${result.slug}`,
          }
        ],
      }
    }
  },
  data() {
    return {  
      page:{},
      breadcrumbs:[],
      category_comment:{
        success: false,
        error: false,
        message: '',
        username: '',
        email: '',
        content: '',
      }
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.meta_description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.page.meta_keywords,
        },
        {
          hid: 'author',
          name: 'author',
          content: this.page.meta_author,
        },
      ],
    }
  },
}
</script>