let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado  = document.querySelector('#logado')

logado.innerHTML = 'Olá ' + userLogado.nome + ' seja bem-vindo PetShop'



if(localStorage.getItem('token') == null){
    alert("Você precisa estar logado para acessar a pagina ")
    window.location.href = 'index.html'
}




function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'index.html'
}