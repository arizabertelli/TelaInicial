<template>
  <div id="app">
    <h1> Chico Rei </h1>
    <Menu/>
    <router-link to="/home">Home </router-link>|
    <router-link to="/camisas">Camisas </router-link>|
    <router-link to="/capinhas">Capinhas</router-link>
    <router-view></router-view>
  </div>
  
</template>

<script>
 import Menu from './components/Menu.vue'

  export default {
    name: 'App',
    components: {
      Menu
    },
      data(){
      return {
        nome: 'Ariza',
        valor: 0,
        controlador: true
      }
    },
    methods : {
      contador(){
        this.valor++
      },
      ativador(){
        this.controlador = !this.controlador
      }
    }
  }
</script>

<style>
  h1, h3 {
    font-family: calibri;
    text-align : center;  
  }
  .filter {
    margin-right: 18%;
    font-family: calibri
  }
  #app {
    font-family: calibri;
    color: black;
  }
</style>