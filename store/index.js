import EventService from "@/services/EventService.js"
import Vue from 'vue'
export const state = () => ({
  regularExpression: {
    fname: /^[\u0600-\u06FF ]+$/g,
    lname: /^[\u0600-\u06FF ]+$/g,
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    phone_number: /^09[0-9]{9}$/,
    phone_number2: /^\+[0-9]+$/

  },
  msg_regEx: {
    fname: {
      empty: 'لطفا نام خود را وارد کنید!',
      length: 'نام باید حداقل سه کاراکتر باشد!',
      alphabet: 'لطفا نام خود را به فارسی وارد کنید!'
    },
    lname: {
      empty: 'لطفا نام خانوادگی خود را وارد کنید!',
      length: 'نام خانوادگی باید حداقل دو کاراکتر باشد!',
      alphabet: 'لطفا نام خانوادگی خود را به فارسی وارد کنید!'
    },
    username: {
      empty: 'لطفا نام کاربری خود را وارد کنید!',
      length: 'نام کاربری باید حداقل سه کاراکتر باشد!',
      valid: 'نام کاربری باید شامل حرف خاص(.,) باشد'
    },
    email: {
      empty: 'لطفا ایمیل خود را وارد کنید!',
      valid: 'لطفا یک ایمیل معتبر وارد کنید!'
    },
    phone_number: {
      empty: 'لطفا شماره تلفن خود را وارد کنید!',
      valid: 'شماره تلفن صحیح وارد نشده است!!'
    },
    company_name: {
      empty: 'لطفا نام شرکت خود را وارد کنید!',
      length: 'نام شرکت باید حداقل سه کاراکتر باشد!'
    },
    product: {
      name: {
        empty: 'لطفا نام محصول را وارد کنید!',
        length: 'نام محصول باید حداقل سه کاراکتر باشد!',
      },
      picture: {
        empty: 'لطفا عکس محصول را وارد کنید!',
        length: 'عکس باید کمتر از 5 MB باشد',
        type: 'فرمت عکس باید بصورت jpg,png,bmp باشد',
      },
      description: {
        empty: 'لطفا توضیحی برای محصول خودوارد کنید!',
        length: 'توضیخات باید حداقل ده کاراکترباشد!',
      },
    },
    password: {
      empty: 'لطفا رمزعبور خود را وارد کنید!',
      length: 'رمز عبور حداقل باید چهارکاراکتر باشد!'
    }
  },
  info_snackbar: {
    snackbar: false,
    text: '',
    color: 'success lighten-1'
  },
})

export const getters = {
  regEx(state) {
    return state.regularExpression
  },
  msg_regEx(state) {
    return state.msg_regEx
  },
  content_editor(state) {
    return state.content_editor
  }
}
export const mutations = {
  UPDATENAME(state, payload) {
    state.product_edit.title = payload
  },
  UPDATEDESCRIPTION(state, payload) {
    state.product_edit.description = payload
  },
  update_user(state, payload) {
    if (payload.id === "fname") {
      state.auth.user.first_name = payload.value
    }
    if (payload.id === "lname") {
      state.auth.user.last_name = payload.value
    }
    if (payload.id === "username") {
      state.auth.user.username = payload.value
    }
    if (payload.id === "phone_number") {
      state.auth.user.phone_number = payload.value
    }
    if (payload.id === "email") {
      state.auth.user.email = payload.value
    }
    if (payload.id === "company_name") {
      state.auth.user.company = payload.value
    }
  },
  SET_INFO_SNACKBAR(state, payload) {
    state.info_snackbar.snackbar = payload.snackbar
    state.info_snackbar.color = payload.color
    state.info_snackbar.text = payload.text
  },
  DEACTIVE_SNACKBAR(state, payload) {
    state.info_snackbar.snackbar = payload
  },
}


export const actions = {
  async create_product({
    commit
  }, payload) {
    try {
      await EventService.create_product(payload)
        .then((res) => {
          console.log(res)
          const data = {
            snackbar: true,
            text: 'محصول با موفقیت ایجاد شد',
            color: 'success lighten-1'
          }
          this.$router.push('/userpanel/products/')
          commit('SET_INFO_SNACKBAR', data)
        })
    } catch (e) {
      const data = {
        snackbar: true,
        text: 'خطایی در ایجاد محصول رخ داد',
        color: 'red lighten-1'
      }

      commit('SET_INFO_SNACKBAR', data)
      console.log(e)
    }
  },
  async edit_product({
    commit
  }, payload) {
    try {
      await EventService.edit_product(payload)
        .then((res) => {
          console.log(res)
          const data = {
            snackbar: true,
            text: 'محصول با موفقیت ویرایش شد',
            color: 'success lighten-1'
          }
          this.$router.push('/userpanel/products/')
          commit('SET_INFO_SNACKBAR', data)
        })
    } catch (e) {
      const data = {
        snackbar: true,
        text: 'خطایی در ایجاد محصول رخ داد',
        color: 'red lighten-1'
      }
      commit('SET_INFO_SNACKBAR', data)
      console.log(e)
    }
  },
  async remove_product({
    commit
  }, payload) {
    try {
      await EventService.remove_product(payload)
        .then((res) => {
          console.log(res)
          const data = {
            snackbar: true,
            text: 'محصول با موفقیت حذف شد',
            color: 'success lighten-1'
          }
          $nuxt.refresh()
          commit('SET_INFO_SNACKBAR', data)
        })
    } catch (e) {
      const data = {
        snackbar: true,
        text: 'خطایی در حذف محصول رخ داده است.',
        color: 'red lighten-1'
      }
      commit('SET_INFO_SNACKBAR', data)
      console.log(e)
    }
  },
  async complete_information({
    commit
  }, payload) {
    try {
      await EventService.complete_information(payload)
        .then((res) => {
          console.log(res.data)
          this.$auth.setUser(res.data.user)
          const snack = {
            snackbar: true,
            text:res.data.msg,
            color: 'success lighten-1'
          }
          this.$router.push('/userpanel/profile/')
          commit('SET_INFO_SNACKBAR', snack)
        })
      // const {data} = await EventService.get_user()

    } catch (e) {
      const data = {
        snackbar: true,
        text: 'خطایی در ثبت اطلاعات رخ داده است.',
        color: 'red lighten-1'
      }
      commit('SET_INFO_SNACKBAR', data)
      console.log(e)
    }
  },

}
