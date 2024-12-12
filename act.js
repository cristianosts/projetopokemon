//set Pokemon list 
let pokemonList = [
    {
        'nome': 'Mew',
        'img': 'img/mew.jpg',
        'descricao': ''

    },
    {
        'nome': 'Chicorita',
        'img': 'img/chicorita.jpg',
        'descricao': ''

    },
    {
        'nome': 'Butter',
        'img': 'img/butter.jpg',
        'descricao': ''

    },
    {
        'nome': 'Abra',
        'img': 'img/abra.jpg',
        'descricao': ''

    },
    {
        'nome': 'babao',
        'img': 'img/babao.jpg',
        'descricao': ''

    },
    {
        'nome': 'Bomba',
        'img': 'img/bomba.jpg',
        'descricao': ''

    },
    {
        'nome': 'dino',
        'img': 'img/dino.jpg',
        'descricao': ''

    },
    
    {
        'nome': 'fox',
        'img': 'img/fox.jpg',
        'descricao': ''

    },
    
    {
        'nome': 'raposa',
        'img': 'img/raposa.jpg',
        'descricao': ''

    }
    
]

pokemonList.map((pokemon) => {
    let cardPokemon = document.getElementById('cards')
    cardPokemon.innerHTML += `
    <div class="col-5 col-md-4 col-lg-3">
                <div class="card" >
                    <img src="${pokemon.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${pokemon.nome}</h5>
                     
                      <a href="#" class="btn btn-secondary"><i class="bi bi-eye-fill"></i></a>
                    </div>
                 </div>
            </div> 
    `
    console.log(pokemon.nome)
})