const motor =[]

function cadastrarPeca(novaPeca) {
  // Corrigido: '||' garante que o erro ocorra se FALTAR o nome OU se FALTAR o preço
  if (!novaPeca.nome && !novaPeca.preco) {
    return console.log("Erro: Nome e preço devem ser obrigatórios");
  }
  
  // Adiciona a peça ao array
  motor.push(novaPeca); 
}

let controle = true;

while (controle) {
  // Corrigido: length é uma propriedade, não uma função. Não usa ()
  let id = motor.length; 

  console.log("Exibindo: " + id);

  // Se o array tiver itens (tamanho maior que 0)
  if (motor.length >= 0) {
    // Altera a variável para fechar o loop na próxima verificação
    controle = false; 
  }
}
