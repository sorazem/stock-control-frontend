<template>
  <section class="pa-4">
      <v-list>
        <v-row class="ma-4 mb-0">
          <v-col cols="6">
            <h4>Produto</h4>
          </v-col>
          <v-col>
            <h4>Quantidade de saída</h4>
          </v-col>
          <v-col>
            <h4>Unidades disponíveis</h4>
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
            <p>{{ getItemOutQuantity(item.code) }}</p>
          </v-col>
          <v-col>
            <p>{{ item.quantity }}</p>
          </v-col>
        </v-row>
      </v-list>
  </section>
</template>

<script>

export default {
  name: 'Stock',
  computed:{
    products(){
      return this.$store.state.products
    },
    stockTransactions(){
      return this.$store.state.stockTransactions
    }
  },
  methods:{
    getItemOutQuantity(itemCode){
      let quantities = this.stockTransactions.reduce( (sum, item) => {
        if(item.product == itemCode) return sum += item.quantity
      }, 0)
      console.log(quantities)
      return quantities? quantities : 0
    }
  }
}
</script>

<style scoped>
  .v-list{
    /* border: 1px solid rgba(0, 0, 0, 0.7); */
    width: 80%;
  }

  #item{
    background-color: #CEC2B8;
    border-radius: 20px;
  }
</style>
