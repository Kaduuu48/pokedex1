const megaEvolucoes = [
    {
      nome: "Charizard",
      tipo: ["Fogo", "Voador"],
      megaEvolucao: {
        nome: "Mega Charizard X",
        tipo: ["Fogo", "Dragão"],
        habilidade: "Poder Solar"
      },
      imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    },
    {
      nome: "Mewtwo",
      tipo: ["Psíquico"],
      megaEvolucao: {
        nome: "Mega Mewtwo X",
        tipo: ["Psíquico", "Lutador"],
        habilidade: "Insônia"
      },
      imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    },
    {
      nome: "Blaziken",
      tipo: ["Fogo", "Lutador"],
      megaEvolucao: {
        nome: "Mega Blaziken",
        tipo: ["Fogo", "Lutador"],
        habilidade: "Velocidade Extrema"
      },
      imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png"
    }
  ];
  
  function buscarPokemon() {
    const input = document.getElementById('pokemonInput').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ""; // Limpa o resultado anterior
  
    const pokemonEncontrado = megaEvolucoes.find(pokemon => pokemon.nome.toLowerCase() === input);
  
    if (pokemonEncontrado) {
      const { nome, megaEvolucao, imagem } = pokemonEncontrado;
      resultadoDiv.innerHTML = `
        <div class="card">
          <img src="${imagem}" alt="${nome}">
          <h2>${nome}</h2>
          <p><strong>Mega Evolução:</strong> ${megaEvolucao.nome}</p>
          <p><strong>Tipo:</strong> ${megaEvolucao.tipo.join(', ')}</p>
          <p><strong>Habilidade:</strong> ${megaEvolucao.habilidade}</p>
        </div>
      `;
    } else {
      resultadoDiv.innerHTML = "<p>Pokémon não encontrado ou não possui mega-evolução.</p>";
    }
  }