// campos: nome, sobrenome, data de nascimento, cpf, nome de usuario, cep, endereço, senhas
// - cpf deve ser válido --> seguir regra de validação de cpf
// - endereço deve ser compativel ao idicado no cep
// - senhas devem ser iguais (senha e confirmação)

// essa classe deve receber os dados do formulario e fazer as validações
class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.mensagem = document.querySelector('.mensagem');
        this.dataNascimento = document.querySelector('.data'); 
        this.cpf = document.querySelector('.cpf');
        this.usuario = document.querySelector('.usuario');
        this.email = document.querySelector('.email');
        this.cep = document.querySelector('.cep');
        this.endereco = document.querySelector('.endereco');
        this.senha = document.querySelector('.senha');
        this.senha_confirmacao = document.querySelector('.confirma-senha');
        this.valida();
    }

    valida(){
        this.formulario.addEventListener('submit', e => {
            e.preventDefault();
            this.verificaDados();
        });
    }

    // retorna true se os dados estiverem ok
    verificaDados(){
        this.verificaEndereco();
        if(!this.verificaVazio()) this.criaMensagem('Campo vazio detectado', true);
        if(!this.verificaIdade()) this.criaMensagem('Proibido cadastro de menores de idade', true);
        if(!this.verificaCpf()) this.criaMensagem('Cpf deve ser válido', true);
        if(!this.verificaUsuario()) this.criaMensagem('Nome de usuario deve respeitar regras acima', true);
        if(!this.verificaSenhas()) this.criaMensagem('Senha deve ter os critérios acima', true)
        else{
            this.criaMensagem();
        //     this.formulario.submit();
        }
    }

    verificaVazio(){
        for(let campo of this.formulario.querySelectorAll('.validar')){
            if(!campo.value){
                let label = campo.previousElementSibling.innerText;
                this.criaErroCampo(`Campo ${label} não pode estar vazio` ,campo);
                return false;
            }
        }
        return true;
    }

    addZero(dado){
        if(dado < 10){
            dado = `0${dado}`;
            return dado
        }
    }

    getDataAtual(){
        const data = new Date();
        const dia = data.getDate();
        const mes = data.getMonth();
        const ano = String(data.getUTCFullYear());
        const dataString = `${ano}-${this.addZero(mes)}-${this.addZero(dia)}`;
        return dataString;
    }

    verificaIdade(){
        const dataAtual = this.getDataAtual();
        const dataForm = this.dataNascimento.value;
        const arrayAtual = dataAtual.split('-');
        const arrayForm = dataForm.split('-');
        const idade = Number(arrayAtual[0]) - Number(arrayForm[0]);
        if (idade > 18) return true; 
        else return false;
    }

    verificaCpf(){
        const cpf = new ValidaCpf(this.cpf.value);
        if(cpf.valida()) return true;
        else{
            this.criaErroCampo('Cpf inválido', this.cpf);
            return false;
        }
    }

    verificaUsuario(){
        const usuario = this.usuario.value;
        if(usuario.length >= 3 && usuario <= 12) return true;
        if(usuario.match(/^[A-Za-z0-9]+$/g)) return true;
        this.criaErroCampo('Usuario inválido', this.usuario);
        return false;
    }

    verificaEndereco(){ 
        if(this.cep.value === '' || this.endereco.value === ''){
            this.criaErroCampo('CEP nulo', this.cep);
            this.criaErroCampo('Endereço nulo', this.endereco);
            this.criaMensagem('Validação de endereço falhou', true);
        }
        else{
            const baseUrl = 'https://cep.awesomeapi.com.br/json/'
            const cep = this.cep.value;
            let endereco = this.endereco.value;
            endereco = endereco.toLowerCase();
            fetch(baseUrl+cep)
            .then(data => data.json())
            .then(data => {
                const enderecoData = data['address'].toLowerCase();
                if(endereco === enderecoData){
                    this.criaMensagemCampo('CEP validado', this.cep);
                    this.criaMensagemCampo('Endereço validado', this.endereco);
                }
                else{
                    this.criaErroCampo('Endereço inválido', this.endereco);
                    this.criaMensagem('Endereço incopativel com a base de dados do CEP', true)
                }
            })
            .catch(e => {
                this.criaErroCampo('CEP inválido', this.cep);
                this.criaMensagem('CEP não existe', true);
            });
        }
    }

    verificaSenhas(){
        const senha1 = this.senha.value;
        const senha2 = this.senha_confirmacao.value;
        if(senha1.length >= 6 && senha1.length <= 12 && senha1 === senha2) return true;
        else{
            this.criaErroCampo('Senha inválida', this.senha);
            return false;
        }
    }

    criaMensagemCampo(msg, campo){ //apenas para testes
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.style.color = 'green';
        div.style.height = '50px';
        div.classList.add('test');
        campo.insertAdjacentElement('afterend', div);
    }

    criaErroCampo(msg, campo){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.style.color = 'red';
        div.style.height = '50px';
        div.classList.add('error');
        campo.insertAdjacentElement('afterend', div);
    }

    criaMensagem(msg='Os dados foram enviados para o BD com sucesso', flagErro=false){
        this.mensagem.style.marginTop = '30px';
        this.mensagem.style.textAlign = 'center';
        this.mensagem.innerHTML = msg;
        if(flagErro){
            this.mensagem.style.backgroundColor = 'red';
            return;
        }
        this.mensagem.style.backgroundColor = 'green';
        return;
    }

}

const valida = new ValidaFormulario();
