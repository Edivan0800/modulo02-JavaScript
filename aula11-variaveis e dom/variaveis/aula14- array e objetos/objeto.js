let produto = {
    nome: "computador",
    fabricante: "positivo",
    preco: 2000,
    processador: "i1-2100"
};

console.log(produto.nome);
console.log(produto["nome"]);

// adicionar um atributo no objeto
produto.armazenamento = "256gb"
produto['memoria-ram'] = "8gb"
console.log(produto);

// remover elemento
delete produto.armazenamento
console.log(produto);




