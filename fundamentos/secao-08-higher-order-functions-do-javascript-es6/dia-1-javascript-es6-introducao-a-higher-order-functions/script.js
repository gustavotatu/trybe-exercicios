const sorteio = () => {
    const numeroSorteado = Math.floor(Math.random() * 5 + 1);
    return numeroSorteado;
};

const result = (numberBet, callback) => {
    if (numberBet === callback()) {
        return 'Parabéns, você ganhou!';
    }
    return 'Não foi dessa vez';
}

console.log(result(2, sorteio));
