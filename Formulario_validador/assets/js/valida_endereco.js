// deve receber o cep e endereço e retornar true ou false

// chamada de api
// const userAction = async () => {
//     const response = await fetch('http://example.com/movies.json');
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//   }

// cep = 01234567 --- form
// endereco = rua teste .... --- form

// {"cep":"05424020","address_type":"Rua","address_name":"Professor Carlos Reis",
// "address":"Rua Professor Carlos Reis","state":"SP","district":"Pinheiros",
// "lat":"-23.5703026","lng":"-46.6967364","city":"São Paulo","city_ibge":"3550308","ddd":"11"}

class ValidaEndereco{
    constructor(cep, endereco){
        this.cep = cep;
        this.endereco = endereco.toLowerCase();
        this.flagError = false;
        // this.isValid = false;
        // this.dadosChecados = {};
        this.baseUrl = 'https://cep.awesomeapi.com.br/json/'
    }


    // valida(){
    //     const dados = this.getData();
    //     dados.then(dado => {
    //         console.log(dado);
    //         console.log(dado['address'], typeof dado['address']);
    //         console.log(dado['address'].toLowerCase())
    //         if(dado['address'].toLowerCase() === this.endereco){
    //             console.log('chegou no if');
    //             // this.isValid=true
    //             // console.log('passou na validação',this.isValid);
    //             return true;
    //         };
    //         // this.isValid=false;
    //         console.log('nao passou na validação',this.isValid)
    //         return false;
    //     })
    //     .then(valor => {
    //         console.log(valor);
    //         this.isValid = valor;
    //         console.log(this.isValid)
    //     })
    //     .catch(this.flagError = true);
    // }

    async getData(){
        try{
            console.log(this.endereco);
            const response = await fetch(this.baseUrl+this.cep);
            console.log(response);
            if(response.status === 200){
                const dados = await response.json();
                return dados
            }
            else this.enderecoVerificar = 'invalido';
        }  
        catch(e){
            console.log('Error')
        } 
    } 

}