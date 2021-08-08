<template>
  <div id="edit_profile">
     <div class="w-100">
       <div id="btn_edit">
        <btn class="pt-2 pr-2 pl-2" @event_fell="back()"
        >
        بازگشت
        </btn>
      </div>
     </div>
    <div class="info">
      <legend class="font-weight-bold mb-3">تکمیل اطلاعات</legend>
      <div class="form-inline">
        <div class="form-group">
          <label for="firstName">نام</label>
          <input
            type="text"
            title="نام درسا وارد نشده است"
            required
            placeholder="نام خودرا به فارسی وارد کنید"
            id="firstName"
            name="firstname"
            ref="firstName"
            :value="info_user.fname"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="lastName">نام خانوادگی</label>
          <input
            type="text"
            required
            class="form-control"
            title="نام خانوادگی درست وارد نشده است"
            placeholder="نام خانوادگی به فارسی وارد شود"
            id="lastName"
            name="lastName"
            :value="info_user.lname"
            ref="lastName"
          />
        </div>
      </div>
      <div class="form-inline mt-2">
        <div class="form-group">
          <label for="username">نام کاربری</label>
          <input
            type="text"
            required
            class="form-control"
            id="username"
            name="username"
            ref="username"
            placeholder="نام کاربری خود را وارد کنید"
            title="نام کاربری درست وارد نشده است"
            :value="info_user.username"
          />
        </div>
        <div class="form-group">
          <label for="company">نام شرکت</label>
          <input
            type="text"
            class="form-control"
            id="company"
            name="company"
            ref="company"
            placeholder="نام شرکت خودرا وارد کنید"
            title="نام شرکت درست وارد نشده است"
            :value="info_user.company ? info_user.company : ''"
          />
        </div>
      </div>
      <div class="form-inline mt-2">
        <div class="form-group">
          <label for="phoneNumber">شماره تلفن</label>
          <input
            type="text"
            class="form-control"
            required
            id="phoneNumber"
            name="phoneNumber"
            title="شماره تلفن اشتباه وارد شده است"
            ref="phoneNumber"
            placeholder="09xxxxxxxxx"
            :value="info_user.phone_number ? info_user.phone_number : ''"
          />
        </div>
        <div class="form-group">
          <label for="email">ایمیل</label>
          <input
            type="email"
            class="form-control"
            required
            id="email"
            name="email"
            ref="email"
            placeholder="ایمیل خود را وارد کنید"
            title="ایمل اشتباه وارد شده است"
            :value="info_user.email ? info_user.email : ''"
          />
        </div>
      </div>
      <div id="register">
        <btn class="pt-2" @event_fell="register()"
        >
        ثبت
        </btn>
      </div>
    </div>
  </div>
</template>

<script>
import btn from "@/components/buttons/btn.vue"
export default {
  data() {
    return {
      // user:this.$store.state.auth.user
    }
  },
  components:{
    btn
  },
  methods:{
    back(){
      this.$router.back()
    },
    async register(){
      const form=new FormData()
      // console.log(this.$refs.firstname.value)
      form.append('firstname',this.$refs.firstName.value)
      form.append('lastname',this.$refs.lastName.value)
      form.append('username',this.$refs.username.value)
      form.append('company',this.$refs.company.value)
      form.append('phoneNumber',this.$refs.phoneNumber.value)
      form.append('email',this.$refs.email.value)
      const data={
        token:this.$auth.$storage._state["_token.local"],
        form:form
      }
      await this.$store.dispatch('complete_information',data)
    }
  },
  computed:{
    info_user(){
      const data=this.$auth.user
      return data
    }

  }
};
</script>

<style lang="scss" scoped>
</style>
