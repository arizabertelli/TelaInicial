<template>
    <div class = "Menu">
        <ui>
            <button @click="buttonMenu()" class = "buttomMenu"><img class = "imgMenu" src = "https://image.flaticon.com/icons/png/512/56/56763.png"></button>
        </ui>
        <div v-if="controler" style="width: 22%;
        margin: 0% 0% 0% 78%;
        height: 80%;
        top: 12%;
        left: 0px;
        background-color: gainsboro;
        position: absolute;
        z-index: 2;">
        <h1 class = "textMenu" >Menu</h1>
        <a href="http://192.168.2.118:8081/" class = "buttonEnd"><button class = "buttonOrder">Finalizar pedido</button></a>
        </div>
        <div v-else></div>
    </div> 
</template>

<script>
export default {
  data(){
    return {
      controler: false
    }
  },
  methods : {
    buttonMenu(){
      this.controler = !this.controler;
    }
  }
}
</script>

<style>
    h1, h3 {
        font-family: calibri;
        text-align : center;
    }
    .imgMenu {
    display: block;
    margin-left: 1px;
    margin-right: 1px;
    width: 30px;
  }
  .Menu {
    margin-right: 1300px;
  }
  .textMenu {
    margin: 0% 0% 0% 5%;
    font-family: Calibri;
    font-size: 20px;
  }
  .order {
    background: white;
    margin: 5% 5% 5% 5%;
    position: absolute;
    z-index: 2;
  }
  .teste {
    background: violet;
  }
  .buttonEnd {
    background: black;
  }
  .buttonOrder {
    margin-top: 155%;
    width: 100%;
    padding: 5%;
    background: gray;
    font-size: 100%;
    font-family: Calibri;
  }
</style>
