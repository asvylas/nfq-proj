<template>
  <div id="app">
    <header-comp/>
    <router-view/>
    <footer-comp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/global/header'
import FooterComp from '@/components/global/footer'
export default {
  name: 'app',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
