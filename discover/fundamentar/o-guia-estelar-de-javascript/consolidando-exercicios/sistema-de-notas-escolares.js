const nota = 50
let situacao = null

if (nota < 60) {
    situacao = "F"
} else if (nota >= 60 && nota < 70) {
    situacao = "D" 
} else if (nota >= 70 && nota < 80) {
    situacao = "C"
} else if (nota >= 80 && nota < 90) {
    situacao = "B"
} else if (nota > 90) {
    situacao = "A"
}

console.log(situacao)