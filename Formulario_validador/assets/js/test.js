const baseUrl = 'https://cep.awesomeapi.com.br/json/';
const cep = '05424020'; //vem do form
const endereco = 'Rua Professor Carlos Reis';

fetch(baseUrl+cep)
.then(data => data.json())
.then(data => console.log(data))
.catch(e => console.log(e));