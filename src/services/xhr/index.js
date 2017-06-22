import axios from 'axios'

axios.defaults.baseURL                     = ''; // 后端 API 根路径
axios.defaults.withCredentials             = true;

/**
 * XHR 请求接口定义
 * @param  {String} options.method 请求方法（默认为 get）
 * @param  {String} options.url    请求路径（基于 rootPath 地址）
 * @param  {Object} options.data   请求体（例如后端 Express 可使用 req.data 获取该对象）
 * @returns {Promise<R>|Promise.<T>}
 */

let qs = require('qs');
import Cache from './cache'
const cacheInstance = new Cache();

axios.defaults.transformRequest = [function(data) {
  data = qs.stringify(data)
  return data;
}]

axios.defaults.transformResponse = [function(data) {
  data = JSON.parse(data)
  return data;
}]

const xhr   = ({ method = 'get', url, data = null, cache = false }) => {
  let resdata;
  if ( cache && (resdata=cacheInstance.get(url)) ) {
    return new Promise((resolve) => {
      resolve(resdata);
    });
  }


  let headersContentType = method=='get'?'application/json':'application/x-www-form-urlencoded';
  return  axios({
    method: method,
    url: url,
    data: data,
    headers: {
      'Content-Type': headersContentType,
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
  .then((res) => {
    cache && cacheInstance.set(url, res.data);
    return res.data;
  })
  .catch((error) => {
    if ( error.status === 504 ) {
      console.log('网络出错,请检测您的网络是否良好');
    }
    console.error('An error occurred', error);
  });
}

export default xhr
