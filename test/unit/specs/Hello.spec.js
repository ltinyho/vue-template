import Vue from 'vue'
import home from 'VIEWS/home/home'
describe('home', () => {
  it('should render correct contents', () => {
    const vm =new Vue(home).$mount();
    expect(vm.msg).to.be.equal('hello');
  })
})
