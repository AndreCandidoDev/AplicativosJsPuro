class ValidaCpf{
    constructor(cpf){
        this.cpf = cpf;
        // this.valida();
    }

    valida(){
        if(this.cpf.length < 11) return false; //form nao permite comprimento maior que 11
        if(this.isSequencia()) return false;
        const cpfParcial = String(this.cpf).slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial+digito1);
        const cpfVerificar = cpfParcial + digito1 + digito2;
        if(cpfVerificar === this.cpf) return true;
        else return false;
    }

    criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((acumulador, valor) => {
            acumulador += (Number(valor)*regressivo)
            regressivo = regressivo -1;
            return acumulador;
        }, 0);
        const digito = 11 - (total%11);
        return (digito <= 9) ? String(digito) : '0';
    }

    isSequencia(){
        const sequencia = this.cpf[0].repeat(this.cpf.length);
        return sequencia === this.cpf;
    }
}