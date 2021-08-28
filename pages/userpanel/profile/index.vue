<template>
  <div id="profile_page">
    <div class="w-100">
      <div id="btn_edit">
        <v-btn
          color="#BBE1FA"
          class="#1B262C--text"
          @click="$router.push('/userpanel/profile/edit')"
        >
          تکمیل اطلاعات
        </v-btn>
      </div>
      <v-flex xs12 sm10 md8 class="ma-auto">
        <div class="infoo">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="نام"
                    id="firstName"
                    readonly
                    :value="
                      $auth.user.fname ? $auth.user.fname : 'وارد نشده است'
                    "
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    label="نام خانوادگی"
                    id="lastName"
                    readonly
                    :value="
                      $auth.user.lname ? $auth.user.lname : 'وارد نشده است'
                    "
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    label="نام کاربری"
                    id="username"
                    readonly
                    :value="$auth.user.username"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="نام شرکت"
                    id="company"
                    readonly
                    :value="
                      $auth.user.company ? $aurh.user.company : 'وارد نشده است'
                    "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="شماره تلفن"
                    id="phoneNumber"
                    readonly
                    :value="
                      $auth.user.phone_number
                        ? $aurh.user.phone_number
                        : 'وارد نشده است'
                    "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="ایمیل"
                    id="email"
                    readonly
                    :value="
                      $auth.user.email ? $aurh.user.email : 'وارد نشده است'
                    "
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </v-flex>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>
