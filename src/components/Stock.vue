<template>
  <section class="pa-4">
    <h2>Estoque</h2>
    <v-tabs v-model="tab" color="#29738F" class="mt-4">
      <v-tab v-for="filter in filters" :key="filter">
        {{filter}}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="filter in filters" :key="filter">
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
          <v-row id="item" v-for="item in getFilteredItems(tab)" :key="item.code" class="ma-4 mt-0">
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
              <p>{{ item.quantity }}</p>
            </v-col>
          </v-row>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
  </section>
</template>

<script>

export default {
  name: 'Stock',
  data(){
    return{
      tab: null,
      filters: ['Tudo', 'Eletrônicos', 'Eletrodomésticos', 'Móveis']
    }
  },
  computed:{
    products(){
      return this.$store.state.products
    },
    stockTransactions(){
      return this.$store.state.stockTransactions
    },
    filteredItems(){
      return [
        this.products,
        this.products.filter( p => p.type === 'eletronic'), this.products.filter( p => p.type === 'householdAppliance'),
        this.products.filter( p => p.type === 'furniture')
      ]
    }
  },
  methods:{
    getQuantityOfItemsSold(itemCode){
      let sumOfItemsSold = this.stockTransactions.reduce( (sum, item) => {
        if(item.product == itemCode && item.type == 'out') return sum += item.quantity

        return sum
      }, 0)

      return sumOfItemsSold? sumOfItemsSold : 0
    },

    getFilteredItems(index){
      return this.filteredItems[index]
    }
  }
}
</script>

<style scoped>
  #item{
    background-color: #CEC2B8;
    border-radius: 20px;
  }

  .v-select{
    width: 200px;
  }
</style>
