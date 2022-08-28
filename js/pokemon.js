$(document).ready(function () {
  let contenidorPokemons = $('.contenidor-pokemon');
  function carregarPokemons() {
    let imatgesPokemons = '';
    // 1154 Pokemons disponibles
    for (let i = 1; i <= 1150; i++) {
      imatgesPokemons += `
	      <img class='pokemon-img' data-id='${i}' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg'>
	    `;
    }
    contenidorPokemons.html(imatgesPokemons);
  }
  carregarPokemons();


  //EXERCICI 2-1
  let $pokemons = $('.contenidor-pokemon');
  $pokemons.on('click', '.pokemon-img', escollirPokemon);

  function escollirPokemon() {
    let idPokemon = $(this).data('id');
    $.ajax({
      type: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/' + idPokemon + '/',
      datatype: 'xml',
      success: processarResposta,
      error: processarError
    });

    //EXERCICI 2-2
    function processarResposta(dades, statusText, jqXHR) {
      let moviments = new Array();
      for (let i = 0; i < 3; i++) {
        moviments.push(dades.moves[i].move.name);
      }

      $('#moviments').text(moviments.join(', ') + ', ...');
            $('#moviments').text(moviments.join(', ') + ', ...'); 
      $('#moviments').text(moviments.join(', ') + ', ...');
      $('.pokemon-nom').text(dades.forms[0].name);
      $('#tipus').text(dades.types[0].type.name);
            $('#tipus').text(dades.types[0].type.name);           
      $('#tipus').text(dades.types[0].type.name);
      $('#exp_base').text(dades.base_experience);
            $('#exp_base').text(dades.base_experience); 
      $('#exp_base').text(dades.base_experience);
      $('#height').text(dades.height);
            $('#height').text(dades.height); 
      $('#height').text(dades.height);
      $('#weight').text(dades.weight);
            $('#weight').text(dades.weight); 
      $('#weight').text(dades.weight);
      $('#hp').text(dades.stats[0].base_stat);
            $('#hp').text(dades.stats[0].base_stat); 
      $('#hp').text(dades.stats[0].base_stat);
      $('#attack').text(dades.stats[1].base_stat);
            $('#attack').text(dades.stats[1].base_stat); 
      $('#attack').text(dades.stats[1].base_stat);
      $('#defense').text(dades.stats[2].base_stat);
            $('#defense').text(dades.stats[2].base_stat); 
      $('#defense').text(dades.stats[2].base_stat);

      let urlFront = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + idPokemon + '.png';
      let urlBack = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + idPokemon + '.png';
      $('.pokemon-imatges').children().first().attr('src', urlFront);
      $('.pokemon-imatges').children().last().attr('src', urlBack);
    }

    function processarError(jqXHR, statusText, error) {
      console.log(error, statusText);
    }
  }
});