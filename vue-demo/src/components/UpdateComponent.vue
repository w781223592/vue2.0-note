<template>
  <div v-if="content === 'I am content' || true">
    <HelloWorld></HelloWorld>
    {{ content }}
  </div>
  <!-- <p class="a" v-else>
    {{ content }}
    <HelloWorld></HelloWorld>
  </p> -->
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { HelloWorld },
  data() {
    return {
      content: 'I am content'
    }
  },
  mounted() {
    debugger
    this.content = 'I am updated'
  },
  methods: {
    update() {
      console.log('update')
    }
  }
}
</script>

<style scoped></style>
