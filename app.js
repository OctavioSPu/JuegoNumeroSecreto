
let numeroSecreto = 0;
let contadorIntentos= 0;
let listaNumerosSorteados = [];
let numeroMaximo=10;

function asignarTextoElemento(elemento , texto){

    let elemetnoHTML = document.querySelector(elemento);
    elemetnoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    
    if(numeroDeUsuario=== numeroSecreto)
    {
        asignarTextoElemento('p', `Acertaste el número en ${contadorIntentos}  ${(contadorIntentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpiarCaja();
    }
    else{
        // El usuario no acerto.
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','Numero secreto es menor'); 
        }
        else{
            asignarTextoElemento('p','Numero secreto es mayor');
        }
        contadorIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos los numeros

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearos todos los números posibles');
        
    }else{
        // si numero generado esta en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); 
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }


    
}

function CondicionesIniciales(){
    asignarTextoElemento('h1' , ' Juego del numero secreto! 2');
    asignarTextoElemento('p' , `Indica un número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    contadorIntentos=1;
    console.log(numeroSecreto) ;   
}

function reiniciarJuego(){
    // limpiar caja
    // indicar mensaje de intervalo de numeros
    // generar numero aleatorio
    // deshabilitar boton nuevo juego
    // inicializar numero de intentos
    limpiarCaja();
    CondicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

CondicionesIniciales();


