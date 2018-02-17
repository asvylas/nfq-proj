import Api from '@/services/Api'

export default {
  getCards () {
    return Api().get(`cards`)
  }
}
