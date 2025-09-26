let listaprodutos = [
      {nome: "computador", fabricante: "dell", valor: 2000},
      {nome: "notebook", fabricante: "acer", valor: 3000},
      {nome: "monitor", fabricante: "LG", valor: 900},
      {nome: "teclado", fabricante: "red dragon", valor: 200},
]

listaprodutos.forEach((produto) => {
    console.log(` o ${produto.nome} da ${produto.fabricante} é  R$ ${produto.valor}`);

    

})

let listaprodutoscaros = listaprodutos.filter(produto => produto.valor > 1000)
console.log(listaprodutoscaros);

