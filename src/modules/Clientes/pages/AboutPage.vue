<template>
  <h1>About page</h1>
  <hr>

  <!-- algunos metodos de l ciclo de vida soolo saltan cuando tenemos un elemento reactivo
  en el html como es en este caso el name si quitamos el name y actualizamos no vamos a encontrar 
  ningun consol log del ciclo de vid -->
  <h2>{{name}}</h2>
  <button @click="cambiarNombre">Cambiar Nombre</button>
</template>

<script>
export default {
  data(){
    return{
      name:'Oussama'
    }
  },
  methods:{
    cambiarNombre(){
      //recordar que el ciclo de vida no es para ver cuando cambia un dato 
      //sino para ver cuando cambia el componente para ver el cambio de un dato 
      //podemos verlo con el watch
      this.name='Melisa'

    }
  },
  //antes de crear la data antes de crear nada
  beforeCreate(){
    console.log('beforeCreate')
  },
  //una vez creado
  created(){
    console.log('created')
    //este es un punto ideal para hacer las peticiones http pq ya tendriamos todo creado
    this.name='Juan carlos'
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  /* antes de actualizar  */
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  activated(){
    console.log('activated')
  },
  deactivated(){
    console.log('deactivated')
  },
  beforeUnmount(){
    console.log('beforeUnmount')
  },
  unmounted(){
    console.log('unmounted')
  },
  errorCaptured(){
    console.log('errorCaptured')
  },
  renderTracked(){
    console.log('renderTracked')
  },
  /* cuando se detecta un cambio se dispara esto primero */
  renderTriggered(){
    console.log('renderTriggered')
  }


}
</script>

<style>

</style>