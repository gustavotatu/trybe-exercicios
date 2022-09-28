// escreva sum abaixo
function sum(...numeros) {
    return numeros.reduce((acc, curr) => acc + curr);
}

console.log(sum(4, 5, 6));