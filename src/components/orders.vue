<template>
  <div id="container" v-if="displayedOrderList !== null">
    <div id="top-toolbar">
      <div id="top-toolbar-title">
        Orders
      </div>
      <div id="button-container">
        <input type="search" placeholder="Search by order nr." id="search-input" @input="filterOrders($event)">
      </div>
    </div>
    <div id="cards-container">
      <div v-for="order in displayedOrderList">
        <div class="order-container">
          <div>
            <div class="card-info">
              Order nr.: {{order.order_number}}
            </div>
          </div>
          <div>
            <ul>
              <li>Created: {{order.createdAt}}</li>
            </ul>
          </div>
          <div>
            <div class="card-info">
              Products:
            </div>
          </div>
          <div class="buying-list" v-for="item in order.product_array">
            <ul>
              <li>Card name: {{item[0].title}}</li>
              <li>Card price: {{item[0].price}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Services from '@/services/Services'
export default {
  name: 'Orders',
  data () {
    return {
      orderList: null,
      displayedOrderList: null
    }
  },
  async beforeMount () {
    const self = this
    let response = await Services.getOrders()
    this.orderList = response.data.orders

    for(let i = 0; i < this.orderList.length; i++){
 
      this.orderList[i].product_array = []
      let cardArrInOrder = this.orderList[i].product_list.split(',')
      let cardList = response.data.cards

      cardArrInOrder.forEach(element => {
        this.orderList[i].product_array.push(cardList.filter(card => (card.id == element)))
      });

      this.orderList[i].createdAt = this.orderList[i].createdAt.slice(0, 10)
      
    }

    this.displayedOrderList = response.data.orders
  },
  methods: {
    filterOrders(e) {
    if(e.target.value == ""){
        this.displayedOrderList = this.orderList
      }else {
        this.displayedOrderList = this.orderList.filter(item => {
          return item.order_number.slice(0, e.target.value.length).toLowerCase() === e.target.value.toLowerCase()
        })
      }
    }
  }
}
</script>

<style scoped>
#container {
  text-align: left;

}
li {
  list-style-type: none;
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
  box-shadow: 0px 0px 4px grey;
}
#top-toolbar-title {
  font-size: 20pt;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 15px; 
}
#cards-container {
	margin: auto;
	margin-top: 2em;

}
.order-container {
  margin: 20px 20px;
  padding: 20px 20px;
  box-shadow: 0px 0px 4px grey;
  font-size: 14px;
}
.card-info{
  font-size: 15px;
  font-weight: bold;
}
#button-container {
  position: block;
  top: 50%;
  float: right;
  margin-right:15px;
  transform: translateY(-50%);
}
#search-input {
  float:right;
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
