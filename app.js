const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector('#campo-mensaje')

const matriz_code = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'over'],
    ['u', 'ufat'],
];

function btnEncriptar(){
    const texto = Encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function Encriptar(fraseEncriptada){
    for(let i=0; i<matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0], matriz_code[i][1])
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar(){
    const texto = Desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function Desencriptar(fraseEncriptada){
    for(let i=0; i<matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][1], matriz_code[i][0])
        }
    }
    return fraseEncriptada;
}

