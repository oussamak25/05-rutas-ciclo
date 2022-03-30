<template>
    <div class="cliente-layout">
        <h1>Pokemon layout</h1>
        <!-- A LOS LAYOUTS LOS HACE ESPECIAL ESTE ROUTER VIEW 
        el Cliente layout puede tener rutas hijas y esas rutas se renderizan dentro del router view 
        asi que el h1 de arriba solo va a existir en todas las rutas que tenga algo que ver con cliente
        layout   -->
        <router-view></router-view>

    </div>
</template>



<style scoped>
.cliente-layout{
    background-color:red ;
}
</style>