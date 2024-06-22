async function carregarUsuarios() {
    const requestOptions = {
        method: "GET"
    };

    const response = await fetch("https://rickandmortyapi.com/api/character", requestOptions)
    const data = await response.json();

    const personagens = data.results

    console.log(personagens)

    let container = document.getElementById('container')

    personagens.map((personagens) => {

        const div = document.createElement('div')

        const nome = document.createElement('p')
        nome.innerText = personagens.name

        const imagem = document.createElement('img')
        imagem.src = personagens.image

        const genero = document.createElement('p')
        genero.innerHTML = personagens.genero

        div.appendChild(nome)
        div.appendChild(genero)
        div.appendChild(imagem)

        container.appendChild(div)
    
    }
 
) }
  
 carregarUsuarios()