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
::-webkit-scrollbar { 
    display: none; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button:focus {
  outline:0 !important;
}
input:focus {
  outline:0 !important;
}
a, u {
  text-decoration: none !important;
  box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	background-color:#f9f9f9;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-size:13px;
	font-weight:bold;
	padding:5px 12px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
}
a:hover, u:hover {
  background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color:#e9e9e9;
}
</style>
