<template>
  <section class="pa-4">
    <h2>Lucro</h2>
    <v-list>
      <v-row class="ma-4 mb-0">
        <v-col cols="6">
          <h4>Produto</h4>
        </v-col>
        <v-col>
          <h4>Quantidade de saída</h4>
        </v-col>
        <v-col>
          <h4>Lucro</h4>
        </v-col>
      </v-row>
      <v-row id="item" v-for="item in products" :key="item.code" class="ma-4 mt-0">
        <v-col cols="6">
          <v-list-item-title>
            {{ item.desc }}
            <v-list-item-subtitle class="mt-1">
              Código: {{ item.code }}
            </v-list-item-subtitle>
          </v-list-item-title>
        </v-col>
        <v-col>
          <p>{{ getQuantityOfItemsSold(item.code) }}</p>
        </v-col>
        <v-col>
          <p>{{ getProfit(item.code) }}</p>
        </v-col>
      </v-row>
    </v-list>
  </section>
</template>

<script>
export default {
  name: 'Profit',
  computed:{
    products(){
      return this.$store.state.products
    },
    stockTransactions(){
      return this.$store.state.stockTransactions
    }
  },
  methods:{
    getQuantityOfItemsSold(itemCode){
      let sumOfItemsSold = this.stockTransactions.reduce( (sum, item) => {
        if(item.product === itemCode && item.type === 'out') return sum += item.quantity

        return sum
      }, 0)
      return sumOfItemsSold? sumOfItemsSold : 0
    },

    getProfit(itemCode){
      let sumPriceProductBought = this.stockTransactions.reduce( (sum, item) => {
        if(item.product === itemCode && item.type === 'in') return sum += (item.price * item.quantity)

        return sum
      }, 0)

      let sumPriceProductSold = this.stockTransactions.reduce( (sum, item) => {
        if(item.product === itemCode && item.type === 'out') return sum += (item.price * item.quantity)

        return sum
      }, 0)

      if(!sumPriceProductSold) sumPriceProductSold = 0
      if(!sumPriceProductBought) sumPriceProductBought = 0

      return sumPriceProductSold - sumPriceProductBought
    }
  }
}
</script>

<style scoped>
  #item{
    background-color: #CEC2B8;
    border-radius: 20px;
  }
</style>
