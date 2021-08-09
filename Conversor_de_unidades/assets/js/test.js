function checaUnidades(tipo, unidade){
    const tipoUnidade = tipo;
    const allowed_units = {
        'temperatura':['c', 'C', '°C', 'f', 'F', '°F', 'k', 'K'],
        'velocidade':['ms', 'm/s', 'kmh', 'km/h']
    };
    const array_tipo = allowed_units[tipo];
    for(let i of array_tipo){
        if (i === unidade){ 
            console.log('Unidade existe');
            return;
        }
    }
    console.log('unidade nao existe');
    return;
    // for(let i of allowed_units){
    //     console.log(i);
    //     console.log(i === tipo);
        // if(allowed_units.keys === tipo) console.log(true);
        // if(i === unidade) return true;
        // else return false;
    // }
}

checaUnidades('temperatura','F');