import EventService from "@/services/EventService.js"
import Vue from 'vue'
export const state = () => ({
  regularExpression: {
    regName: /^[ ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئوآژ]{3,25}$/,
    regLastName: /^[ ضصثقفغعهخحژجآچپشسیبلاتنمکژگظطزرذدئو]{3,35}$/,
    regFullName: /^[ ضصثقفغعهخحژجآچپشسیبلاتنمکگظطزرذدئو]{3,50}$/,
    regUsername: /^[a-zA_Zضصثقفغعهخحژجچپشسیآبلاتنمکگظطزرذدئو0-9]{3,20}$/gi,
    regPassword: /^[\u06F0-\u06F90-9a-zA-Z0-9ضصآثقفغعهخحجچپشسیبلاژتنمکگظطزرذدئو ]{4,20}$/g,
    regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    reg_phoneNumber: /^[0-9\u06F0-\u06F90-9]{11}$/gi,
    regNameCompany: /^[ًٌٍ،؛َُِّۀآـ«»,:"ةيژؤإأء<> -؟ضصثقفغعهژخحجچپشسیبلاتنمکگظطزرذدئو./a-zA-Z0-9\u06F0-\u06F90-9]{3,100}$/
  },
  get_home: null,
  product: null,
  re_render_components: {
    customers: true
  }
})

export const getters = {
  product(state) {
    return state.product
  },
  orders(state) {
    return state.orders
  },
  re_render_components(state) {
    return state.re_render_components
  },
  regEx(state) {
    return state.regularExpression
  },
  products_panel(state) {
    return state.products_panel
  }
}
export const mutations = {

  SET_RESULT_HOME(state, payload) {
    state.get_home = payload
  },
  SET_PRODUCT(state, payload) {

    Vue.set(state, 'product', payload)
    // state.product = payload
  },
  SET_ORDERS(state, payload) {
    Vue.set(state, 'orders', payload)
  },
  SET_PRODUCTS_PANEL(state, payload) {
    Vue.set(state, 'products_panel', payload)
  },
  SET_PRODUCT_EDIT(state,payload){
    Vue.set(state,'product_edit',payload)
  },
  UPDATENAME(state,payload){
    state.product_edit.name=payload
  },
  UPDATEDESCRIPTION(state, payload) {
    state.product_edit.description=payload
  },
  update_user(state,payload){
    if(payload.id==="fname"){
      state.auth.user.fname=payload.value
    }
    if(payload.id==="lname"){
      state.auth.user.lname=payload.value
    }
    if(payload.id==="username"){
      state.auth.user.username=payload.value
    }
    if (payload.id === "phone_number") {
      state.auth.user.phone_number = payload.value
    }
    if (payload.id === "email") {
      state.auth.user.email = payload.value
    }
    if (payload.id === "company_name") {
      state.auth.user.company_name = payload.value
    }
  }
}


export const actions = {
  async get_home({
    commit
  }) {
    try {
      await EventService.get_home()
        .then(response => {
          commit('SET_RESULT_HOME', response.data.result)
        })
    } catch (e) {
      console.log('e', e)
    }

  },
  async do_register({
    commit
  }, form) {
    try {
      await EventService.do_register(form)
        .then(response => {
          console.log(response)
        })
      await this.$auth.loginWith('local', {
        data: form
      })
    } catch (e) {
      console.log('e', e)
    }
  },
  async do_login({
    commit
  }, form) {
    try {
      await this.$auth.loginWith('local', {
        data: form,
      })
      console.log(this.$auth)
    } catch (e) {
      console.log('e', e.response)
    }
  },
  async get_product({
    commit
  }, slug) {
    try {
      await EventService.get_product(slug)
        .then(response => {
          let product = JSON.parse(response.data)
          commit('SET_PRODUCT', product)
        })
    } catch (e) {
      console.log('e', e)
    }
  },
  async get_orders({
    commit
  }, payload) {
    try {
      await EventService.get_orders(payload)
        .then(response => {
          commit('SET_ORDERS', JSON.parse(response.data))
        })
    } catch (e) {
      console.log(e)
    }
  },
  async verify_order({
    commit
  }, payload) {
    try {
      await EventService.verify_order(payload)
        .then(response => {
          console.log(response)
        })
    } catch (e) {
      console.log(e)
    }
  },
  async create_product({
    commit
  }, payload) {
    console.log(payload)
    try {
      await EventService.create_product(payload)
        .then(response => {
          console.log(response)
        })
    } catch (e) {
      console.log(e)
    }
  },
  async get_products_supplier({
    commit
  }, payload) {
    try {
      await EventService.get_products_supplier(payload)
        .then(response => {
          commit('SET_PRODUCTS_PANEL', JSON.parse(response.data))
        })
    } catch (e) {
      console.log(e)
    }
  },
  async remove_product({commit},payload) {
    try {
      EventService.remove_product(payload)
      .then(response =>{
        // console.log(response)
      })
    } catch (e) {
      console.log(e)
    }
  },
  async complete_information({commit},payload){
    try{
      await EventService.complete_information(payload)
      .then(response =>{
        console.log(response)
      })
    }catch(e){
      console.log(e)
    }
  },
  async get_product_edit({commit},payload){
    try{
      await EventService.get_product_edit(payload)
        .then(response => {
          commit('SET_PRODUCT_EDIT',JSON.parse(response.data))
        })
    }catch(e){
      console.log(e)
    }
  },
  async edit_product({commit},payload){
    try{
      await EventService.edit_product(payload)
        .then(response => {
          console.log(response)
        })
    }catch(e){
      console.log(e)
    }
  }

}
