import axios from 'axios'

axios.defaults.baseURL = ''; // 后端 API 根路径
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'};

/**
 * XHR 请求接口定义
 * @param  {String} options.method 请求方法（默认为 get）
 * @param  {String} options.url    请求路径（基于 rootPath 地址）
 * @param  {Object} options.data   请求体（例如后端 Express 可使用 req.data 获取该对象）
 * @returns {Promise<R>|Promise.<T>}
 */
let qs = require('qs')
const xhr = ({method = 'get', url, data = null}) => {
  let fd = new FormData();
  for(let key in data){
    fd.append(key,data[key])
  }
  return  axios({
    method: method,
    url: url,
    data: fd,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  .then((res)=>{
    return res.data;
  })
  .catch((error)=>{
    if (error.status === 504) {
      console.log('网络出错,请检测您的网络是否良好');
    }
    console.error('An error occurred', error);
  });
}

export default xhr
