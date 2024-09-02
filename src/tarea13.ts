enum Color {
    Red = 'Rojo',
    Green = 'Verde',
    Blue = 'Azul'
}

function getColor(color: Color) : string{
    return `El color seleccionado es ${color}`
}

console.log(getColor(Color.Red));