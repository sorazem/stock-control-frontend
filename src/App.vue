<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  name: 'App',
  components: { Navbar }
};
</script>

<style>
  * {
    font-family: 'Urbanist';
    padding: 0;
    margin: 0;
  }

  h2{
    color: #7F6F62;
  }
</style>
