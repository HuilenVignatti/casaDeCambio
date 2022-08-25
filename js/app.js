
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


const monedas = []
monedas.push (new Moneda (1, "Real", 35, 40, url="img/reales-brasil.jpg",href="real.html"));
monedas.push (new Moneda (2, "Dolar", 280, 290, url = "img/dolarbillete.png",href="dolar.html"));
monedas.push (new Moneda (3, "Euro", 295, 305, url="img/eurobillete.webp",href="euro.html"));

let cardMoneda = document.getElementById ("cardMoneda");

localStorage.setItem("array de monedas", monedas)


function convertir (){
  let monto = parseInt( document.getElementById("monto").value);
    let resultado = 0;
    let dolarCompra = 280 ;
    let euroCompra = 295;
    let realCompra= 35;

   
    

  if(document.getElementById("unoCompra").checked){
    resultado = monto * dolarCompra
    function mostrarResultadoCompra(){
      

      let div = document.createElement("div")
      div.innerHTML=`<h2> su total es ${resultado}`
     
      mostrarTotalCompra.append(div);
    
      Swal.fire(`El total es de ${resultado}`)
    }
      mostrarResultadoCompra();
    

  }else if(document.getElementById("dosCompra").checked){
      resultado = monto * euroCompra
   
      function mostrarResultadoCompra(){
        let div = document.createElement("div")
        div.innerHTML=`<h2> su total es ${resultado}`
      
        mostrarTotalCompra.append(div);
        Swal.fire(`El total es de ${resultado}`)
      }
        mostrarResultadoCompra();

  } else if (document.getElementById("tresCompra").checked){

    resultado = monto* realCompra

    function mostrarResultadoCompra(){
      let div = document.createElement("div")
      div.innerHTML=`<h2> su total es ${resultado}`
    
      mostrarTotalCompra.append(div);
      Swal.fire(`El total es de ${resultado}`)
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
  let dolarVenta= 290;
  let realVenta = 40;
  let euroVenta = 305;

  console.log(montoVenta)
  if(document.getElementById("unoVenta").checked){

    resultadoVenta = montoVenta * dolarVenta
    
    function mostrarResultadoVenta(){

      let div = document.createElement("div")
      div.innerHTML=`<h2> su total es ${resultadoVenta} `
      
    
      mostrarTotal.append(div);
      Swal.fire(`El total es de ${resultadoVenta}`)
    }
    mostrarResultadoVenta()

  } else if (document.getElementById("dosVenta").checked){

    resultadoVenta = montoVenta * euroVenta
    
    function mostrarResultadoVenta(){

      let div = document.createElement("div")
      div.innerHTML=`<h2> su total es ${resultadoVenta} `
      
    
      mostrarTotal.append(div);
      Swal.fire(`El total es de ${resultadoVenta}`)
    }
    mostrarResultadoVenta()

  }else if (document.getElementById("tresVenta").checked){
    resultado = montoVenta * realVenta
    
    function mostrarResultadoVenta(){

      let div = document.createElement("div")
      div.innerHTML=`<h2> su total es ${resultadoVenta} `
      
    
      mostrarTotal.append(div);
      Swal.fire(`El total es de ${resultadoVenta}`)
    }
    mostrarResultadoVenta()
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No ingresaste una opcion valida!',
      
    })
  }
  
}


const mostrarTotal = document.getElementById("mensajeVenta");



const mostrarTotalCompra = document.getElementById("mensajeCompra");

