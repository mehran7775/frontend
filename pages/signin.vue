<template>
  <div id="signin">
    <div class="signin">
      <v-card>
        <v-card-title>
          <h2>ورود</h2>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="نام کاربری" v-model="username"></v-text-field>
            <v-text-field label="رمز عبور" v-model="password"></v-text-field>
            <v-btn class="primary--text" @click="login">ورود</v-btn>
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
</template>

<script>
export default {
  layout:'sign',
  head() {
    return {
      title: "صفحه ورود",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "با ورود به دمیرکو میتوانید به خرید و فروش و تعامل بپردازید",
        },
      ],
    };
  },
  middleware: "guest",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      let form = new FormData();
      form.append("username", this.username);
      form.append("password", this.password);
      // formData.append('data', JSON.stringify(this.data));
      this.$store.dispatch("do_login", form);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
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
    form {
      width: 90%;
      margin: auto;
      text-align: right;
      padding: 10px 20px;
      box-sizing: border-box;

      legend,
      label {
        color: map-get($colors, da_dismal);
        font-weight: bold;
      }

      .btn {
        background-color: map-get($colors, da_blue_light);
        // background-color: color(da_blue_dismal);
        color: #fff;
        margin-right: 5px;
      }
    }
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
