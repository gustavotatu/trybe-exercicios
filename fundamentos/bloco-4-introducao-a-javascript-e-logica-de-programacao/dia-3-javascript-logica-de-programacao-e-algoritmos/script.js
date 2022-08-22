let resultado = null

for (index = 3; index < 50; index += 2) {
    for (index2 = 2; index2 < index;) {
        if (index == 3) {
            index2 = index
        } else if (index % index2 == 0) {
            index2 = index
        } else if (index2 == index - 1) {
            resultado = index
            index2 += 1
        } else {
            index2 += 1
        }
    }
}

console.log(resultado)
