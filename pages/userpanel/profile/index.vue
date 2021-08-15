<template>
  <div id="profile_page">
    <div class="w-100">
      <div id="btn_edit">
        <btn class="pt-2 pr-2 pl-2" @event_fell="edit_info()">
          <!-- <template #></template> -->
          تکمیل اطلاعات
        </btn>
      </div>
      <div class="infoo">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  label="نام"
                  id="firstName"
                  readonly
                  :value="$auth.user.fname"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  label="نام خانوادگی"
                  id="lastName"
                  readonly
                  :value="$auth.user.lname ? $auth.user.lname : 'وارد نشده است'"
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
                  :value="$auth.user.email ? $aurh.user.email : 'وارد نشده است'"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
  </div>
</template>
    </div>
  </div>
</template>

<script>
import btn from '@/components/buttons/btn.vue'
export default {
  components: {
    btn,
  },
  methods: {
    edit_info() {
      this.$router.push('/userpanel/profile/edit')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
