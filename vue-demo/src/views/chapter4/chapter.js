import Vue from 'vue'
import App from './App'
import UpdateComp from '@/components/UpdateComponent'
import diffComp from '@/components/diffComp'

// 第四章分析示例


// 示例一
// new Vue({
//   el: '#app',
//   data: {
//     a: 'root'
//   },
//   render(h) {
//     return h('div', this.a)
//   }
// })

// 示例二
// new Vue({
//   el: '#app',
//   data: {
//     a: 'root'
//   },
//   render(h) {
//     return h(App)
//   }
// })

// 示例三 4.6小节 检测变化注意事项
// new Vue({
//   el: '#app',
//   data: {
//     a: '',
//     b: ''
//   },
//   render(h) {
//     return h('div', [this.b || 1, this.a])
//   },
//   created() {
//     this.b = 100
//   },
//   mounted() {
//     this.b = 1000
//     this.a = 1000
//   }
// })

// 示例四 4.7小节 计算属性

// new Vue({
//   el: '#app',
//   data: {
//     a: 1,
//     b: 2
//   },
//   computed: {
//     cpd() {
//       return this.a + 10
//     }
//   },
//   render(h) {
//     return h('span', this.cpd)
//   },
//   mounted() {
//     // this.a = 2
//   }
// })

// 示例五 4.8小节 侦听器

// const obj = {
//   data: obj
// }
// new Vue({
//   el: '#app',
//   data: {
//     obj: {
//       a: 1
//     },
//     a: [],
//     c: ''
//   },
//   render(h) {
//     return h('div', [this.cpt, this.a])
//   },
//   computed: {
//     cpt() {}
//   },
//   watch: {
//     obj: {
//       handler() {
//         console.log('检测到了obj')
//       },
//       deep: true
//     },
//     a() {
//       console.log('检测到了a')
//     },
//     c: {
//       handler() {
//         console.log('检测到了c')
//       },
//       sync: true
//     }
//   },
//   mounted() {
//     this.a.push(2)
//     this.$set(this.obj, 'b', 2)
//     this.c = 3
//   }
// })

// 4.9小节 组件更新

// new Vue({
//   el: '#app',
//   render: h => h(UpdateComp, {
//     attrs: {
//       a: 1
//     }
//   })
// })

// 4.10小节 diff算法

new Vue({
  el: '#app',
  render: h => h(diffComp)
})