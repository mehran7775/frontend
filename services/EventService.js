import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.BROWSER_BASE_API_URL || 'http://127.0.0.1:8000',
  // baseURL:'http://damirco.com',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  get_csrf_token(){
    return apiClient.get('api/get-csrftoken')
  },
  do_login(form) {
    return apiClient.post('api/signin', form)
  },
  do_register(form) {
    return apiClient.post('api/signup', form)
  },
  get_product(slug) {
    return apiClient.get('api/products/' + slug)
  },

  //-------UserPanel-----------//

  get_orders(payload) {
    return apiClient.get('api/userpanel/orders', {
      headers: {
        "Authorization": payload
      }
    })
  },
  get_inquiries(payload) {
    return apiClient.get('api/userpanel/inquiries', {
      headers: {
        "Authorization": payload
      }
    })
  },
  get_inquiry(payload) {
    return apiClient.get(`api/userpanel/inquiries/${payload.id}`, {
      headers: {
        "Authorization": payload.token
      }
    })
  },
  verify_order(payload) {
    return apiClient.post('api/userpanel/orders_verify/' + payload.id, null, {
      headers: {
        "Authorization": payload.token
      }
    })
  },
  create_product(payload) {
    return apiClient.post('api/userpanel/products', payload.form, {
      headers: {
        "Authorization": payload.token,
        "content-type": "multipart/form-data"
      }
    })
  },
  get_products_supplier(payload) {
    return apiClient.get('api/userpanel/products', {
      headers:{
        "Authorization": payload
      }
    })
  },
  remove_product(payload){
    let form=new FormData()
    form.append('_method','DELETE')
    return apiClient.post('api/userpanel/products/'+payload.id,form,{
      headers:{
        "Authorization" :payload.token
      }
    })
  },
  complete_information(payload){
    return apiClient.post('api/userpanel/user/edit',payload.form,{
      headers:{
        "Authorization": payload.token
      }
    })
  },
  get_product_edit(payload){
    return apiClient.get('api/userpanel/products/'+payload.id,{
      headers:{
        "Authorization": payload.token
      }
    })
  },
  edit_product(payload){
    return apiClient.post(`api/userpanel/products/${payload.id}`,payload.form,{
      headers:{
         "Authorization": payload.token,
         "content-type": "multipart/form-data"
      }
    })
  }
}
