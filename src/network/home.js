/*
 * @Description: 
 * @Autor: yllz
 * @Date: 2020-02-09 16:43:08
 * @LastEditors  : yllz
 * @LastEditTime : 2020-02-09 17:03:22
 */
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}