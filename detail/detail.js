import { getAStarter } from '../fetch-utils.js';
import { renderPokeDetail } from '../render-utils.js';

const pokeDetailContainer = document.querySelector('.poke-detail');

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const pokeId = data.get('id');
    const poke = await getAStarter(pokeId);
    const pokeEl = renderPokeDetail(poke);
    pokeDetailContainer.append(pokeEl);
});