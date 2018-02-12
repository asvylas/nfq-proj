<template>
  <div id="tool-bar">
  <div class="container">
    <router-link :to="{ path: 'products' }">
    Products</router-link><i class="material-icons">face</i>
    <router-link :to="{ path: 'orders' }">
    Orders<i class="material-icons">face</i></router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#tool-bar {
  height: 60px;
  width: 100%;
  background-color: black;
  box-shadow: 1px 1px 1px grey;
	text-align:center;
	border: 25px 10px solid black;
  color: white;
	box-shadow: 0px 0px 8px black;
}
</style>