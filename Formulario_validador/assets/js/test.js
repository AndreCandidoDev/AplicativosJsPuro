function criaDigito(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    console.log('cpf array: ',cpfArray);
    let regressivo = cpfArray.length + 1;
    console.log('regressivo: ',regressivo);
    const total = cpfArray.reduce((acumulador, valor) => {
        acumulador += (Number(valor)*regressivo)
        console.log('acumulador: ', acumulador);
        regressivo = regressivo -1;
        return acumulador
    }, 0);
    console.log('total: ',total);
    const digito = 11 - (total%11);
    console.log('digito gerado: ',digito);
    return (digito <= 9) ? String(digito) : '0';
}



// 70548445052
// 705484450
criaDigito('705484450');