import axios from 'axios'

class ApiService {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: process.env.VUE_APP_API_BASE_URL || 'http://127.0.0.1:8000/api'
    })
  }

  get(endpoint, params = {}) {
    const config = {
      params,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    }
    return this.client.get(endpoint, config)
  }

  post(endpoint, data = {}) {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    }
    return this.client.post(endpoint, data, config)
  }

  put(endpoint, data = {}) {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    }
    return this.client.put(endpoint, data, config)
  }

  delete(endpoint) {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    }
    return this.client.delete(endpoint, config)
  }

  getUser() {
    return this.get('/user')
  }
}

export default new ApiService()