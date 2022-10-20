input.onButtonPressed(Button.A, function () {
    nombre_de_gens += 1
})
input.onButtonPressed(Button.AB, function () {
    nombre_de_gens = 0
})
input.onButtonPressed(Button.B, function () {
    nombre_de_gens += -1
})
let nombre_de_gens = 0
nombre_de_gens = 0
basic.forever(function () {
    basic.showNumber(nombre_de_gens)
    if (nombre_de_gens < 0) {
        nombre_de_gens = 0
    }
    if (nombre_de_gens >= 10) {
        basic.showString("limit reached")
        basic.showNumber(nombre_de_gens)
    }
})
