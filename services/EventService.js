import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
  // baseURL:'http://damirco.com',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
   send_sms_to_number(payload) {
     let form = new FormData()
     form.append('phone_number', JSON.stringify(payload))
     return apiClient.post('users-api/get-code', form)
   },
}
