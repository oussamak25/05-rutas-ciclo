<template>
  <div>
      <!-- cuando queramos navegar internamente usando el archivo router debemos usar un componenete distinto de 
      a debemos usar el router-link  que ya podemos usar ya que en el main al principio 
      indicamos que podiamos usar el router   -->

      <!-- el elemento router-link usa el atributo to para poder redirigirnos a otra pagina y asi podemos
      navegar ente las paginas sin refrescar la pagina ya que solo carga la pagina necesaria
       y la guarda en cache, gracias al uso de lazy laot   -->

       <!-- esto de los router link se acaba traduciendo a a una vez se pone en ejecucion la aplicacion -->
       <!-- pero el estilo sigue aplicandose correctamente aunque sean traducidos 
       y agamos refencia a loa </a> --> 
     

     <!-- usar los nombres para las referencias -->
      <!-- CON ESTA FORMA DEL TO TRABAJAMOS CON NOMBRE  -->
     <!--  <router-link :to="{ name: 'home'}">Cliente List</router-link>
     
      <router-link :to="{ name: 'ClienteId', params: { id: '123' }}">Cliente por id</router-link>
      <router-link :to="{ name: 'about'}">About</router-link> -->

<!-- comento las lineas anteriores para poderc rear los enlaces de forma mas 
clara -->

    <custom-link v-for="link in links" :key="link.to" :link="link"/>
   

  </div>
</template>
 
<script>

import { defineAsyncComponent } from 'vue';

export default {
  components: { 
      CustomLink: defineAsyncComponent(()=> import('./CustomLink.vue') )
   },
   data(){
       return{
           links:[
               {to: 'cliente-home', name:'Pokemons'},
               {to: 'Cliente-Id', name:'Por Id', id : 151},
               {to: 'cliente-about', name:'About'},
               {to: 'https://www.google.es/', name:'Google'},
               {to: 'producto-characters', name:'Characters'},
               {to: 'producto-about', name:'Producto-About'},


           ]
       }
   }
 
}
</script>

<style scoped>
    div{
        padding: 0 30px;
    }
    div a {
        font-weight: bold;
        color: blue;
        margin:0 10px ;

    }

/* este es un atributo que tiene el enlace que se pulsa */
 /*    a.router-link-exact-active{
        color: black;
    } */
</style>