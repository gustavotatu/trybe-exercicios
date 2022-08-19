let numbers = []
let resultado = []

for (let index = 1; index < 26; index += 1) {
    numbers.push(index)
}

for (let index = 0; index < numbers.length; index += 1) {
    resultado.push(numbers[index] / 2)
}

console.log(resultado)