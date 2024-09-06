/* Clase-1 React */

// Que Significa React?
// Es Una Libreria O Biblioteca De JS

// Cuando Nacio?
// Mayo Del 2013 En Las Officinas De Facebook

// Ventajas 
// 1-Crear Aplicaciones Web Mas Rapida Gracias A La Tecnica Del Virtual Dom Permite Actualizar Algunas Partes De Mi Aplicacion Sin Recargar Todas Las Paginas.

// 2-Basado En Componentes: Son Conjuntos De Elementos Que Cumplen Una Funsion Especifica (Ejemplo Un Boton).

// 3-Tiene Un Enfoque Decorativo.

// React JS
// Enfoque Decorativo:Estilo De Programacion En Donde Se Enfoca Lo Que Se Quiere Lograr Y No Tanto En El Como.

// JS
// Enfoque Imperativo: Estilo De Programacion En Donde Se Destella Paso A Paso Las Acciones A Realizar Para Un Resultado Especififico.

// Ejemplo De Un Codigo

// Queremos Crear Un Array De Numero Pares Entre El 0 y El 10

// Como Seria En Modo Imperativo 

const array = []

for (let i = 0; i <=10; ++9 ) {
     if( i % 2 ==0){
        array.push(i)
     }
}

console.log(array)

// De modo declarativo

const numeros = [0,1,2,3,4,5,6,7,8,9,10]

const pares= numeros.filter(numero => numero % 2 == 0) 

console.log(pares)

//Expresiones En JS :

// Es Una Combinicacion De Valores, Variables, y Operadores Que Pueden Ser Evaluados Para Producir Un Resultado.

// Ejemplo

let numero = 5

let suma = numero +5

console.log(suma)

// Funciones En JS:

//Es Un Cloque De Instruciones Con Una Tarea Especifica Que Puede Ser Reutilizado Muchas Veces.

//Pueden Ser Declaradas O Expresadas

//Ejemplo De Funcion Declarada

function sumamos(numeroUno, numeroDos) {
   return numeroUno + numeroDos
}

console.log(sumamos(70,10))

//¿Una Funcion Declarada Puede Invocarse Antes De Su Declaracion
// SI, Porque El Motor De JS Las Lee Al Ejecutar El Codigo, Y Esto Se Conoce Como Hoosting

//Funciones Expresadas 

// Son Aquellas Que Se Les Asigna Una Variable

//Funcion Anonima:
const sumaDos = function (numeroUno, numeroDos){
  return numeroUno + numeroDos
}

console.log(sumaDos(80,10))

// funcion flecha :

const sumaTres = (numeroUno, numeroDos) => numeroUno + numeroDos

console.log(sumaTres(90,10))

const sumaCuatro = () => 10+10

// Trabajamos Por Modulos
// Es Una Forma De Dividir Nuestro Trabajo O Codigo En Partes Mas Pequeñas

// Lo Logramos Utilizando Las Palabras "export" e "import"
