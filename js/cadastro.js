let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmeSenha')

let nome = document.querySelector('#nome');
let labelNome = document.querySelector("#labelNome")
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucesso = document.querySelector('#msgSucesso')

/* Label Nome   keyup -> seria como QUE                 arrows function   */
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 3){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome Inisra no minímo 4 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    }else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style','border-color: green')
        validNome = true
    }    
})
/* Label Do Usuario */
usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuario Insira no minímo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    }else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style','border-color: green')
        validUsuario = true
    }    
})

/* label da Senha */
senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha Insira no minímo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style','border-color: green')
        validSenha = true
    }    
})

/* Validar senha  */
confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    }else{
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style','border-color: green')
        validConfirmSenha = true
    }    
})

/*  */
function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmSenha){
    

    /* --- usar o local storage  --- */
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
        {
            /* variaveis  */
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value
        }
    )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    /* ---------- //////// -----------*/

    msgSucesso.setAttribute('style','display: block')
    msgSucesso.innerHTML = '<strong>Cadastrando Usuário...</strong>'
    msgError.setAttribute('style','display: none')
    msgError.innerHTML = ''


    /* depois de cadastrado ir para pagina de login */
    setTimeout(()=>{
        window.location.href = 'login.html'
    }, 2000)
    /* ---------- //////// -----------*/

    }else{
       msgError.setAttribute('style','display: block')
       msgError.innerHTML = '<strong>Preencher todos os Campos para o Cadastro</strong>'
       msgSucesso.innerHTML = ''
       msgSucesso.setAttribute('style', 'display: none')
    }
}


/* tela com eyes funcionem  */

btn.addEventListener('click', () =>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
});

btnConfirm.addEventListener('click', () =>{
    let inputconfirmSenha = document.querySelector('#confirmSenha')

    if(inputconfirmSenha.getAttribute('type') == 'password'){
        inputconfirmSenha.setAttribute('type', 'text')
    }else{
        inputconfirmSenha.setAttribute('type', 'password')
    }
});
