function verificaPalindromo(palavra) {
    let index2 = 0
    for (let index = palavra.length - 1; index >= 0; index -= 1) {
        if (index === index2) {
            return true;
        } else if (palavra[index] === palavra[index2]) {
            if (index2 == index + 1) {
                return true;
            } else {
                index2 += 1
            }
        } else {
            return false;
        }
    }
}

console.log(verificaPalindromo('arara'))
