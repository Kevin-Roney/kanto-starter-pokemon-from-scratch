export function renderPokeCard(pokemon) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('pokemon-tile');

    p.textContent = pokemon.name;
    img.src = `${pokemon.images}`;
    a.href = `./detail/?id=${pokemon.id}`; // link to the dog's detail page here
    
    div.append(p, img);

    a.append(div);

    return a;
}
export function renderPokeDetail(pokemon) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('h2');
    const numberEl = document.createElement('p');
    const typeEl = document.createElement('p');

    div.classList.add('poke-detail');
    nameEl.textContent = pokemon.name;
    nameEl.classList.add('name');
    descriptionEl.textContent = pokemon.description;
    descriptionEl.classList.add('description');
    numberEl.textContent = `Kanto Pokemon number: ${pokemon.number}`;    
    numberEl.classList.add('number');
    typeEl.textContent = pokemon.type;
    typeEl.classList.add('type');
    img.src = `${pokemon.images}`;
    
    div.append(nameEl, img, numberEl, typeEl, descriptionEl);
    return div;
}