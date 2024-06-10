let cep = document.getElementById('cep');
let rua = document.getElementById('rua');
let bairro = document.getElementById('bairro');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');

//Mascaras dos Campos com Jquey
$(document).ready(function(){
    $('#cep').mask('00000-000');
});

function requeryCep() {
    cep = cep.value
    if (cep.length !== 9) return;

    const api = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(api)
        .then(response => response.json())
        .then(adress => {
            if (adress.erro) {
                alert("CEP não encontrado!");
                return;
            }
            rua.value = adress.logradouro;
            bairro.value = adress.bairro;
            cidade.value = adress.localidade;
            estado.value = adress.uf;
        })
        .catch(error => {
            console.error("Erro ao buscar endereço:", error);
        });
}

function formSend(){
    alert("Este formulário está desativado")
}
