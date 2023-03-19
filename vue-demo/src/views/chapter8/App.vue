<template>
  <!-- <keep-alive> -->
    <router-view></router-view>
  <!-- </keep-alive> -->
</template>

<script>
export default {
  name: 'APP',
  created() {
    // console.log(this.$router)
    // console.log(this, this.$route)
  }
}
</script>
