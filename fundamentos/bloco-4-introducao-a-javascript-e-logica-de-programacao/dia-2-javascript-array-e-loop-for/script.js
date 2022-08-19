let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let comparador = []
let numeroMaior = [0]

for (let index = 0; index < numbers.length; index += 1) {
    comparador.push(numbers[index])
    if (comparador[comparador.length - 1] > numeroMaior[numeroMaior.length - 1]) {
        numeroMaior.push(comparador[comparador.length - 1])
    }
}

console.log(numeroMaior[numeroMaior.length - 1])