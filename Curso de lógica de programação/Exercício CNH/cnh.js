alert("Bem vindo a site da AutoEscola")

let nome = prompt("Digite o seu nome")
let idade = int(prompt("Digite a sua idade:"))

if (idade >= 18){
    alert("Olá " + nome + " você está apto(a) para tirar a habilitação")
} else {
    alert("Você não possui idade suficiente para tirar a sua habilitação, a idade mínima é de 18 anos.")
}