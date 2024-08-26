let max_num = 0
let min_num = 0
let suma_max_min = 0
let division = 0
let rango = 0
let media = 0
input.onButtonPressed(Button.A, function () {
    let sumatoria = 0
let numeros: number[] = []
// Generar 5 números aleatorios entre 0 y 100 y guardarlos en la lista
    for (let index = 0; index < 5; index++) {
        numeros.push(Math.randomRange(0, 100))
    }
    // Asegurarse de que la lista no esté vacía
    if (numeros.length > 0) {
        sumatoria = numeros.reduce((a, b) => a + b, 0)
// Encontrar el número máximo y mínimo
        max_num = numeros[0]
        min_num = numeros[0]
        for (let num of numeros) {
            if (num > max_num) {
                max_num = num
            }
            if (num < min_num) {
                min_num = num
            }
        }
        // Calcular la suma del máximo y el mínimo
        suma_max_min = max_num + min_num
        // Calcular la división entre la sumatoria y la suma del máximo y mínimo
        if (suma_max_min != 0) {
            division = sumatoria / suma_max_min
        } else {
            // Evitar la división por cero
            division = 0
        }
        // Calcular el rango (máximo - mínimo)
        rango = max_num - min_num
        // Calcular la media de los números
        media = sumatoria / numeros.length
        // Mostrar los resultados en la pantalla de la Micro:bit
        basic.showString("S:" + sumatoria)
        basic.pause(1000)
        basic.showString("D:" + Math.round(division * 100) / 100)
        basic.pause(1000)
        basic.showString("R:" + rango)
        basic.pause(1000)
        basic.showString("M:" + Math.round(media * 100) / 100)
    } else {
        basic.showString("Lista vacía")
    }
})
