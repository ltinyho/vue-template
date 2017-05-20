import Vue            from 'vue'
import Router         from 'vue-router'
Vue.use(Router)


import homeModuleRouter     from './homeModule'
const defaultRouter = {
  path    : '',
  redirect: {"name": 'home'}
}


const routers       = [].concat(
    homeModuleRouter,
    defaultRouter)

const router = new Router({
  routes: routers
})

router.afterEach(route => {
  if(route.meta.title){
    document.title = route.meta.title;
  }
})
export default router


