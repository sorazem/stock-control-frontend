<template>
  <v-navigation-drawer app class="pa-4" color="#F1D5AF">
    <p style="font-weight: bold">Arcanine Stock Control</p>
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-archive</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Estoque</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-trending-up</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Lucro</v-list-item-title>
      </v-list-item>
      <p class="ma-0 mt-8" style="font-size: 14px">AÇÕES</p>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-archive-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Efetuar entrada</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-archive-minus</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Efetuar saída</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
