//variable de html
const pokemonList = document.getElementById('pokemon-list');

//funcion para obtener los pokemones
const getPokeName = async() => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const data = await response.json()

        for (let i of data.results) {
            const response = await fetch(i.url)
            const data = await response.json()


            pokemonList.innerHTML += `<div class= "card">
                <img src="${data.sprites.other.home.front_default} ">
            <p>${data.name.toUpperCase()}</p>
            </div>`
        }


    } catch (error) {
        console.log(error);
    }

};
getPokeName()