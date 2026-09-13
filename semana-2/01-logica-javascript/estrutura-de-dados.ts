// algorítmo para adicionar item ao início de um array

const arr = [1, 2, 3, 4, 5];

for (let i = arr.length; i >= 0; i--) {
  //@ts-ignore
  arr[i] = arr[i - 1];
} // copia o valor do índice [i - 1] para o novo índice (arr[i]) abrindo espaço empurrando todos para a direita.
arr[0] = 10;
console.log(arr);

const arr2 = [1, 2, 3, 4, 5];

// algorítimo para remover item do início

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
  //@ts-ignore
  arr2[i] = arr2[i + 1];
  //traduzindo: arr2[i], receba o conteúdo do arr2[i + 1] / Vaga 1, receba o conteúdo da vaga 2 (1 + 1)
  console.log(arr2);
}
arr2.length = arr2.length - 1; // remove o undefined
console.log(arr2);
