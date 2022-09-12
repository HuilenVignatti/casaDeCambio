

// constructor para generar los objetos
class Moneda {
    constructor (id, nombre, precioVenta, precioCompra, url, paginaReferencia ) {
    this.id = id;
    this.nombre = nombre;
    this.precioVenta = precioVenta;
    this.precioCompra = precioCompra;
    this.url = url;
    this.paginaReferencia = paginaReferencia;
    }
}


const lista = document.getElementById("lista")


//fetch con la funcion para consumir datos de mis productos desde JSON y generar las cards con forEach
fetch(`./js/prod.json`)
.then(response => response.json())
.then(res=> {
   res.forEach(post => {   
     const div = document.createElement("div");
     div.className = "card col-8 col-md-6 col-lg-3"
     div.innerHTML = `
     <div class="cards-container">
     <img src="${post.url}" class="card-img-top" alt="Moneda Extranjera">
       <div class="card-body">
       <h5 class="card-title">${post.nombre}</h5>
       <p class="card-text">Compra o Vende con la mejor cotización</p>
       <p>Venta $${post.precioVenta} - Compra $${post.precioCompra}</p>
 
     </div>`;

                 lista.append(div);

            })     
})

// push de mis objetos al array monedas
const monedas = []
monedas.push (new Moneda (1, "Real", 35, 40, url="img/reales-brasil.jpg",href="real.html"));
monedas.push (new Moneda (2, "Dolar", 280, 290, url = "img/dolarbillete.png",href="dolar.html"));
monedas.push (new Moneda (3, "Euro", 295, 305, url="img/eurobillete.webp",href="euro.html"));

let cardMoneda = document.getElementById ("cardMoneda");

localStorage.setItem("array de monedas", monedas)


// funciones para convertir con condicionales segun la opcion que elija el cliente
function convertir (){

  
  let monto = parseInt( document.getElementById("monto").value);


    let resultado = 0;
    
    // metodo con find para obtener el valor del objeto
    const valorDolar = monedas.find ((el) =>  el.nombre =="Dolar" )
   
   let dolarCompra = valorDolar.precioCompra

   const valorReal = monedas.find((el) => el.nombre == "Real")

   let realCompra = valorReal.precioCompra

   const valorEuro = monedas.find ((el) => el.nombre =="Euro")
    let euroCompra= valorEuro.precioCompra


  if(document.getElementById("unoCompra").checked){
    resultado = monto * dolarCompra
    function mostrarResultadoCompra(){
      

      let div = document.createElement("div")
      div.innerHTML=`<h2> su total es $ ${resultado}`
     
      mostrarTotalCompra.append(div);
    
      Swal.fire(`El total es de $ ${resultado}`)
    }
      mostrarResultadoCompra();
    

  }else if(document.getElementById("dosCompra").checked){
      resultado = monto * euroCompra
   
      function mostrarResultadoCompra(){
        let div = document.createElement("div")
        div.innerHTML=`<h2> su total es $ ${resultado}`
      
        mostrarTotalCompra.append(div);
        Swal.fire(`El total es de $ ${resultado}`)
      }
        mostrarResultadoCompra();

  } else if (document.getElementById("tresCompra").checked){

    resultado = monto* realCompra

    function mostrarResultadoCompra(){
      let div = document.createElement("div")
      div.innerHTML=`<h2> su total es $ ${resultado}`
    
      mostrarTotalCompra.append(div);
      Swal.fire(`El total es de $ ${resultado}`)
    }
      mostrarResultadoCompra();
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No ingresaste una opcion valida!',
      
    })
  }
  
}


function convertirVenta(){
  let montoVenta = parseInt(document.getElementById("montoVenta").value);
  let resultadoVenta= 0;
 
const valorVentaDolar = monedas.find ((el) => el.nombre =="Dolar")

 let dolarVenta = valorVentaDolar.precioVenta

const valorVentaEuro = monedas.find ((el) => el.nombre =="Euro")

  let euroVenta = valorVentaEuro.precioVenta


const valorVentaReal = monedas.find ((el) => el.nombre == "Real")

  let realVenta = valorVentaReal.precioVenta

  console.log(montoVenta)
  if(document.getElementById("unoVenta").checked){

    resultadoVenta = montoVenta * dolarVenta
    
    function mostrarResultadoVenta(){

      let div = document.createElement("div")
      div.innerHTML=`<h2> su total es $ ${resultadoVenta} `
      
    
      mostrarTotal.append(div);
      Swal.fire(`El total es de $ ${resultadoVenta}`)
    }
    mostrarResultadoVenta()

  } else if (document.getElementById("dosVenta").checked){

    resultadoVenta = montoVenta * euroVenta
    
    function mostrarResultadoVenta(){

      let div = document.createElement("div")
      div.innerHTML=`<h2> su total es $ ${resultadoVenta} `
      
    
      mostrarTotal.append(div);
      Swal.fire(`El total es de ${resultadoVenta}`)
    }
    mostrarResultadoVenta()

  }else if (document.getElementById("tresVenta").checked){
    resultadoVenta = montoVenta * realVenta
    
    function mostrarResultadoVenta(){

      let div = document.createElement("div")
      div.innerHTML=`<h2> su total es $ ${resultadoVenta} `
      
    
      mostrarTotal.append(div);
      Swal.fire(`El total es de $ ${resultadoVenta}`)
    }
    mostrarResultadoVenta()
  }else{

    // alert de libreria
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No ingresaste una opcion valida!',
      
    })
  }
  
}


const mostrarTotal = document.getElementById("mensajeVenta");



const mostrarTotalCompra = document.getElementById("mensajeCompra");

