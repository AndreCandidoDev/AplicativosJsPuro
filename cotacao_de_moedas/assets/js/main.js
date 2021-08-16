class Cotacoes{
    constructor(){
        this.url = 'https://economia.awesomeapi.com.br/last/';
        this.resultado = document.querySelector('.resultado');
        this.getCotacoes();
    }

    criaTabela(moedas, valores){
        this.tabela = document.createElement('table');
        this.criaTabelaHeader(moedas);
        this.criaTabelaBody(valores);
    }

    criaTabelaHeader(moedas){
        this.tabela.className = 'tabela-resultado';
        const thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th;
        for(let i of moedas){
            console.log(i);
            th = document.createElement('th');
            th.innerHTML = i
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        this.tabela.appendChild(thead);
        this.resultado.appendChild(this.tabela);
    }

    criaTabelaBody(valores){
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        let td;
        for(let i of valores){
            console.log(i);
            td = document.createElement('td');
            if(i['code'] === 'BTC') td.innerHTML = Number(i['bid'])*1000;
            else td.innerHTML = i['bid'];
            // this.criaLink('test');
            tr.appendChild(td);
            // const link = this.criaLink('test')
            // tr.appendChild(link);
        }
        tbody.appendChild(tr);
        this.tabela.appendChild(tbody);
    }

    // dolar, euro, BTC
    getCotacoes(){
        this.moedas = ['USD-BRL', 'EUR-BRL', 'BTC-BRL'];
        console.log('length of this.moedas ',this.moedas.length);
        console.log(this.moedas.join(','));
        this.moedas = this.moedas.join(',');
        this.url += this.moedas;
        fetch(this.url)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            console.log(Object.keys(data), Object.values(data));
            this.criaTabela(Object.keys(data), Object.values(data));
        })
        .catch(e => console.log(e));
    }
}

cotacao = new Cotacoes();