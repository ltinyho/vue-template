/* @flow */

import authService from '../../services/authService'
export function beforeEnter(to:Object, from:Object, next:Function) {
  authService.checkLogin().then(res => {
    if (res.code === 200) {
      next();
    } else {
      authService.goLogin();
    }
  })
}
