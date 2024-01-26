
/*
let parrafo = document.querySelector('p');//Seleccion por etiqueta
parrafo.innerHTML = "Indique un número del 1 al 10";
*/
let numeroMaximo = 10;
let numeroSecreto = 0;
let numeroIntentos = 3;
let intentoActual = 1;
let listaNumerosSorteados = [3,4,5];

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('numero_usuario').value);
    console.log(numeroUsuario);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste en ${intentoActual} ${(intentoActual === 1) ? 'intento' : 'intentos'}`);
        habilitarBotonNuevoJuego();
    }else{
        //El usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p',"El número secreto es menor");
        }else{
            asignarTextoElemento('p',"El número secreto es mayor");
        }
        intentoActual++;
        limpiarInput();

        if(intentoActual > numeroIntentos){
            asignarTextoElemento('p',`Has alcanzado un maximo de ${numeroIntentos} intentos :(. El número era ${numeroSecreto}`);
            habilitarBotonNuevoJuego();
        }
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto(numeroMaximo){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;

    if(listaNumerosSorteados.length != numeroMaximo){
        if(listaNumerosSorteados.includes(numeroGenerado)){ //El método include busca si existe un elemento dentro de la lista
            generarNumeroSecreto(numeroGenerado);
        }else{
            listaNumerosSorteados.push(numeroGenerado);
        }
    }else{
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        document.getElementById('intentar').setAttribute('disabled',true);
    }
}

function limpiarInput(){
    document.querySelector('#numero_usuario').value = '';
}

function resetJuego(){
    //Limpiar la caja
    limpiarInput();
    //Indicar mensaje de intervalos
    //Generar nuevo número secreto
    //reiniciar los intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "JUEGO DEL NÚMERO SECRETO!");
    asignarTextoElemento('P', `Indique un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(numeroMaximo);
    intentoActual = 1;
}

function habilitarBotonNuevoJuego(){
    document.getElementById('reiniciar').removeAttribute('disabled'); //Activa el boton 'Nuevo juego'
}

condicionesIniciales();

//listaNumerosSorteados.forEach(numero => console.log(numero));

