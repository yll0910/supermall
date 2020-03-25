/*
 * @Description: 
 * @Autor: yllz
 * @Date: 2020-02-09 16:43:08
 * @LastEditors: yll
 * @LastEditTime: 2020-02-29 15:15:55
 */
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}