const elementoLivros = document.querySelector('#livros');
const elementoValorTotal = document.querySelector('#valor_total_livros_disponiveis')

function exibirLivros(listaDeLivros) {
  elementoValorTotal.innerHTML = ''
    elementoLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
      // let disponibilidade = verificarDisponibilidade(livro)

      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
      //lê-se: eu tenho isso ? se sim(true) : se não(false)

        elementoLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    })
}

//substituível por operador ternário 

// function verificarDisponibilidade(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens'
//   } else {
//     return 'livro__imagens indisponivel'
//   }
// }