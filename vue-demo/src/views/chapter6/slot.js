import Vue from 'vue'

// slot
// const child = {
//   template: `<div>
//     我是<slot slot="hs">1</slot>
//   </div>`
// }

// new Vue({
//   el: '#app',
//   components: { child },
//   template: `<child>子</child>`
// })

// name slot
// const child = {
//   template: `<div>
//     我是<slot name="name">1</slot>
//   </div>`
// }

// new Vue({
//   el: '#app',
//   components: { child },
//   template: `<child>
//     <div slot="name">子</div>
//   </child>`
// })

// scope-slot
const child = {
  template: `<div>
    我是<slot data="子" name="one">1</slot>
  </div>`
}

new Vue({
  el: '#app',
  components: { child },
  template: `<child>
    <template v-slot:one="scope">{{ scope.data }}</template>
  </child>`
})