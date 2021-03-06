import axios from 'axios'
// import store from '@/store'
import element from 'element-ui';
import router from "../router";


axios.create({
  // headers: {'Content-Type': 'application/json'},
  baseURL: "/api", // api的base_url
  timeout: 50000
});
// axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截
axios.interceptors.request.use(config => {

  // if (store.state.token) {
  //   config.headers = {
  //     "User-Token": store.state.token
  //   }
  // }
  return config
}, error => {
  console.error('error:' + error); // for debug
  return Promise.reject(error)
})
axios.interceptors.response.use(
  response => {
    return response
  }, error => {
    console.error('error:' + error); // for debug
    Promise.reject(error)
  }
)

export default axios



