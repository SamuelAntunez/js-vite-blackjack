import { pedirCarta, valorCarta, crearCartaHTML } from "./";
/**
 * 
 * @param {int} puntosMinimos 
 * @param {HTMLElement} puntosHTML 
 * @param {HTMLarray} divCartasComputadora 
 * @param {Array} deck 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    let puntosComputadora = 0
    if (!puntosMinimos || !deck) throw new Error('Missing Elements')
    
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        crearCartaHTML(carta, divCartasComputadora)
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
