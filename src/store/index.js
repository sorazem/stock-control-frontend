import Vue from 'vue'
import Vuex from 'vuex'
import products from "@/assets/products"
import stockTransactions from "@/assets/stockTransactions"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: products,
    stockTransactions: stockTransactions
  },

  mutations: {
    receiveProduct(state, payload){
      state.stockTransactions.push({
        product: payload.productCode,
        type: payload.type,
        price: payload.price,
        quantity: payload.quantity
      })

      let index = state.products.findIndex(
        item => item.code === payload.productCode
      )

      state.products[index].quantity += payload.quantity
    },

    exitProduct(state, payload){
      let index = state.products.findIndex(
        item => item.code === payload.productCode
      )

      state.products[index].quantity -= payload.quantity

      state.stockTransactions.push({
        product: payload.productCode,
        type: payload.type,
        price: state.products[index].price,
        quantity: payload.quantity
      })
    },

    newProduct(state, payload){
      state.products.push({
        code: payload.productCode,
        desc: payload.desc,
        type: payload.type,
        price: payload.price,
        quantity: 0
      })
    }
  }
})

export default store
