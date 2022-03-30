<template>
  <NavBar/>
  <img alt="Vue logo" src="./assets/logo.png">
 <!-- Instalar dependencias de router4 npm install vue-router@4 -->
 
  <!-- con el router-view hacemos referencia a las rutas que queremos visualizar 
  de este modo podemos visualizar las paginas que necesitemos y tengamos definicas en el archivo router -->
  <router-view/>

  
</template>



<script>

import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    /* Esto asi solo no funciona porque no se puede cargar como en el router en la parte interna de vue hay que definirlo
    como un defineasyncComponent  */
     NavBar:  defineAsyncComponent ( () => import('@/modules/shared/components/NavBar.vue') )

   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
