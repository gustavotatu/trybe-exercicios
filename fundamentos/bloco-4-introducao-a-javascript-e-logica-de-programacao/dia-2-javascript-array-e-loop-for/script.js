let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let crescente = []
let index = 0

for (let index2 = 0; crescente.length <= 6; index2 += 1) {
    if (numbers[index] != numbers[index2] && numbers[index] < numbers[index2]) {
        if (index2 == numbers.length - 1) {
            crescente.push(numbers.splice(index, 1))
            index2 = -1
            index = 0
        }
    } else if (numbers[index] > numbers[index2]) {
        index += 1
        index2 = -1
    } else if (numbers.length == 1) {
        crescente.push(numbers.splice(index, 1))
    }
}    


console.log(crescente)