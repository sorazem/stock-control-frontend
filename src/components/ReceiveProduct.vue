<template>
  <section class="pa-4">
    <h2>Entrada de Produto</h2>
    <v-form class="mt-8 pa-4" v-model="isValid">
      <v-autocomplete
        v-model="productCode"
        :items="productsCodes"
        label="Código do produto"
        required
        :rules="[v => !!v || 'Escolha o código do produto']"
      />

      <v-text-field
        v-model="price"
        label="Valor unitário do fornecedor"
        type="number"
        :rules="[v => !!v || 'Preencha o valor de venda']"
        required
      />

      <v-text-field
        v-model="quantity"
        label="Quantidade movimentada"
        type="number"
        :rules="[v => !!v || 'Preencha a quantidade movimentada']"
        required
      />

      <v-btn
        class="mt-4 elevation-1 white--text"
        :disabled="!isValid"
        color="#7F6F62"
        @click="submit"
      >
        Enviar
      </v-btn>

    </v-form>
    <v-snackbar v-model="alertSuccess" rounded timeout="5000" top color="success">
      <div class="d-flex align-center justify-space-between">
        <span>Entrada efetuada com sucesso!</span>
        <v-icon @click="alertSuccess=false">mdi-close</v-icon>
      </div>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  name: 'Entrada',
  data(){
    return{
      productCode: '',
      price: undefined,
      quantity: undefined,
      isValid: false,
      alertSuccess: false
    }
  },
  computed:{
    productsCodes(){
      return this.$store.state.products.map( item => item.code )
    }
  },
  methods:{
    submit(){
      this.$store.commit('receiveProduct', {
        productCode: this.productCode,
        type: 'in',
        quantity: Number(this.quantity),
        price: Number(this.price)
      })

      this.alertSuccess = true
    }
  }
}
</script>

<style scoped>

</style>
