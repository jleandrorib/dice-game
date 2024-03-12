let random1 = Math.floor(Math.random()*6)+1
let random2 = Math.floor(Math.random()*6)+1

const imagens = document.getElementsByTagName('img')
let imagem1 = `dados-img/dice${random1}.png`
let imagem2 = `dados-img/dice${random2}.png`

imagens[0].setAttribute('src',imagem1)
imagens[1].setAttribute('src',imagem2)

// 🏆

const h1 = document.querySelector('h1')
if (random1 > random2) {
    h1.innerText = "Lucca venceu! 🏆 " 
}
else if (random2 > random1) {
    h1.innerText = "Pietro venceu! 🏆 " 
}
else {
    h1.innerText = "EMPATE!"
}
