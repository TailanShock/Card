
let isVerde = false 
function changeCard(event){
    const card = event.currentTarget
    const backgroundImage = isVerde
    ? "url(./src/bg-azul.svg)"
    : "url(./src/bg-verde.svg)"
    isVerde = !isVerde
    card.style.backgroundImage = backgroundImage
}