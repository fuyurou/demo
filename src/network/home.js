import { request } from './request'

export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
    // url:'/category'
  });
}

export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }

  });
}