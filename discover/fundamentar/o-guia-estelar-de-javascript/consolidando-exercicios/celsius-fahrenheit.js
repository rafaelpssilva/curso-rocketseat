let graus = '100C'

function grausOufahrenheit (graus) {
    if (graus.includes('F')) {
        if (graus.length === 2) {
            graus = graus.slice(0,1)
            graus = (graus - 32) * 5 / 9
            console.log(graus)
        } else if (graus.length > 3) {
            graus = graus.slice(0,2)
            graus = (graus - 32) * 5 / 9
            console.log(graus)
        }

        
    }
    else if (graus.includes('C')) {
        if (graus.length === 2) {
            graus = graus.slice(0,1)
            graus = graus * 9/5 + 32
            console.log(graus)
        } else if (graus.length > 3) {
            graus = graus.slice(0,2)
            graus = graus * 9/5 + 32
            console.log(graus)
        }
    }
}

grausOufahrenheit(graus)

// let frase = 'No dia 30 de março algo acontecerá. Preparem-se!';
// console.log(frase.slice(7,9));

// let frase1 = '20f'
// console.log(frase1.slice(0, 2))

