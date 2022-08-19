const salarioBruto = 3000;
let INSS = null
let IR = null
let salarioLiquido = null

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto / 100 * 8
    salarioLiquido = salarioBruto - INSS
    console.log(salarioLiquido)
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    INSS = salarioBruto / 100 * 9
    salarioLiquido = salarioBruto - INSS
    if (salarioLiquido <= 1903.98) {
        console.log(salarioLiquido)
    } else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
        IR = salarioLiquido / 100 * 7.5 - 142.80
        salarioLiquido = salarioLiquido - IR
        console.log(salarioLiquido)
    }
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    INSS = salarioBruto / 100 * 11
    salarioLiquido = salarioBruto - INSS
    if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
        IR = salarioLiquido / 100 * 7.5 - 142.80
        salarioLiquido = salarioLiquido - IR
        console.log(salarioLiquido)
    } else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
        IR = salarioLiquido / 100 * 15 - 354.80
        salarioLiquido = salarioLiquido - IR
        console.log(salarioLiquido)
    } else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
        IR = salarioLiquido / 100 * 22.5 - 636.13
        salarioLiquido = salarioLiquido - IR
        console.log(salarioLiquido)
    } else if (salarioLiquido > 4664.68) {
        IR = salarioLiquido / 100 * 27.5 - 869.36
        salarioLiquido = salarioLiquido - IR
        console.log(salarioLiquido)
    }
} else if (salarioBruto > 5189.82) {
    INSS = 570.88
    salarioLiquido = salarioLiquido - INSS
    IR = salarioLiquido / 100 * 27.5 - 869.36
    salarioLiquido = salarioLiquido - IR
    console.log(salarioLiquido)
}