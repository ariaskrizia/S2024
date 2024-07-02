function getPokemones() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
        method: 'GET',
        success: function(data) {
            const pokemonesList = data.results;
            let cadenaOption = '<option>Pokemones Listado</option>';
            pokemonesList.map((data, index) => {
                console.log(data, index);
                cadenaOption += '<option value="' + data.url + '">' + data.name + '</option>';
            });
            $("#listPokemones").html(cadenaOption);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}

function getDataPokemon(pokemonUrl) {
    if (pokemonUrl !== 'Pokemones Listado') {
        $.ajax({
            url: pokemonUrl,
            method: 'GET',
            success: function(data) {
                console.log(data);
                // Actualizar la foto del Pokémon
                const fotoPokemon = document.getElementById("fotoPokemon");
                fotoPokemon.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    }
}