<template>
  <div v-if="displayedProductList !== null" id="container">
    <div id="top-toolbar">
      <div id="top-toolbar-title">
        Cards
      </div>
      <div id="button-container">
        <input type="search" placeholder="Search" id="search-input" @input="searchCards($event)">
        <button class="filter-button" @click="sortCards($event)">Monster</button>
        <button class="filter-button" @click="sortCards($event)">Spell</button>
        <button class="filter-button" @click="sortCards($event)">Field</button>
        <button class="filter-button" @click="sortCards($event)">All</button>
      </div>
    </div>
    <div id="cards-container">
      <div v-for="item in displayedProductList">
        <div class="card">
          <img class="card-images" :src="item.image" alt="Card image">
          <div class="card-info">
            <div class="card-info-panel">
              <div>
                Title: {{item.title}}
              </div>
              <div>
                Type: {{item.type}}
              </div>
              <div>
                Price: {{item.price}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Services from '@/services/Services'
export default {
  name: 'Products',
  data () {
    return {
      productList: null,
      displayedProductList: null
    }
  },
  async beforeMount () {
    let response = await Services.getCards()
    this.productList = response.data.card
    this.displayedProductList = response.data.card
  },
  methods: {
    sortCards(e) {
      if(e.target.innerHTML === "All") {
        this.displayedProductList = this.productList
      } else {
        this.displayedProductList = this.productList.filter(item => {
          return item.type === e.target.innerHTML
        })
      }
    },
    searchCards(e) {
      if(e.target.value == ""){
        this.displayedProductList = this.productList
      }else {
        this.displayedProductList = this.productList.filter(item => {
          return item.title.slice(0, e.target.value.length).toLowerCase() === e.target.value.toLowerCase()
        })
      }
    }
  }
}
</script>

<style scoped>
div.card {
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  background: black;
  color:white;
  text-align: left;
  font-size:13px;
}
div.card:hover {
	transform: scale(1.05);
	box-shadow: 0px 0px 8px black;
}
.card-images{
  border: 1px solid black;
  border-radius: 5px;
}
.card-info {
  border-radius: 5px;
  padding: 5px 0;
  background-image: url("http://174.138.9.241:8082/uploads/card-background.png");
}
.card-info-panel{
  margin-left: 5px;
}
#cards-container {
	margin: auto;
	margin-top: 2em;
	display: flex;
	text: warp;
	justify-content: center;
	-webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
#container {
  margin: 60px 200px;
  box-shadow: 0px 0px 8px black;
}
#top-toolbar{
  margin: none;
  text-align: left;
  background: black;
  color: white;
  height: 60px;
  box-shadow: 0px 0px 8px black;
}
#top-toolbar-title {
  font-size: 20pt;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 15px; 
}
#button-container {
  position: block;
  top: 50%;
  float: right;
  margin-right:15px;
  transform: translateY(-50%);
}
button.filter-button{
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
button.filter-button:hover{
  background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color:#e9e9e9;
}
button.filter-button:active{
  position:relative;
	top:1px;
}
#search-button {
  margin-right: 30px;
}
#search-input {
  height: 24px;
  width: 200px;
  border-radius: 3px;
  border: 1px solid transparent;
  border-top: none;
  border-bottom: 1px solid #DDD;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
}
@media(max-width: 1150px){
  #container {
    margin: 60px;
  }
}
@media(max-width: 600px){
  #container {
    margin: 40px;
  }
}
</style>
