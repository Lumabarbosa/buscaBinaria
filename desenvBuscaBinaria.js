function buscaBinaria(array, elementoBusc) {
    let inicio = 0
    let fim = array.length - 1

    while (inicio <= fim) {
        const meio = Math.floor((incio + fim)/2)
        
        if (array[meio] === elementoBusc) {
            return meio
        }
        if (array[meio] > elementoBusc) {
            fim = meio - 1
        } else {
            inicio = meio + 1
        }
        }
    return -1
    }

const listNumOrd = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
const numProcu = 20
const indiceEncontrado = buscaBinaria(listNumOrd, numProcu)

if (indiceEncontrado !== -1) {
    console.log(`O elemento ${numProcu} está no índice ${indiceEncontrado}.`)
} else {
    console.log(`O elemento ${numProcu} não está na lista.`)
}
