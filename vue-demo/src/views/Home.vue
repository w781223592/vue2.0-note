<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <router-link to="/">home{{num}}</router-link>&nbsp; -->
    <router-link to="/about">about</router-link>
    <div @click="nav">about</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <template v-if="a">
        我是
      </template>
      <template v-else>
        我是
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      num: 1
    }
  },
  computed: {
    search: {
      get() {
        return this.$store.state.xxx
      },
      set(val) {
        this.$store.commit('xxx', val)
      }
    }
  },
  beforeCreate () {
    
  },
  activated() {
    this.num ++
  },
  methods: {
    nav() {
      this.$router.push('/about?id=1')
    }
  }
}
</script>
