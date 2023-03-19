import Vue from 'vue'
import App from './App.vue'


// 第三章3.1、3.2组件createComponent 和 组件patch

// Vue.component('Home', Home)

// new Vue({
//   data: {
//     a: '我是root'
//   },
//   components: { App },
//   render: h => h(App)
// }).$mount('#app')

// 第3.3节选项合并 3.4生命周期

let grandsonComp = {
  template: '<div>{{ msg }}</div>',
  data() {
    return {
      msg: 'Hello grandson'
    }
  },
  mounted() {
    console.log('grandson mount')
  },
}

let childComp = {
  // template: '<div>{{msg}}</div>',
  render(h) {
    return h('div', {
      attrs: {
        id: 'app1'
      }
    }, [this.msg, h(grandsonComp)])
  },
  created() {
    console.log('child create')
  },
  mounted() {
    console.log('child mount')
  },
  data() {
    return {
      msg: 'Hello Vue'
    }
  }
}

Vue.mixin({
  created() {
    console.log('parent create')
  }
})

new Vue({
  el: '#app',
  mounted() {
    console.log('app mount')
  },
  render: h => h(childComp)
})

// 第3.6小节 组件的注册
// Vue.component('app', App)

// new Vue({
//   el: '#app',
//   // template: '<app></app>',
//   render: (h) => h('app')
// })

// 第3.7小节 异步组件

// Vue.component('HelloWorld', function (resolve, reject) { // 工厂函数方式
//   // 这个特殊的require告诉webpack
//   // 自动将编译后的代码分割成不同的块
//   require(['@/components/HelloWorld'], function (res) {
//     debugger
//     resolve(res)
//   })
// })

// Vue.component('HelloWorld',
//   // import函数会返回一个promise对象
// () => import('@/components/HelloWorld'))

// const LoadingComp = {
//   template: '<div>loading</div>'
// }

// const ErrorComp = {
//   template: '<div>error</div>'
// }

// Vue.component('HelloWorld', () => ({
//   // 需要加载的组件，应当是个promise
//   component: import('@/components/HelloWorld'),
//   // 加载时渲染的组件
//   loading: LoadingComp,
//   // 出错时渲染的组件
//   error: ErrorComp,
//   // 渲染加载中组件前等待的时间。默认：200ms。
//   delay: 200,
//   // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
//   timeout: 1000
// }))

// new Vue({
//   el: '#app',
//   render: (h) => h('HelloWorld')
// })