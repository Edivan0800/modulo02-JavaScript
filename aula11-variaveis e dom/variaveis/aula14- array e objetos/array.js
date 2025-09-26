let ListaTimes = ["Corinthians", "Palmeiras", "São Paulo"]

// Acessar um item do array
console.log(ListaTimes[0]);
console.log(ListaTimes[1]);
console.log(ListaTimes[2]);

//Adicionar itens em um array
ListaTimes.push("Santos")
ListaTimes.push("Flamengo")
console.log(ListaTimes);

//Verificar tamanho da lista
console.log(ListaTimes.length)

//Adicionar um item na primeira posição
ListaTimes.unshift("fluminense")
ListaTimes.unshift("Flamnego")
console.log(ListaTimes);

//Remover um item
ListaTimes.shift()
console.log(ListaTimes);

//Remover o ultimo elemento do array
ListaTimes.pop()
console.log(ListaTimes);

//Encontrar a posição de um elemento
console.log(ListaTimes.indexOf("Santos"));

let ListaNomes=["Marcos", "Diego", "Huggo", "Kaio++"]

//Removendo itens
ListaNomes.splice(3,1)
console.log(ListaNomes);

//Alterando itens
ListaNomes.splice(1,1, "Robson", "Edivan")
console.log(ListaNomes);

//Adicionando itens
ListaNomes.splice(2,0,"Gabriel", "Diogo")
console.log(ListaNomes);

