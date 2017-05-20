const home      = r => require.ensure([], () => r(require('../views/home/home.vue')), 'home')

const homeModuleRouter = [
  {
    path     : '/home',
    name     : 'home',
    component: home
  },
]

export default homeModuleRouter
