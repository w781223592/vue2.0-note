<template>
  <div style="height: 120vh">I am child</div>
</template>

<script>
export default {
  name: 'child',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log(vm)
    })
  },
}
</script>

<style>

</style>