import axios from 'axios'

const apiClient = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})

export default {

  get_csrf_token() {
    return apiClient.get('/api/get-csrftoken/')
  },
  async do_register(form) {
    const re = await this.get_csrf_token()
    const csrf = re.data.csrftoken
    return apiClient.post('/api/signup/', form, {
      headers: {
        'X-CSRFToken': csrf
      }
    })
  },
  get_product(slug) {
    return apiClient.get('/api/products/' + slug)
  },

  //-------UserPanel-----------//

  get_orders(payload) {
    return apiClient.get('/api/userpanel/orders/', {
      headers: {
        "Authorization": payload
      }
    })
  },
  get_inquiries(payload) {
    return apiClient.get('/api/userpanel/inquiries/', {
      headers: {
        "Authorization": payload
      }
    })
  },
  get_inquiry(payload) {
    return apiClient.get(`/api/userpanel/inquiries/${payload.id}`, {
      headers: {
        "Authorization": payload.token
      }
    })
  },
  async verify_order(payload) {
    const re = await this.get_csrf_token()
    const csrf = re.data.csrftoken
    return apiClient.post(`/api/userpanel/orders_verify/${payload.id}`, null, {
      headers: {
        "Authorization": payload.token,
        'X-CSRFToken': csrf
      }
    })
  },
  async create_product(payload) {
    const re = await this.get_csrf_token()
    const csrf = re.data.csrftoken
    return apiClient.post('/api/userpanel/products/', payload.form, {
      headers: {
        "Authorization": payload.token,
        "content-type": "multipart/form-data",
        'X-CSRFToken': csrf
      }
    })
  },
  get_products_supplier(payload) {
    return apiClient.get('/api/userpanel/products/', {
      headers: {
        "Authorization": payload
      }
    })
  },
  async remove_product(payload) {
    const re = await this.get_csrf_token()
    const csrf = re.data.csrftoken
    let form = new FormData()
    form.append('_method', 'DELETE')
    return apiClient.post(`/api/userpanel/products/${payload.id}`, form, {
      headers: {
        "Authorization": payload.token,
        'X-CSRFToken': csrf
      }
    })
  },
  async complete_information(payload) {
    const re = await this.get_csrf_token()
    const csrf = re.data.csrftoken
    return apiClient.post(`/api/userpanel/user/edit/`,payload.form, {
      headers: {
        "Authorization": payload.token,
        'X-CSRFToken': csrf
      }
    })
  },
  get_product_edit(payload) {
    return apiClient.get(`/api/userpanel/products/${payload.id}`, {
      headers: {
        "Authorization": payload.token
      }
    })
  },
  async edit_product(payload) {
    const re = await this.get_csrf_token()
    const csrf = re.data.csrftoken
    return apiClient.put(`/api/userpanel/products/${payload.id}/`, payload.form, {
      headers: {
        "Authorization": payload.token,
        "content-type": "multipart/form-data",
        'X-CSRFToken': csrf
      }
    })
  },
  async send_sms_to_number(payload) {
    const re = await this.get_csrf_token()
    const csrf = re.data.csrftoken
    let form = new FormData()
    form.append('phone_number', JSON.stringify(payload))
    return apiClient.post('/api/get-phone/', form, {
      headers: {
        'X-CSRFToken': csrf
      }
    })
  },
}
