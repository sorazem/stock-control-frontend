<template>
  <section class="pa-4">
    <h2>Editar Produto</h2>
    <v-form class="mt-8 pa-4" v-model="isValid">
      <v-autocomplete
        v-model="productCode"
        :items="productsCodes"
        label="Código do produto"
        required
        :rules="[v => !!v || 'Escolha o código do produto']"
      />

      <v-text-field
        v-model="desc"
        label="Nome do produto"
        :rules="[v => !!v || 'Preencha o nome do produto']"
        required
      />

      <v-text-field
        v-model="price"
        label="Valor unitário do produto"
        type="number"
        :rules="[v => !!v || 'Preencha o valor de venda']"
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
        <span>Produto editado com sucesso!</span>
        <v-icon @click="alertSuccess=false">mdi-close</v-icon>
      </div>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  data(){
    return{
      isValid: false,
      productCode: undefined,
      desc: '',
      price: undefined,
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
  watch:{
    productCode: function (val) {
      let index = this.products.findIndex( p => p.code === val)
      this.desc = this.products[index].desc
      this.price = this.products[index].price
    }
  },
  methods:{
    submit(){
      this.$store.commit('editProduct', {
        productCode: this.productCode,
        desc: this.desc,
        price: this.price
      })
      this.alertSuccess = true
    }
  }
}
</script>
