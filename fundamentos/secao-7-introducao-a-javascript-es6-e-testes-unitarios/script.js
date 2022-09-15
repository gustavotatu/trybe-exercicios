let factorial = (num) => {
    let result = num
    for (let index = num - 1; index > 1; index -= 1) {
        result = result * index;
    }
    return result;
}

console.log(`Esse é o fatorial: ${factorial(4)}`);