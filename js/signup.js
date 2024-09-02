
const icon1 = document.getElementById('iconFirst')
const icon2 = document.getElementById('iconSecond')

const passwordFirst = document.getElementById('password-input1')
const senha1 = document.getElementById('senha1')
validPassword = false

const passwordSecond = document.getElementById('password-input2')
const senha2 = document.getElementById('senha2')
validPassword2 = false

const nome = document.getElementById('name-input')
const nomeLabel = document.getElementById('nomeLabel')
validName = false

const phone = document.getElementById('phoneInput');
const phoneLabel = document.getElementById('phoneLabel');
validPhone = false;

const sobrenome = document.getElementById('sobrename-input')
const sobrenomeLabel = document.getElementById('sobrenomeLabel')
validSobrenome = false

const email = document.getElementById('email-input')
const emailLabel = document.getElementById('emailLabel')
validEmail = false

const msgs = document.getElementById('Mensagens')

//Condições para permitir o cadastro

//Nome
nome.addEventListener('keyup', () => {
    if(nome.value.length < 5)
    {
        nomeLabel.setAttribute('style', 'color: red');
        nomeLabel.innerHTML = 'Nome* Tem que ter 4 caracteres!';
        validName = false
    }
else
{
    nomeLabel.setAttribute('style', 'color: blue')
    nomeLabel.innerHTML = 'Nome'
    validName = true
}
})

//Sobrenome
sobrenome.addEventListener('keyup', () => {
    if(sobrenome.value.length < 5)
    {
        sobrenomeLabel.setAttribute('style', 'color: red');
        sobrenomeLabel.innerHTML = 'Nome* Tem que ter 4 caracteres!';
        validName = false
    }
else
{
    sobrenomeLabel.setAttribute('style', 'color: blue')
    sobrenomeLabel.innerHTML = 'Nome'
    validSobrenome = true
}
})

//Telefone
phone.addEventListener('keyup', () => {
    if(phone.value.length < 11)
    {
        phoneLabel.setAttribute('style', 'color: red')
        phoneLabel.innerHTML = 'Telefone* Digite o numero de telefone';
        validPhone = false;
    }
    else
    {
        phoneLabel.setAttribute('style', 'color: blue')
        phoneLabel.innerHTML = 'Telefone'
        validPhone = true;
    }
})

//E-mail
email.addEventListener('keyup', () => {
    if(email.value.length < 5)
    {
        emailLabel.setAttribute('style', 'color: red');
        emailLabel.innerHTML = 'E-mail* Tem que ter 4 caracteres!';
        validEmail = false
    }
else
{
    emailLabel.setAttribute('style', 'color: blue')
    emailLabel.innerHTML = 'E-mail'
    validEmail = true
}
})

//Senha 1
passwordFirst.addEventListener('keyup', () => {
    if(passwordFirst.value.length <= 7)
    {
        senha1.setAttribute('style', 'color: red');
        senha1.innerHTML = 'Senha* Tem que ter 8 caracteres!';
        validPassword = false
    }
else
{
    senha1.setAttribute('style', 'color: blue')
    senha1.innerHTML = 'Senha'
    validPassword = true
}
})

//Senha 2
passwordSecond.addEventListener('keyup', () => {
    if(passwordSecond.value != passwordFirst.value)
    {
        senha2.setAttribute('style', 'color: red');
        senha2.innerHTML = 'Confirmar Senha* As senhas não são iguais!';
        validPassword2 = false
    }
else
{
    senha2.setAttribute('style', 'color: blue')
    senha2.innerHTML = 'Confirmar Senha'
    validPassword2 = true
}
})




//Funções de Mostrar/Esconder a Senha
function showHidePass1(){
    if(passwordFirst.type === 'password'){
        passwordFirst.setAttribute('type', 'text');
        icon1.classList.replace('fa-eye', 'fa-eye-slash')
    }
    else{
        passwordFirst.setAttribute('type', 'password');
        icon1.classList.replace('fa-eye-slash', 'fa-eye')
    }
}

function showHidePass2(){
    if(passwordSecond.type === 'password'){
        passwordSecond.setAttribute('type', 'text');
        icon2.classList.replace('fa-eye', 'fa-eye-slash')
    }
    else{
        passwordSecond.setAttribute('type', 'password');
        icon2.classList.replace('fa-eye-slash', 'fa-eye')
    }
}