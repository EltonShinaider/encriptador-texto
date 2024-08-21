const textArea = document.querySelector(".entrada_texto");
const resultado = document.querySelector(".resultado");
const imagemBoneco = document.querySelector(".imagem-boneco"); // Seletor da imagem

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


//Função para validar a entrada de texto
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; //Permitir apenas letras minúsculas e espaços
    if (!regex.test(texto)) {
        alert('Por favor, insira apenas letras minúsculas e sem acentos.');
        return false;
    }
    return true;
}

//Função para encriptar o texto
function btnEncriptar() {
    const texto = textArea.value;
    if (validarTexto(texto)) { //Validar antes de encriptar
        const textoEncriptado = encriptar(texto);
        resultado.value = textoEncriptado;
        resultado.style.display = "block"; //Mostrar a área de resultado
        textArea.value = "";

        imagemBoneco.classList.add("imagem-oculta"); //Ocultar a imagem
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

//Função para desencriptar o texto
function btnDesencriptar() {
    const texto = textArea.value;
    if (validarTexto(texto)) { //Validar antes de desencriptar
        const textoDesencriptado = desencriptar(texto);
        resultado.value = textoDesencriptado;
        resultado.style.display = "block"; //Mostrar a área de resultado
        textArea.value = "";

        imagemBoneco.classList.add("imagem-oculta"); //Ocultar a imagem
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

//Função para copiar o texto para a área de transferência
function btnCopiar() {
    const saidaTexto = document.getElementById('saida_texto');
    saidaTexto.select();
    saidaTexto.setSelectionRange(0, 99999); //Para dispositivos móveis

    navigator.clipboard.writeText(saidaTexto.value).then(() => {
        alert('Texto copiado com sucesso!');
        
        //Ocultar a área de resultado e mostrar a imagem do boneco novamente
        resultado.style.display = "none"; //Ocultar a área de resultado
        imagemBoneco.classList.remove("imagem-oculta"); //Mostrar a imagem novamente
    }, function (err) {
        console.error("Erro ao copiar: ", err);
    });
}