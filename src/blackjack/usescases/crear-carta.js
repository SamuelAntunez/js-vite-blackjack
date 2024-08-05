export const crearCartaHTML = (carta, divCartas) =>{
    if(!carta) throw Error('Carta necesaria')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append( imgCarta );
}