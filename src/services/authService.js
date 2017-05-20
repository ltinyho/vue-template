// @flow
import xhr from './xhr'


class authService {
  constructor() {}
  checkLogin() {
    if (sessionStorage.getItem('isLogin') !== '1') {
      return xhr({
        url: '/api/home/checklogin/'
      }).then(restful => {
        if (restful.code === 200) {
          sessionStorage.setItem('isLogin', '1');
        } else {
          sessionStorage.removeItem('isLogin');
        }
        return restful;
      })
    } else {
      return new Promise((resolve) => {
        resolve({code: 200, message: 'ok'});
      });
    }
  }

  logout(backurl:string) {
    sessionStorage.removeItem('isLogin');
    window.location.href = '/new/home/Login/logout/?url=' + encodeURIComponent(backurl);
  }

  loginUrl() {
    return '/new/mm/login/index?returnurl=' + encodeURIComponent(window.location.href);
  }

  goLogin(backUrl:string) {
    if(!backUrl){
      window.location.href = '/new/mm/login/index?returnurl=' + encodeURIComponent(window.location.href);
    }else{
      window.location.href = '/new/mm/login/index?returnurl=' + encodeURIComponent(backUrl);
    }
  }

  /**
   *
   * @param {Object} data.mobile
   * @returns {Promise.<R>|Promise.<T>}
   */
  mobileRegister(data:Object) {
    return xhr(
        {
          method: 'post',
          url   : '/new/home/buy/sendMobileMsg',
          data  : data,
        }
    )
  }

  /**
   *      手机验证码
   * @param {Object} data.mobile
   * @param {Object} data.code
   * @returns {Promise.<R>|Promise.<T>}
   */
  checkMobileCode(data:Object) {
    return xhr(
        {
          method: 'post',
          url   : '/new/home/buy/checkCode',
          data  : data,
        }
    )
  }

  /**
   * 班级用户访问日志
   * @param classId
   */
  userClassVisitLog(classId,type){
    return xhr({
      url:`/api/home/visitclassroom/${classId}/type/${type}` // 2:手机端 1:电脑端
    })
  }
}

export default new authService();