class Conversor{
    constructor(){
        this.allowed_units = {
            'area':['mm²', 'mm2', 'cm²', 'cm2', 'm²', 'm2', 'km²', 'km2'],
            'peso':['mg', 'g', 'kg', 'ton'],
            'temperatura':['c', 'C', '°C', '°c', 'f', 'F', '°F', '°f', 'k', 'K'],
            'tempo':['s', 'min', 'h'],
            'velocidade':['ms', 'm/s', 'kmh', 'km/h'],
            'volume':['mm³', 'mm3', 'cm³', 'cm3', 'm³', 'm3', 'ml', 'mL', 'l', 'L'],
        };
        this.formulario = document.querySelector('.formulario');
        this.tipoUnidade = document.querySelector('.tipoUnidade');
        this.valor = document.querySelector('.valor');
        this.resultado = document.querySelector('.resultado');
        this.tabela = document.createElement('table');
        this.unidades = [];
        this.valores = [];
        this.converter();
    }

    converter(){
        this.formulario.addEventListener('submit', e => {
            e.preventDefault();
            this.setConversor();
        })
    }

    setConversor(){
        this.tipoUnidade = this.tipoUnidade.value.toLowerCase();
        if(this.tipoUnidade === 'velocidade') this.converteVelocidade()
        else if(this.tipoUnidade === 'area') this.converteArea()
        else if(this.tipoUnidade === 'volume') this.converteVolume()
        else if(this.tipoUnidade === 'peso') this.convertePeso()
        else if(this.tipoUnidade === 'temperatura') this.converteTemperatura()
        else if(this.tipoUnidade === 'tempo') this.converteTempo()
        else this.criaErro('Insira valores válidos')
    }

    preparaValor(){
        this.valor = this.valor.value;
        const array = this.valor.split('-')
        this.unidade = array[1];
        this.valor = array[0];
    }

    converteVelocidade(){
        this.preparaValor();
        this.valor = Number(this.valor);
        this.unidades.push('m/s', 'km/h');
        if(this.checaUnidades()){
            if(this.unidade === 'ms' || this.unidade === 'm/s'){
                this.valores.push(
                    this.valor,
                    this.valor*3.6
                );
            }
            else if(this.unidade === 'kmh' || this.unidade === 'km/h'){
                this.valores.push(
                    this.valor/3.6,
                    this.valor,
                );
            }
            this.exibe();        
        }
        else this.criaErro(); 
    }

    converteArea(){
        this.preparaValor();
        this.unidades.push('mm²', 'cm²', 'm²', 'km²');
        this.valor = Number(this.valor);
        if(this.checaUnidades()){
            if(this.unidade === 'mm2' || this.unidade === 'mm²'){
                this.valores.push(
                    this.valor,
                    this.valor/100,
                    this.valor/(100*100*100),
                    this.valor/(100*100*100*1000000),
                );
            }
            else if(this.unidade === 'cm2' || this.unidade === 'cm²'){
                this.valores.push(
                    this.valor*100,
                    this.valor,
                    this.valor/(100*100),
                    this.valor/(100000*100000),
                );
            }
            else if(this.unidade === 'm2' || this.unidade === 'm²'){
                this.valores.push(
                    this.valor*1000000,
                    this.valor*10000,
                    this.valor,
                    this.valor/1000000,
                );
            }
            else if(this.unidade === 'km2' || this.unidade === 'km²'){
                this.valores.push(
                    this.valor*(1000000*1000000),
                    this.valor*(100000*100000),
                    this.valor*1000000,
                    this.valor,
                );
            }
            this.exibe();
        }
        else this.criaErro();
    }

    converteVolume(){
        this.preparaValor();
        this.unidades.push('mm³', 'cm³', 'm³', 'mL', 'L');
        this.valor = Number(this.valor);
        if(this.checaUnidades()){
            if(this.unidade === 'mm3' || this.unidade === 'mm³'){
                this.valores.push(
                    this.valor,
                    this.valor/1000,
                    this.valor/(1000*1000*1000),
                    this.valor/1000,
                    this.valor/(1000*1000),
                );
            }
            else if(this.unidade === 'cm3' || this.unidade === 'cm³'){
                this.valores.push(
                    this.valor*1000,
                    this.valor,
                    this.valor/(1000*1000),
                    this.valor,
                    this.valor/(1000*1000),
                );
            }
            else if(this.unidade === 'm3' || this.unidade === 'm³'){
                this.valores.push(
                    this.valor*(1000*1000*1000),
                    this.valor*(1000*1000),
                    this.valor,
                    this.valor*(1000*1000),
                    this.valor*1000,
                );
            }
            else if(this.unidade === 'ml' || this.unidade === 'mL'){
                this.valores.push(
                    this.valor*1000,
                    this.valor,
                    this.valor/(1000*1000),
                    this.valor,
                    this.valor/1000,
                );
            }
            else if(this.unidade === 'l' || this.unidade === 'L'){
                this.valores.push(
                    this.valor*1000000,
                    this.valor*1000,
                    this.valor/1000,
                    this.valor*1000,
                    this.valor,
                );
            }
            this.exibe();
        }
        else this.criaErro()
    }
    
