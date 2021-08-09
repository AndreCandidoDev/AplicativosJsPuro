function Conversor(){
    this.form = document.querySelector('.form');
    this.valor = document.querySelector('.input_temperatura');
    this.resultado = document.querySelector('.resultado');
    let valor_f;
    let valor_k;

    this.inicia = () => {
        console.log('iniciou');
        this.recebe();
    }

    this.mostra = () => {
        console.log(valor_f);
        this.resultado.innerHTML += `<p>Valor em celsius: <b>${this.valor}°C</b></p>`;
        this.resultado.innerHTML += `<p>Valor em farenheit: <b>${valor_f}°F</b></p>`;
        this.resultado.innerHTML += `<p>Valor em kelvin: <b>${valor_k}K</b></p>`;
        this.resultado.innerHTML += `Atualize a página para nova conversão`;
    }

    this.converte = () => {
        valor_f = Number((this.valor*1.8) + 32);
        valor_k = Number(this.valor + 273.15);
        console.log(valor_f);
        console.log(valor_k);
        this.mostra();
    }

    this.recebe = () => {
        document.addEventListener('submit', (e)=>{
            e.preventDefault();
            console.log('recebeu');
            this.valor = Number(this.valor.value);
            this.converte();
            this.resultado = ``;
        })
    }
}

conversor = new Conversor();
conversor.inicia();