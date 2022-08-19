let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMenor = [numbers[0]]

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < numeroMenor[numeroMenor.length - 1]) {
        numeroMenor.push(numbers[index])
    }

}

console.log(numeroMenor[numeroMenor.length - 1])