    convertePeso(){
        this.preparaValor();
        this.unidades.push('mg', 'g', 'kg', 'ton')
        this.valor = Number(this.valor);
        if(this.checaUnidades()){
            if(this.unidade === 'mg'){
                this.valores.push(
                    this.valor,
                    this.valor/1000,
                    this.valor/(1000*1000),
                    this.valor/(1000*1000*1000),
                );
            }
            else if(this.unidade === 'g'){
                this.valores.push(
                    this.valor*1000,
                    this.valor,
                    this.valor/1000,
                    this.valor/(1000*1000),
                );
            }
            else if(this.unidade === 'kg'){
                this.valores.push(
                    this.valor*(1000*1000),
                    this.valor*1000,
                    this.valor,
                    this.valor/1000,
                );
            }
            else if(this.unidade === 'ton'){
                this.valores.push(
                    this.valor*(1000*1000*1000),
                    this.valor*(1000*1000),
                    this.valor*1000,
                    this.valor,
                );
            }
            this.exibe();
        }
        else this.criaErro();
    }
    
    checaUnidades(){
        const array_tipo = this.allowed_units[this.tipoUnidade];
        for(let i of array_tipo){
            if (i === this.unidade) return true;
        }
        return false;
    }

    converteTemperatura(){
        this.preparaValor();
        this.valor = Number(this.valor);
        this.unidades.push('°C', '°F', 'K');
        if(this.checaUnidades()){
            if(this.unidade.toLowerCase() === 'c' || this.unidade === '°c' || this.unidade === '°C'){
                this.valores.push(
                    this.valor,
                    (this.valor*1.8) + 32,
                    this.valor + 273.15
                );
            }
            else if(this.unidade.toLowerCase() === 'f' || this.unidade === '°f' || this.unidade === '°F'){
                this.valores.push(
                    (this.valor-32)/1.8,
                    this.valor,
                    (((this.valor-32)*5)/9) + 273.15,
                );
            }
            else if(this.unidade.toLowerCase() === 'k'){
                this.valores.push(
                    this.valor - 273.15,
                    (((this.valor - 273.15)*9)/5)+32,
                    this.valor,
                );
            }
            this.exibe();
        }
        else this.criaErro();        
    }

    converteTempo(){
        this.preparaValor();
        this.valor = Number(this.valor);
        this.unidades.push('seg', 'min', 'h');
        if(this.checaUnidades()){
            if(this.unidade === 's'){
                this.valores.push(
                    this.valor,
                    this.valor/60,
                    this.valor/3600,
                );
            }
            else if(this.unidade === 'min'){
                this.valores.push(
                    this.valor*60,
                    this.valor,
                    this.valor/60,
                );
            }
            else if(this.unidade === 'h'){
                this.valores.push(
                    this.valor*3600,
                    this.valor*60,
                    this.valor,
                );
            }
            this.exibe();
        }
        else this.criaErro();
    }

    exibe(){
        this.resultado.innerHTML += `Conversão de ${this.tipoUnidade}`
        this.criaTabela();
    }

    criaErro(msg='Unidade ou valor inválido'){
        this.resultado.style.backgroundColor = 'red';
        this.resultado.style.textAlign = 'center';
        this.resultado.innerHTML = msg;
    }

    criaTabela(){
        this.criaTabelaHeader(this.unidades);
        this.criaTabelaBody(this.valores);
    }

    criaTabelaHeader(unidades){
        this.tabela.className = 'tabela-resultado';
        const thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th;
        for(let i of unidades){
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
            td.innerHTML = i;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        this.tabela.appendChild(tbody);
    }

}

conv = new Conversor();