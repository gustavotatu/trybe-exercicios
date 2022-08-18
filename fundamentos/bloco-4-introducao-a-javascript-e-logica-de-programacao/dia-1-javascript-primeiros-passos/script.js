const valorCusto = 4
const valorVenda = 10
const milUnidadesProduzidas = valorCusto * 1000
const milUnidadesVendidas = valorVenda * 1000
const impostoSobreCusto = milUnidadesProduzidas / 100 * 20
const valorCustoTotal = milUnidadesProduzidas + impostoSobreCusto
const lucro = milUnidadesVendidas - valorCustoTotal
 
if (valorCusto != 0 || valorVenda != 0) {
    console.log(lucro)
} else {
    console.log("[ERRO] Valor(es) de entrada inválido(s)")
}
