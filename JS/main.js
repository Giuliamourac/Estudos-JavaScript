// Fventos no js e tudo aquilo que pode acontecer com um  elemento ex: eventos de mouse, arrastar etc
// Funcoes sao finalidades que sao apenas disparadas por um "gatilho" seja um clique de mouse etc. pode aparecer como:
// function acaotal(algumparametro)

var quadrado = window.document.getElementById('area')
quadrado.addEventListener('click', clicar)
quadrado.addEventListener('mouseenter', entrar)
quadrado.addEventListener('mouseout', sair)
function entrar()
{
    quadrado.innerText = 'clica em mim :)'
}
function clicar()
{
    quadrado.innerText = 'AI!! ISSO DOEU!'
    quadrado.style.background = 'red'
}
function sair()
{
    quadrado.innerText = 'volta aqui...'
    quadrado.style.background = 'blue'
}
