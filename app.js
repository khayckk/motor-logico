// Fase 2: O Banco de Dados "Fake" (Array de Objetos)
const bancoDeDados = [
    { id: 1, nome: "X-Salada", categoria: "Lanches", preco: 18.50 },
    { id: 2, nome: "X-Bacon", categoria: "Lanches", preco: 22.00 },
    { id: 3, nome: "Coca-Cola", categoria: "Bebidas", preco: 8.00 },
    { id: 4, nome: "Suco de Laranja", categoria: "Bebidas", preco: 10.00 },
    { id: 5, nome: "Batata Frita", categoria: "Lanches", preco: 15.00 }
];

// Fase 3: A Renderização (Desenhando na tela)
function desenharNaTela(listaDeItens) {
    const vitrine = document.getElementById('vitrine');
    
    // Limpa a tela antes de desenhar novamente
    vitrine.innerHTML = ""; 

    // Varre o array e cria o HTML para cada item
    listaDeItens.forEach(item => {
        vitrine.innerHTML += `
            <div class="card">
                <h3>${item.nome}</h3>
                <p>Categoria: ${item.categoria}</p>
                <p><strong>Preço: R$ ${item.preco.toFixed(2)}</strong></p>
            </div>
        `;
    });
}

// Fase 4: A Mágica dos Filtros
function filtrarItens(categoriaEscolhida) {
    if (categoriaEscolhida === 'Todos') {
        // Se escolheu 'Todos', desenha o banco de dados inteiro
        desenharNaTela(bancoDeDados);
    } else {
        // Usa o .filter() para criar uma nova lista só com a categoria clicada
        const listaFiltrada = bancoDeDados.filter(item => item.categoria === categoriaEscolhida);
        desenharNaTela(listaFiltrada);
    }
}

// Inicialização: Desenha todos os itens assim que a página carrega
desenharNaTela(bancoDeDados);