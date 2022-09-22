const info = (nome, sobrenome) => ({
    Nome: `${nome} ${sobrenome}`,
    Email: `${nome}_${sobrenome}@trybe.com`, 
})

const newEmployees = () => {
    const employees = {
      id1: info('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: info('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: info('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  
  console.log(newEmployees());