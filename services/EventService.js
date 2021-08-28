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
  send_sms_to_number(payload) {
    let form = new FormData()
    form.append('phone_number', JSON.stringify(payload))
    return apiClient.post('api/get-phone', form)
  },
}
