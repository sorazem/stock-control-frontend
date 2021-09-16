<template>
  <section class="pa-4">
    <h2>Saída de Produto</h2>
    <v-form class="mt-8 pa-4" v-model="isValid">
      <v-autocomplete
        v-model="productCode"
        :items="productsCodes"
        label="Código do produto"
        required
        :rules="[v => !!v || 'Escolha o código do produto']"
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
    <v-snackbar v-model="alertError" rounded timeout="5000" top color="red darken-2">
      <div class="d-flex align-center justify-space-between">
        <span>{{alertMessage}}</span>
        <v-icon @click="alertError=false">mdi-close</v-icon>
      </div>
    </v-snackbar>

    <v-snackbar v-model="alertSuccess" rounded timeout="5000" top color="success">
      <div class="d-flex align-center justify-space-between">
        <span>Saída efetuada com sucesso!</span>
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
      alertMessage: '',
      alertError: false,
      alertSuccess: false
    }
  },
  computed:{
    productsCodes(){
      return this.$store.state.products.map( item => item.code )
    },
    products(){
      return this.$store.state.products
    }
  },
  methods:{
    submit(){
      let index = this.products.findIndex(
        item => item.code === this.productCode
      )

      if (this.products[index].quantity === 0){
        this.alertMessage = 'O produto selecionado está esgotado.'
        this.alertError = true
        return
      }

      if (this.products[index].quantity - Number(this.quantity) < 0){
        this.alertMessage = 'Não temos essa quantidade suficiente em estoque. Por favor, escolha novamente.'
        this.alertError = true
        return
      }

      this.$store.commit('exitProduct', {
        productCode: this.productCode,
        type: 'out',
        quantity: Number(this.quantity)
      })

      this.alertSuccess = true
    }
  }
}
</script>

<style scoped>
  .v-application--wrap > .v-snack__content{
    display: flex !important;
    align-items: center !important;
  }
</style>
