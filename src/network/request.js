/*
 * @Description: 
 * @Autor: yllz
 * @Date: 2020-02-09 15:01:52
 * @LastEditors: yll
 * @LastEditTime: 2020-02-29 14:44:55
 */
import axios from 'axios'

//axios本身就是一个promise不需要再包装
export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000
  })

  //2.axios的拦截器
  //发送拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
  });
  //响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  });
  //3.发送真正的网络请求
  return instance(config)
}