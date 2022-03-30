

const isAutenticatedGuard =async (to, from, next) =>{
    //console.log(to, from, next)
    //aqui podrimos acceder a la api pj para cojer los datos de autenticacion etx

    return new Promise(()=>{
        const random = Math.random()*100
        if(random>50){
            console.log(random,' autenticado-isAutenticatedGuard')
            next()
          
        }else{
            console.log(random,'No autenticado-isAutenticatedGuard')
            //en esta parte redirigiriamos a la parte del login pj 
            next('/')
        }
    })
}

export default isAutenticatedGuard