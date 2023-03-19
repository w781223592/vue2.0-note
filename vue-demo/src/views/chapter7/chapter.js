import Vue from 'vue'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import './transition.css'

// keep-alive
// new Vue({
//   el: '#app',
//   data: {
//     show: true
//   },
//   components: { ComponentA, ComponentB },
//   methods: {
//     change() {
//       this.show = !this.show
//     }
//   },
//   template: `<div>
//     <keep-alive>
//       <ComponentA v-if="show"/>
//       <ComponentB v-else/>
//     </keep-alive>
//     <button @click="change">点击</button>
//   </div>`
// })

// transition
// new Vue({
//   el: '#app',
//   data: {
//     show: true
//   },
//   methods: {
//     change() {
//       this.show = !this.show
//     },
//     enter() {}
//   },
//   template: `<div>
//     <button @click="change">点击</button>
//     <transition appear name="fade" @before-enter="enter">
//       <p v-if="show">我是p</p>
    
//     </transition>
//   </div>`
// })

// transition-group

new Vue({
  el: '#app',
  data: {
    list: [1,2,3,4,5,6,7,8,9],
    nextNum: 10
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.list.length)
    },
    add: function () {
      this.list.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.list.splice(this.randomIndex(), 1)
    }
  },   
  template: `<div>
    <button @click="add">添加</button>
    <button @click="remove">移除</button>
    <transition-group name="list-complete" tag="p"> 
      <span v-for="item in list" :key="item" class="list-complete-item">{{ item }}</span>
    </transition-group>
  </div>`
})