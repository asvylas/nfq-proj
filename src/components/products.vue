<template>
  <div v-if="productList !== null" id="container">
    <div id="top-toolbar">
      <div id="top-toolbar-title">
        Product list
      </div>
    </div>
    <div id="cards-container">
      <div v-for="item in productList">

        <div class="card">
          <img class="card-images" :src="item.image" alt="Card image">
          <div class="card-info">
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
</template>

<script>
import CardServices from '@/services/CardServices'
export default {
  name: 'Products',
  data () {
    return {
      productList: null
    }
  },
  async beforeMount () {
    let response = await CardServices.getCards()
    this.productList = response.data.card
    console.log(response.data.card)
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
  background-image: url("http://174.138.9.241:8082/uploads/card-background.png");

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
@media(max-width: 768px){
  #container {
    margin: 40px;
  }
}
</style>
