import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://174.138.9.241:8082/'
  })
}
