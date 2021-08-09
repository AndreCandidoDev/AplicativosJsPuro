const resultado = document.querySelector('.resultado');
const tabela = document.createElement('table');

function criaTabelaHeader(unidades){
        tabela.className = 'tabela-resultado';
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
        tabela.appendChild(thead);
        resultado.appendChild(tabela);
}

function criaTabelaBody(valores){
    const tbody = document.createElement('tbody');
    tr = document.createElement('tr');
    let td;
    for(let i of valores){
        td = document.createElement('td');
        td.innerHTML = i;
        tr.appendChild(td);
    }
    tr.appendChild(td);
    tbody.appendChild(tr);
    tabela.appendChild(tbody);
}

const units = ['a', 'b', 'c', 'd'];
const values = [1, 2, 3, 4];

criaTabelaHeader(units);
criaTabelaBody(values);