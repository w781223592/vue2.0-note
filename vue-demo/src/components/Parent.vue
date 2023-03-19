<template>
  <div>
    <div style="height: 30vh" @click="lookHome">I am parent</div>
    <div @click="lookChild">look my child</div>
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import Children from './Children.vue'
export default {
  name: 'parent',
  components: { Children },
  methods: {
    lookChild() {
      this.$router.push('child')
    },
    lookHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style>

</style>