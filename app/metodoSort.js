let OrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco')

OrdenarPorPreco.addEventListener('click', livrosPorPreco)

function livrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)

    exibirLivros(livrosOrdenados)
}