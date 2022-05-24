const {sumar,restar} = require("calculadora")
const {argv} = require ("process")

const operacion = argv[2]
const n1 = argv[3]
const n2 = argv[4]
let resultado = 0

switch (operacion){
    case "sumar":
        resultado = sumar(n1,n2)
        break
    case "restar":
        resultado = restar(n1,n2)
        break
}

console.log(operacion);