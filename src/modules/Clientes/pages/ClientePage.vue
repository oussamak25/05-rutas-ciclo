<template>
  <h1>Cliente: <span>#{{id}}</span></h1>
  <div v-if="pokemon">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
export default {
  props:{
    id:{
      type: Number,
      required: true
    }

  },
  data(){
    return{
      pokemon: null
    }
  },
  created(){
    //para obtener la ruta
    //esto detecta nuesto id
   /*  const {id} = this.$route.params
    console.log(id)
    this.id=id
 */
  this.getCliente()
  },
  /* controlando los cambios del id para poder relizar la peticion cuando se le da al enter */
  watch:{
    id(){
      this.getCliente()
    }
  },
  methods:{
    async getCliente(){
      try{
          /* tener cuidado con los espacios entre el simbolo del dolar y la barra  */
          const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then(r=> r.json());
          console.log(pokemon) 
          this.pokemon=pokemon
      }catch(error){
         this.$router.push('/')
      }
    }
  }
}
</script>

<style>

</style>