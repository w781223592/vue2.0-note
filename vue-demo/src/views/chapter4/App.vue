<template>
  <!-- <div>
    hello world{{ b }}
    {{ isB ? b : c.d }}
    {{ msg }}
  </div> -->
  <Button @click="handleClick">{{ isB ? 'b' : 'a' }}</Button>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  data() {
    return {
      isB: true,
      b: '我是app',
      c: {
        d: '我也是app'
      },
      msg: '监听我吧，孙子'
    }
  },
  components: { Button },
  watch: {
    msg() {
      if (!this.count) this.count = 0
      this.count++
      if (this.count < 102) this.msg = '我让你死循环！孙子' + Math.random()
    }
  },
  mounted() {
    this.msg = '表演个死循环'
  },
  methods: {
    handleClick() {
      this.isB = false
    }
  }
}

const callbacks = []
let pending = false

function nextTick(cb, ctx) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {}
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    timerFunc()
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise((resolve) => {
      _resolve = resolve
    })
  }
}

// function flushCallbacks() {
//   pending = false
//   const copies = callbacks.slice(0)
//   callbacks.length = 0

//   for (let i = 0; i < copies.length; i++) {
//     copies[i]()
//   }

// }

function flushCallbacks() {
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]()
  }
  pending = false
  callbacks.length = 0
}

let counter = 1
const observer = new MutationObserver(flushCallbacks)
const textNode = document.createTextNode(counter)
observer.observe(textNode, {
  characterData: true
})
const timerFunc = () => {
  counter = (counter + 1) % 2
  textNode.data = counter
}

// nextTick(() => {
//   console.log(1)
//   const p = Promise.resolve()
//   p.then(() => {
//     console.log(2)
//   })
//   nextTick(() => {
//     console.log(3)
//   })
// })
// const p = Promise.resolve()
// p.then(() => {
//   console.log(4)
// })
// nextTick(() => {
//   console.log(5)
// })
// nextTick().then(() => {
//   console.log(6)
// })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
