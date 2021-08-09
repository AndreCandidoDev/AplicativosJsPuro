function Conversor(){
    this.form = document.querySelector('.form');
    this.unidade = document.querySelector('.inputUnit');
    this.value = document.querySelector('.inputTemperature');
    this.resultado = document.querySelector('.resultado');
    let unity;
    let valor_f;
    let valor_k;
    let valor_c;

    this.inicia = () => this.recebe();

    this.verificaUnidade = () => {
        unity = this.unidade.value.toUpperCase()[0];
        console.log(unity);
        if(unity === 'C'){
            this.converteCelsius();
        }
        else if(unity === 'F'){
            this.converteFarenheit();
        }
        else if(unity === 'K'){
            this.converteKelvin();
        }
        else{
            alert('Unidade invalida');
        }
    }

    this.converteCelsius = () => {
        console.log('celsius');
        valor_c = Number(this.value.value);
        console.log(valor_c);
        valor_f = Number((valor_c*1.8) + 32);
        valor_k = Number(valor_c + 273.15);
        this.mostra();
    }

    this.converteFarenheit = () => {
        console.log('farenheit');
        valor_f = Number(this.value.value);
        valor_c = Number((valor_f-32)/1.8);
        valor_k = Number((((valor_f-32)*5)/9) + 273.15);
        this.mostra();
    }

    this.converteKelvin = () => {
        console.log('kelvin');
        valor_k = Number(this.value.value);
        valor_c = Number(valor_k - 273.15);
        valor_f = Number((((valor_k - 273.15)*9)/5)+32);
        this.mostra();
    }

    this.mostra = () => {
        console.log(valor_c);
        console.log(valor_f);
        console.log(valor_k);
        if(unity === 'C') this.resultado.innerHTML += 
        `<p>
            Temperatura em Celsius: <b>${valor_c}°C</b><br>
            Temperatura em Farenheit: <b>${valor_f}°F</b><br>
            Temperatura em Kelvin: <b>${valor_k}K</b>
        </p>`;
        if(unity === 'F') this.resultado.innerHTML += 
        `<p>
            Temperatura em Farenheit: <b>${valor_f}°F</b><br>
            Temperatura em Celsius: <b>${valor_c}°C</b><br>
            Temperatura em Kelvin: <b>${valor_k}K</b>
        </p>`;
        if(unity === 'K') this.resultado.innerHTML += 
        `<p>
            Temperatura em Kelvin: <b>${valor_k}K</b><br>
            Temperatura em Farenheit: <b>${valor_f}°F</b><br>
            Temperatura em Celsius: <b>${valor_c}°C</b><br>
        </p>`;

    }

    this.recebe = () => {
        document.addEventListener('submit', (e)=>{
            e.preventDefault();
            this.verificaUnidade();
            this.resultado.innerHTML += ``
        })
    }

}

const conversor = new Conversor();
conversor.inicia();