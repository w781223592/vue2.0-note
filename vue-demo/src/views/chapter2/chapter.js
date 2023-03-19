// import Vue from 'vue'

// 第二章分析示例

// new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue',
//     //_dataMsg: 'Hi Vue'
//   },
//   render(h) {
//     return h('div', {
//       attrs: {
//         id: 'app'
//       }
//     }, [this.message, h('div', Symbol())])
//   },
//   mounted() {
//     // this.ctrl = 'abc'
//     // this.message = 'hello world'
//   },
//   methods: {
//     getMessage() {
//       this.message + '1'
//     }
//   }
// }).$mount('#app')