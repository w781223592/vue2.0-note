import Vue from 'vue'
// import App from './App'

// new Vue({
//   el: '#app',
//   template: `<div>
//   <template v-if="a">
//     我是
//   </template>
//   <template v-else>
//     我是
//   </template>
// </div>`,
//   data: {
//     a: true
//   }
// })

// genStatic
// new Vue({
//   el: '#app',
//   template: `<div>
//     <p>1</p>
//     <p>2</p>
//   </div>`
// })

// genIf
// new Vue({
//   el: '#app',
//   data: { isShow: true },
//   template: `<div :key="1" a="2" :b="3" ref="d" v-if="isShow">
//     我是1
//   </div>`
// })

// genOnce
// new Vue({
//   el: '#app',
//   template: `<div v-if="true" v-once>
//     我是1
//   </div>`
// })

// genFor
// new Vue({
//   el: '#app',
//   data: {
//     styl: {
//       width: '100px',
//       background: '#000',
//     },
//     b: 'c'
//   },
//   template: `
//   <div class="a" :class="b" style="background: red" :style="styl">
//     <p v-for="item in 4" v-if="true" v-once>1</p>
//   </div>`
// })
// new Vue({
//   el: '#app',
//   template: `
//   <div>
//     <p v-for="item in 4" ref="a">1</p>
//   </div>`
// })

// genComponent
// const child = {
//   name: 'child',
//   template: `<p>child<slot/></p>`
// }
// new Vue({
//   el: '#app',
//   components: { child },
//   template: `
//   <div is="child">1</div>`
// })

// dynamicAttrs
new Vue({
  el: '#app',
  data: {
    a: 't',
    b: 'b',
    c: {
      e: 1,
      f: 2
    }
  },
  template: `
  <div v-bind:[a]="b" v-bind="c">
    a
  </div>`
})
