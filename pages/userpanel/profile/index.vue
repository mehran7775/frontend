<template>
  <div id="profile_page">
    <div class="w-100">
      <div id="btn_edit">
        <btn class="pt-2 pr-2 pl-2" @event_fell="edit_info()">
         <!-- <template #></template> -->
            تکمیل اطلاعات
         </btn>
      </div>
      <div class="info">
        <legend class="font-weight-bold mb-3">اطلاعات کاربری</legend>
        <div class="form-inline">
          <div class="form-group">
            <label for="firstName">نام</label>
            <input
              type="text"
              id="firstName"
              class="form-control"
              readonly
              :value="$auth.user.fname"
            />
          </div>
          <div class="form-group">
            <label for="lastName">نام خانوادگی</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              readonly
              :value="$auth.user.lname?$auth.user.lname:'وارد نشده است' "
            />
          </div>
        </div>
        <div class="form-inline mt-2">
          <div class="form-group">
            <label for="username">نام کاربری</label>
            <input
              type="text"
              class="form-control"
              id="username"
              readonly
              :value="$auth.user.username"
            />
          </div>
          <div class="form-group">
            <label for="company">نام شرکت</label>
            <input
              type="text"
              class="form-control"
              id="company"
              readonly
              :value="$auth.user.company ? $aurh.user.company:'وارد نشده است'"
            />
          </div>
        </div>
        <div class="form-inline mt-2">
          <div class="form-group">
            <label for="phoneNumber">شماره تلفن</label>
            <input
              type="text"
              class="form-control"
              id="phoneNumber"
              readonly
              :value="$auth.user.phone_number ? $aurh.user.phone_number:'وارد نشده است'"
            />
          </div>
          <div class="form-group">
            <label for="email">ایمیل</label>
            <input
              type="email"
              class="form-control"
              id="email"
              readonly
              :value="$auth.user.email ? $aurh.user.email:'وارد نشده است'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btn from "@/components/buttons/btn.vue"
export default {
  components: {
    btn,
  },
  methods: {
    edit_info() {
      this.$router.push("/userpanel/profile/edit");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
