<template>
  <div>
    <v-app-bar app class="elevation-2 hidden-lg-and-up" color="#70A1B3">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title id="title" lang="en">Snorlax Stock Control</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="pa-4 elevation-2" color="#70A1B3">
      <p id="title" lang="en">Snorlax Stock Control</p>
      <v-list>
        <router-link :to="'/'">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-archive</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Estoque</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link :to="'/lucro'">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-trending-up</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Lucro</v-list-item-title>
          </v-list-item>
        </router-link>
        <p class="ma-0 mt-8" style="font-size: 14px">AÇÕES</p>
        <router-link :to="'/entrada'">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-archive-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Efetuar entrada</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link :to="'/saida'">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-archive-minus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Efetuar saída</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link :to="'/adicionar-produto'">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Adicionar produto</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return{
      drawer: true
    }
  },
  created(){
    let innerWidth = window.innerWidth;
    if(innerWidth < 1264){
      this.drawer = false
    }
  }
}
</script>

<style scoped>
  .v-list-item{
    color: inherit !important;
    background-color: inherit !important;
    border-radius: 20px;
    margin-bottom: 4px;
  }

 .v-application a{
   text-decoration: none;
   color: black;
 }

 .v-application a:hover, .v-application .router-link-exact-active{
   background-color: #F1E5D8;
   border-radius: 10px;
 }

 #title{
   font-weight: bold;
   font-size: 18px
 }
</style>
