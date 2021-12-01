// 二次封装axios，拦截器

import axios from 'axios'
import config from '../config/index'
// 根据开发和生产环境设置api
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
console.log(baseUrl)
class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl, // 前面的baseURL中url必须是URl
      Header: {

      }
    }
    return config
  }

  interceptors (instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      console.log('拦截处理请求')
      return config
    }, function (error) {
      // 对请求错误做些什么
      console.log(error)
      return Promise.reject(error)
    })

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      console.log('拦截处理响应')
      return response.data
    }, function (error) {
      // 对响应错误做点什么
      console.log(error)
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    // 技巧，后面的覆盖前面的
    options = { ...(this.getInsideConfig()), ...options }
    console.log(options)
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseUrl)
