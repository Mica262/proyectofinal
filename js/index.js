
//MENSAJE BIENVENIDA//


let nombre = prompt ('Ingresa tu nombre')
let edad = prompt ('Ingresa tu edad')

if(nombre != '' && edad >= 18) {
    alert ('Bienvenido ' + nombre)
} else {
    alert ('Ingresa tu nombre y edad')
}
 

//PRESENTACION//

let Nombre, apellido, Edad, profesión

Nombre = 'Micaela'

apellido = 'Pascual'

Edad = '31'

profesión = 'Cocinera profesional'

console.log (' Mi nombre es ' + Nombre +', mi apellido es ' + apellido + ' tengo ' + Edad + ' y soy ' + profesión) 


// LISTA //

let liMenu = document.getElementsByClassName('menu')
console.log(liMenu)

