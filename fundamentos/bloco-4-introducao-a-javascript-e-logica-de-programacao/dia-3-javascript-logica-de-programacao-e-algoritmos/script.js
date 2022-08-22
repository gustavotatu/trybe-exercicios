let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = ''
let menor = ''
for (index = 0; index < array.length; index += 1) {
    for (index2 = 0; index2 < array.length;){
        if (array[index] != array[index2]) {
            if (array[index].length > array[index2].length) {
                if (index2 == array.length - 1) {
                    maior += array[index]
                    index2 = array.length
                    index = array.length
                } else {
                    index2 += 1
                }
            } else {
                index2 = array.length
            }
        } else {
            index2 += 1
        }
    }
}

for (index = 0; index < array.length; index += 1) {
    for (index2 = 0; index2 < array.length;){
        if (array[index] != array[index2]) {
            if (array[index].length < array[index2].length) {
                if (index2 == array.length - 1) {
                    menor += array[index]
                    index2 = array.length
                    index = array.length
                } else {
                    index2 += 1
                }
            } else {
                index2 = array.length
            }
        } else  if (index2 == array.length - 1) {
            menor += array[index]
            index2 = array.length
            index = array.length
        } else {
            index2 += 1
        }
    }
}

console.log(maior)
console.log(menor)