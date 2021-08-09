const baseUrl = 'https://cep.awesomeapi.com.br/json/';
const cep = '05424020'; //vem do form
const endereco = 'Rua Professor Carlos Reis';

// fetch(baseUrl+cep)
// .then(data => data.json())
// .then(data => console.log(data))
// .catch(e => console.log(e));

function verificaEndereco(cep, endereco){
    fetch(baseUrl+cep)
    .then(data => data.json())
    .then(data => {
        if(cep === '' || endereco === ''){
            console.log('erro');
            console.log('manda mensagem de erro');
        }
        else{
            const enderecoVerifica = endereco.toLowerCase();
            const enderecoData = data['address'].toLowerCase();
            if(enderecoVerifica === enderecoData){
                console.log('passou na validação');
                console.log('cria mensagem de sucesso e avança na validação');
            }
            else{
                console.log('erro');
                console.log('cria mensagem de erro de validação');
            }
        }
    })
    .catch(e => console.log(e));
}

verificaEndereco(cep,endereco);