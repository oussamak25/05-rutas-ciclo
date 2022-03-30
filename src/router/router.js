


/* borramos la difinicion del importe de la pagina aboutPage para importarla de modo perezoso */


import {createRouter, createWebHashHistory} from 'vue-router'
import isAutenticatedGuard from './autorizacion-guard';

const routes = [
    {
      //redirigimos la ruta principal a la ruta de /cliente
      path: '/',
      name : 'home',
      redirect: '/cliente'
      
    },
    {
      path: '/cliente',
      name : 'cliente',
      component: () => import('@/modules/Clientes/layouts/ClienteLayout') ,
      //con la etiqueta children podemos meter rutas dentro de nuesto layourt de esta forma todas las 
      //rutas tendran el mismo estilo y los renderiza dentro del clienteLayout


      children:[
          { 
        
         // como cambio la ruta ya no se podra acceder a la misma ruta con la barra
         // pero  si algun usuario seguia usando es aurl podemos redirigirlo


         //les debemos de quitar la barra a las rutas pq sino serian rutas absolutas

          path: 'home',
          name : 'cliente-home',
          component: () => import('@/modules/Clientes/pages/ListPage') 
        },
        { 
          //de esta forma importamos la pagina de forma perezosa 
          path: 'about',
          name : 'cliente-about',
          component: () => import('@/modules/Clientes/pages/AboutPage') 
        },
        { 
          path: 'clienteID/:id',
          name: 'Cliente-Id', 
          component: () => import('@/modules/Clientes/pages/ClientePage'),
          props:(route)=>{
            
              const id = Number (route.params.id);
              
              // de esta forma se parsea 
              return isNaN (id) ? {id : 1} : {id} 
            
    
          }
        },
        {
          //redirigimos por defecto a la pagina con el nombre cliente-about
          path :'',
          redirect: {name: 'cliente-about'}
        }
      ]
      
    },
/* 
    { 
       path: '/',  
     como cambio la ruta ya no se podra acceder a la misma ruta con la barra
     pero  si algun usuario seguia usando es aurl podemos redirigirlo
      path: '/home',
      name : 'home',
      component: () => import('@/modules/Clientes/pages/ListPage') 
    },
    { 
      de esta forma importamos la pagina de forma perezosa 
      path: '/about',
      name : 'a',
      component: () => import('@/modules/Clientes/pages/AboutPage') 
    },
    { 
      path: '/clienteID/:id',
      name: 'ClienteId', 
      component: () => import('@/modules/Clientes/pages/ClientePage'),
      props:(route)=>{
        
          const id = Number (route.params.id);
         
          // de esta forma se parsea 
          return isNaN (id) ? {id : 1} : {id} 
        

      }
    }, */
    /* el pathMatch es una funcion que ya viene con el vue route 
    esto lo que hace es bucar cualquier url que no haga match con las 
    que tenemos definidas anteriormente
    
    /:pathMatch(.*)*   */
    {
      path : '/productos',
      name : 'productos',
        //guard para una ruta especifica aunque puede ser para una ruta padre y que todas las hijas tengan acceso
        //con esta propiedad podemos poner un listado con todos los guard que queramas y no hay que ponerle parentesis 
      beforeEnter:[
        //con esto lo que conseguimos es que una vez que nos deja acceder a la ruta padre podemos navegar entre las rutas hijas
        //sin problemas y no vuelve a saltar la autenticacion
        //saltara nuevamenten la autenticacion si salgo de la ruta padre que en este caso es producto 
        //y entro a la ruta de clientes e intento volver a productos, en ese momento saltara la autenticacion
        isAutenticatedGuard

        //pero si aplicamos el beforeEnter a cada una de las rutas hijas cada vez que intentemos entrar saltara la autenticacion
      ],

      component: () => import('@/modules/Productos/layouts/ProductosLayout') ,
      children:[
        {
          path: 'characters',
          name : 'producto-characters',
          component: () => import('@/modules/Productos/pages/Characters') ,
          beforeEnter:[
            isAutenticatedGuard
    
          ],
        },
        {
          path: 'About',
          name : 'producto-about',
          component: () => import('@/modules/Productos/pages/About') 
        },
        {
          //redirigimos por defecto a la pagina con el nombre cliente-about
          path :'',
          redirect: {name: 'producto-about'}
        }

      ]
    


    },
      
    
    
    { 
      path: '/:pathMatch(.*)*',
       component: () => import(/* webpackChunkName: "NotFoound"*/'@/modules/shared/pages/NoPageFound')  
      //redirigimos al home
      /* redirect: '/home' */
    }

  ]


  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  // //guard global sicnrono nos dejara acceder o no a una pagina de forma aleatoria
  // //despues lo haremos con un guard sincorno
  // router.beforeEach((to , from, next) =>{
  //   /* console.log({to, from, next}) */
  //   const random = Math.random()*100
  //   if(random>50){
  //     console.log(random,' autenticado')
  //     //con el next mostramos o no la pagina deseada en este caso usamos una condicion
  //     //para ver si accedemos o en caso contrario redirigimos a cliente-home y le 
  //     //hacemos referencia por nombre no por ruta pq puede ser muy volatil
  //     next()
  //   }else{
  //     console.log(random,'No autenticado')
  //    next({name: 'cliente-home'})
  //   }

      
  // })


  //guard asincrono  pero global 

//   const canAccess = () =>{
//     esta funcion de flecha devuelve una promesa que en su interior tiene la misma condicio
//     que antes si puede entrar la promesa devuelve true
//     en caso contrario devuelve false
//     return new Promise (resolve =>{
//       const random = Math.random()*100
//         if(random>50){
//           console.log(random,' autenticado-canAccess')
//           con el next mostramos o no la pagina deseada en este caso usamos una condicion
//           para ver si accedemos o en caso contrario redirigimos a cliente-home y le 
//           hacemos referencia por nombre no por ruta pq puede ser muy volatil
          
//           resolve(true)
//         }else{
//           console.log(random,'No autenticado-canAccess')
//           resolve(false)
//         }
//     })

//   }

// debe ser asyncrona para poder llamar al canAccess ya que devuelve un resultado de una promesa
// para poder usar el await
// de esta forma lo hacemos asincrono
// pero estos siguen siendo globales y falta ver los individuales
//    router.beforeEach(async(to , from, next) =>{

//       const autorizado = await canAccess()
//       if(autorizado){
//         next()
//       }else{
//         next({name: 'cliente-home'})      }
//   })







  //guard para una ruta especifica aunque puede ser para una ruta padre y que todas las hijas tengan acceso


  export default router