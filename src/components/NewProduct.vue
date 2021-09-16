<template>
  <section class="pa-4">
    <h2>Adicionar Novo Produto</h2>
    <v-form class="mt-8 pa-4" v-model="isValid">
      <v-text-field
        v-model="desc"
        label="Nome do produto"
        :rules="[v => !!v || 'Preencha o nome do produto']"
        required
      />

      <v-select
        v-model="type"
        label="Escolha o tipo"
        :items="productTypes"
        required
      />

      <v-text-field
        v-model="price"
        label="Preço unitário de venda"
        type="number"
        :rules="[v => !!v || 'Preencha com o preço unitário de venda']"
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
    <v-snackbar v-model="alertSuccess" rounded timeout="-1" top color="success">
      <div class="d-flex align-center justify-space-between">
        <span>Produto de código {{productCode}} adicionado com sucesso!</span>
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
      desc: '',
      price: undefined,
      type: undefined,
      productCode: '',
      productTypes: ['Eletrônico', 'Eletrodoméstico', 'Móvel'],
      convertProductType: {
        'Eletrônico': 'eletronic',
        'Eletrodoméstico': 'householdAppliance',
        'Móvel': 'furniture'
      },
      alertSuccess: false
    }
  },
  methods:{
    submit(){
      this.productCode = this.getRandomCode()
      this.$store.commit('newProduct', {
        productCode: this.productCode,
        desc: this.desc,
        type: this.convertProductType[this.type],
        price: Number(this.price)
      })

      this.alertSuccess = true
    },

    getRandomCode(){
      let code = ''
      let c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for(let i = 0; i < 6; i++){
        code += c.charAt(Math.floor(Math.random() * c.length))
      }

      return code
    }
  }
}
</script>

<style>

</style>
