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
})

export const getters = {

}
export const mutations = {
  UPDATENAME(state,payload){
    state.product_edit.title=payload
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


}
