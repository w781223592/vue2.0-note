<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      list: ['A','B','C','D']
    }
  },
  mounted() {
    this.list = ['C','A','B','D']
  }
}
</script>

<style>

</style>