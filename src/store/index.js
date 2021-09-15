import Vue from 'vue'
import Vuex from 'vuex'
import products from "@/assets/products"
import stockTransactions from "@/assets/stockTransactions"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: products,
    stockTransactions: stockTransactions
  }
})

export default store
