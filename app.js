// import functions and grab DOM elements
import { getAllPokemans } from './fetch-utils.js';
import { renderPokeCard } from './render-utils.js';

const pokeListContainer = document.querySelector('.pokemon-tile');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
window.addEventListener('load', async () => {
    const pokes = await getAllPokemans();
    for (let poke of pokes) {
        const pokeEl = renderPokeCard(poke);
        pokeListContainer.append(pokeEl);
    }
});