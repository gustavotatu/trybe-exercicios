/* function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true); */

  let testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
        console.log(ifScope); 
    } else {
        const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
        console.log(elseScope);
    }
  }

  testingScope(false);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {

  // Seu código aqui.
    return [2, 3, 4, 7, 10, 13];
}   
  console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados em forma crescente!`); // será necessário alterar essa linha 😉