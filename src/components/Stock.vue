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
            <p>{{ item.quantity }}</p>
          </v-col>
          <v-col>
            <p>{{ item.quantity }}</p>
          </v-col>
        </v-row>
      </v-list>
  </section>
</template>

<script>
import products from "@/assets/products"

export default {
  name: 'Stock',
  computed:{
    products(){
      return products;
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
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }
</style>
