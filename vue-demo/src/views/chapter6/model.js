import Vue from 'vue'

// v-model
// new Vue({
//   el: '#app',
//   data: {
//     value: ''
//   },
//   template: `
//   <input type="text" v-model.trim="value">
//   `,
//   // 等价于
//   // template: `
//   //   <input type="text" :value="value" 
//   //   @input="value=$event.target.value.trim()">
//   // `,
// })



// 组件v-model
// const child = {
//   template: `<div><input :value="value" @input="input"></div>`,
//   props: ['value'],
//   methods: {
//     input(e) {
//       this.$emit('input', e.target.value)
//     }
//   }
// }

// new Vue({
//   el: '#app',
//   data: {
//     modelValue: ''
//   },
//   components: { child },
//   template: `<child v-model="modelValue"></child>
//   `
// })

// checkbox
// new Vue({
//   el: '#app',
//   data: {
//     modelValue: '0'
//   },
//   template: `<input id="aa" type="checkbox" v-model="modelValue" true-value="1">
//   `
// })

// Array.isArray(this.modelValue) 
//   ? _i(this.modelValue, null) > -1 
//   : trueValueBinding === 'true' 
//     ? this.modelValue
//     : _q(this.modelValue, '1')

// var $$a = modelValue, 
//   $$el = $event.target,
//   $$c = $$el.checked ? ("1") : (false);
// if(Array.isArray($$a)) {
//   var $$v = null, $$i = _i($$a, $$v);
//   if($$el.checked) {
//     $$i < 0 && (modelValue = $$a.concat([$$v]))
//   } else {
//     $$i > -1 && (modelValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
//   }
// } else { 
//   modelValue = $$c
// }

// select
// new Vue({
//   el: '#app',
//   data: {
//     modelValue: ['cat', 'parrot'],
//     show: true
//   },
//   methods: {
//     change: function(e) {},
//     tiggerShow() {
//       this.show = !this.show
//     }
//   },
//   template: `<div>
//     <select name="pets" id="select" v-if="show">
//       <option value="">--Please choose an option--</option>
//       <option value="pig">猪</option>
//     </select>
//     <select name="pets" id="select" multiple v-model="modelValue" v-else>
//       <option value="">--Please choose an option--</option>
//       <option value="dog">Dog</option>
//     </select>
//     <button @click="tiggerShow">切换</button>
//   </div>
//   `
// })