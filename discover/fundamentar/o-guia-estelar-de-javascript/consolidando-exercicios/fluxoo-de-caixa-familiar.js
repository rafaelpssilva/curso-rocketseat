let receitas = {
    receitas: [10, 20, 30],
    despesas: [10, 80, 10]
}

function calcularReceitas (array) {
    let totalReceitas = 0
    let totalDespesas = 0

    for (tot in array.receitas) {
        totalReceitas += array.receitas[tot]
    }

    for (tot in array.despesas) {
        totalDespesas += array.despesas[tot]
    }

    console.log(`Saldo total ${totalReceitas - totalDespesas}`)
}

const calcularReceitas2 = array => {
    let totalReceitas = 0
    let totalDespesas = 0

    for (tot in array.receitas) {
        totalReceitas += array.receitas[tot]
    }

    for (tot in array.despesas) {
        totalDespesas += array.despesas[tot]
    }

    console.log(`R$ ${(totalReceitas - totalDespesas).toFixed(2)}`)
}



calcularReceitas(receitas)
calcularReceitas2(receitas)
