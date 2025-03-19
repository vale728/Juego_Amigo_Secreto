// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás 
// desarrollar la lógica para resolver el problema.
let nombres_amigos=[];

function agregarAmigo(){
   let nombresJugadores=document.getElementById('amigo').value; 

   if(!nombresJugadores){
      alert('Por favor, inserte un nombre')
      return;//detiene la funcion si el nombre esta vacio
   }
   nombres_amigos.push(nombresJugadores);
   limpiarCaja();
   actualizarListaAmigos();
   
}



function limpiarCaja() {
   let valorCaja= document.querySelector('#amigo');
   valorCaja.value='';
   return
}

function actualizarListaAmigos() {
   let lista_Amigos=document.getElementById('listaAmigos');
   lista_Amigos.innerHTML="";//para limpiar que no se repitan

   for(let i=0; i<nombres_amigos.length; i++){
      let item = document.createElement('li');
      item.textContent=nombres_amigos[i];
      lista_Amigos.appendChild(item);

   }  
}

function sortearAmigo() {
   if(nombres_amigos.length===0){
       alert("No hay datos para sortear");
       return;
   }
   let sorteoAmigo=nombres_amigos[Math.floor(Math.random()*nombres_amigos.length)];
   let resultado=document.getElementById("resultado");
   resultado.innerHTML=`El amigo sorteado es ${sorteoAmigo}`;

   let=limpiarLista=document.getElementById("listaAmigos");
   limpiarLista.innerHTML=""; 
   
}





