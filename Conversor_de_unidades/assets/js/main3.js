function Conversor(){

    this.tipo = document.querySelector('.tipoUnidade');
    this.unidade = document.querySelector('.unidadeValor');
    this.valor = document.querySelector('.valor');
    this.resultado = document.querySelector('.resultado');
    this.convercoes = {}


    this.inicia = () => this.recebe();

    this.setaTipo = () => {
        if(this.tipo.value !== undefined){ 
            this.tipo = this.tipo.value.toLowerCase();
        } else{
            return;
        }
        if(this.tipo === 'velocidade'){
            console.log('velocidade');
            this.recebeUnidadeVelocidade();
        } else if(this.tipo === 'area'){
            console.log('area');
            this.recebeUnidadeArea()
        } else if(this.tipo === 'volume'){
            console.log('volume');
            this.recebeUnidadeVolume()
        } else if(this.tipo === 'temperatura'){
            console.log('temperatura');
            this.recebeUnidadeTemperatura()
        } else{
            alert('Tipo inválido');
        }
    }

    this.recebeUnidadeVelocidade = () => {
        if(this.unidade.value !== undefined){
            this.unidade = this.unidade.value.toLowerCase();
        }else{
            return;
        }
        if(this.unidade === 'ms') this.converteMs();
        else if(this.unidade === 'kmh') this.convertekmh();
        else alert('Unidade inválida!')
    }

    this.recebeUnidadeArea = () => {
        if(this.unidade.value !== undefined){
            this.unidade = this.unidade.value.toLowerCase();
        }else{
            return;
        }
        if(this.unidade === 'm2') this.converteM2();
        else if(this.unidade === 'km2') this.converteKm2();
        else alert('Unidade inválida!')
    }

    this.recebeUnidadeVolume = () => {
        if(this.unidade.value !== undefined){
            this.unidade = this.unidade.value.toLowerCase();
        }else{
            return;
        }
        if(this.unidade === 'm3') this.converteM3();
        else if(this.unidade === 'cm3') this.converteCm3();
        else alert('Unidade inválida!')
    }

    this.recebeUnidadeTemperatura = () => {
        if(this.unidade.value !== undefined){
            this.unidade = this.unidade.value.toLowerCase();
        }else{
            return;
        }
        if(this.unidade === 'c') this.converteCelsius();
        else if(this.unidade === 'f') this.converteFarenheit();
        else if(this.unidade === 'k') this.converteKelvin();
        else alert('Unidade inválida!')
    }

    this.converteCelsius = () => {
        console.log('°C')
        this.valor = Number(this.valor.value);
        console.log(this.valor);
        this.convercoes = {
            'temperatura-celsius': Number(this.valor),
            'temperatura-celsius-farenheit': Number((this.valor*1.8) + 32),
            'temperatura-celsius-kelvin': Number(this.valor + 273.15)
        }
        this.mostra()
    }

    this.converteFarenheit = () => {
        console.log('°F')
        this.valor = Number(this.valor.value);
        console.log(this.valor);
        this.convercoes = {
            'temperatura-farenheit-celsius': Number((this.valor-32)/1.8),
            'temperatura-farenheit': Number(this.valor),
            'temperatura-farenheit-kelvin': Number((((this.valor-32)*5)/9) + 273.15)
        }
        this.mostra()
    }
    
    this.converteKelvin = () => {
        console.log('K')
        this.valor = Number(this.valor.value);
        console.log(this.valor);
        this.convercoes = {
            'temperatura-kelvin-celsius': Number(this.valor - 273.15),
            'temperatura-kelvin-farenheit': Number((((this.valor - 273.15)*9)/5)+32),
            'temperatura-kelvin': Number(this.valor)
        }
        this.mostra()
    }

    this.converteM2 = () => {
        console.log('m²')
        this.valor = Number(this.valor.value);
        console.log(this.valor);
        this.convercoes = {
            'area-m2-km2': Number(this.valor/1000000),
            'area-km2-m2': Number(this.valor)
        }
        console.log(this.convercoes['velocidade-ms-kmh']);
        this.mostra()
    }
    
    this.converteKm2 = () => {
        console.log('km²')
        this.valor = Number(this.valor.value);
        console.log(this.valor);
        this.convercoes = {
            'area-m2-km2': Number(this.valor),
            'area-km2-m2': Number(this.valor*1000000)
        }
        console.log(this.convercoes['velocidade-ms-kmh']);
        this.mostra()
    }

    this.converteM3 = () => {
        console.log('m³')
        this.valor = Number(this.valor.value);
        console.log(this.valor);
        this.convercoes = {
            'volume-m3-cm3': Number(this.valor*1000000),
            'volume-cm3-m3': Number(this.valor)
        }
        console.log(this.convercoes['velocidade-ms-kmh']);
        this.mostra()
    }

    this.converteCm3 = () => {
        console.log('cm³')
        this.valor = Number(this.valor.value);
        console.log(this.valor);
        this.convercoes = {
            'volume-m3-cm3': Number(this.valor),
            'volume-cm3-m3': Number(this.valor/1000000)
        }
        console.log(this.convercoes['velocidade-ms-kmh']);
        this.mostra()
    }

    this.converteMs = () => {
        console.log('ms')
        this.valor = Number(this.valor.value);
        console.log(this.valor);
        this.convercoes = {
            'velocidade-kmh-ms': this.valor,
            'velocidade-ms-kmh': Number(this.valor*3.6)
        }
        console.log(this.convercoes['velocidade-ms-kmh']);
        this.mostra()
    }

    this.convertekmh = () => {
        console.log('km')
        this.valor = Number(this.valor.value);
        console.log(this.valor);
        this.convercoes = {
            'velocidade-kmh-ms': Number(this.valor/3.6),
            'velocidade-ms-kmh': this.valor
        }
        console.log(this.convercoes['velocidade-ms-kmh']);
        this.mostra()
    }

    this.mostra = () => {
        if(this.tipo === 'velocidade'){
            if(this.unidade === 'ms'){
                this.resultado.innerHTML += 
                `<p>Velocidade em Km/h: <b>${this.convercoes['velocidade-ms-kmh']}</b></p>`;
            }
            else if(this.unidade === 'kmh'){
                this.resultado.innerHTML += 
                `<p>Velocidade em m/s: <b>${this.convercoes['velocidade-kmh-ms']}</b></p>`;
            }
        }
        else if(this.tipo === 'area'){
            if(this.unidade === 'm2'){
                this.resultado.innerHTML += 
                `<p>Area para Km²: <b>${this.convercoes['area-m2-km2']}</b></p>`;
            }
            else if(this.unidade === 'km2'){
                this.resultado.innerHTML += 
                `<p>Area para m²: <b>${this.convercoes['area-km2-m2']}</b></p>`;
            }
        }
        else if(this.tipo === 'volume'){
            if(this.unidade === 'm3'){
                this.resultado.innerHTML += 
                `<p>Volume para cm³: <b>${this.convercoes['volume-m3-cm3']}</b></p>`;
            }
            else if(this.unidade === 'cm3'){
                this.resultado.innerHTML += 
                `<p>Volume para m³: <b>${this.convercoes['volume-cm3-m3']}</b></p>`;
            }
        }
        else if(this.tipo === 'temperatura'){
            if(this.unidade === 'c'){
                this.resultado.innerHTML += 
                `<p>Temperatura para °F: <b>${this.convercoes['temperatura-celsius-farenheit']}</b></p>
                <p>Temperatura para K: <b>${this.convercoes['temperatura-celsius-kelvin']}</b></p>`;
            }
            else if(this.unidade === 'f'){
                this.resultado.innerHTML += 
                `<p>Temperatura para °C: <b>${this.convercoes['temperatura-farenheit-celsius']}</b></p>
                <p>Temperatura para K: <b>${this.convercoes['temperatura-farenheit-kelvin']}</b></p>`;
            }
            else if(this.unidade === 'k'){
                this.resultado.innerHTML += 
                `<p>Temperatura para °C: <b>${this.convercoes['temperatura-kelvin-celsius']}</b></p>
                <p>Temperatura para K: <b>${this.convercoes['temperatura-kelvin-farenheit']}</b></p>`;
            }
        }
    }

    this.recebe = () => {
        addEventListener('submit', (e) => {
            e.preventDefault()
            this.setaTipo();
        })
    }
}

const conversor = new Conversor();
conversor.inicia();