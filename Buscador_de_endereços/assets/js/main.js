class Buscar{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.entrada = document.querySelector('.entrada');
        this.resultado = document.querySelector('.resultado');
        this.baseUrl = 'https://cep.awesomeapi.com.br/json/'
        this.busca();
    }

    busca(){
        this.formulario.addEventListener('submit', e =>{
            e.preventDefault();
            this.buscaEndereco();
        })
    }

    // https://cep.awesomeapi.com.br/json/05424020
// {"cep":"05424020","address_type":"Rua",
// "address_name":"Professor Carlos Reis","address":"Rua Professor Carlos Reis",
// "state":"SP","district":"Pinheiros","lat":"-23.5703026","lng":"-46.6967364",
// "city":"São Paulo","city_ibge":"3550308","ddd":"11"}


    mostraEndereco(data){
        this.resultado.innerHTML += `CEP: ${data['cep']}<br>`;
        this.resultado.innerHTML += `Endereço: ${data['address']}<br>`;
        this.resultado.innerHTML += `Estado: ${data['state']}<br>`;
        this.resultado.innerHTML += `Cidade: ${data['city']}<br>`;
        this.resultado.innerHTML += `Bairro: ${data['district']}<br>`;
    }

    async buscaEndereco(){
        if(this.checkInput()){
            const response = await fetch(this.url);
            if(response.status === 200){
                const data = await response.json();
                this.mostraEndereco(data);
            } else this.criaErro('CEP inválido')
        }
        else this.criaErro();
    }

    checkInput(){
        this.entrada = this.entrada.value;
        if(this.entrada.length === 8){
            this.url = this.baseUrl + this.entrada
            return true
        } else return false
    }

    criaErro(msg='Entrada inválida'){
        this.resultado.innerHTML = msg;
        this.resultado.style.backgroundColor = 'red';
        this.resultado.style.textAlign = 'center';
        return;
    }
}

busca = new Buscar();