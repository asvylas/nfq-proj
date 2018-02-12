<template>
  <div>
    <router-link :to="{ path: 'Products' }">
      Products</router-link>
    <router-link :to="{ path: 'Orders' }">
      Orders</router-link> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
