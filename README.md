# 1 Intro

1. [Hello world](#schema1)
2. [Creamos los archivos `index.html` y `app.js`](#schema2)
3. [Tipo de datos](#schema3)
4. [Variables y constantes](#schema4)
5. [Comentarios en el código](#schema5)
6. [Operadores](#schema6)
7. [Condicionales](#schema7)
8. [Loops/ bucles](#schema8)
9. [Funciones](#schema9)
10. [Introducción de datos por pantalla](#schema10)
11. [Enlaces](#schema11)

## ¿Por qué es tan bueno JavaScript?
JavaScript tiene una serie de ventajas que lo convierten en una mejor opción que sus competidores, especialmente en ciertos casos de uso. Solo algunos de los beneficios de usar JavaScript incluyen:

- No necesitas un compilador porque los navegadores web lo interpretan con HTML;
- Es más fácil de aprender que otros lenguajes de programación;
- Los errores son más fáciles de detectar y, por lo tanto, corregir;
- Se puede asignar a ciertos elementos de la página web o eventos específicos, como clics o apuntar con el ratón (mouseover);
- JS funciona en múltiples navegadores, plataformas, etc.
- Puedes usar JavaScript para validar las entradas y reducir la necesidad de verificaciones manuales de datos;
- Hace que los sitios web sean más interactivos y llama la atención de los visitantes;
- Es más rápido y ligero que otros lenguajes de programación.-

¿Cuáles son las debilidades?
Hay debilidades en cada lenguaje de programación que puedas imaginar. Parte del problema es que cuando un lenguaje de programación se vuelve tan popular como JavaScript, hay un incentivo adicional para que hackers, estafadores y otros terceros malintencionados intenten encontrar vacíos y fallas de seguridad. Algunas debilidades incluyen:

- Vulnerable a amenazas;
- Puede ser utilizado para ejecutar código malicioso en la computadora de un usuario;
- No siempre es compatible con diferentes navegadores y dispositivos;
- Los fragmentos de código de JS son bastante grandes;
- Se puede mostrar de manera diferente en diferentes dispositivos y generar inconsistencias.


<hr>

<a name="schema1"></a>

# 1 Hello world

Por la consola, La activamos en la página web, con F12.
Imprimir en la consola `Hello world`
~~~js
console.log("Hello world");
~~~
Imprimir en el documento
~~~js
document.write("Hello world");
~~~
<hr>

<a name="schema2"></a>

# 2 Creamos los archivos `index.html` y `app.js`
Ahora vamos a crea una página web sencilla.

- Dentro de `index.html` creamos la página.
- Dentro de `app.js` escribimos en el documento un `h1`.
~~~js
document.write("<h1>Hello World</h1>");
~~~
- Dentro de `index.html` hacemos la unión del archivo `app.js` con `index.html`
~~~html
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
~~~
<hr>

<a name="schema3"></a>

# 3 Tipo de datos
String = "Hello world" o 'Hello'

Números enteros, decimales, negativos
~~~js
// numbers
10000
-2.3
~~~
Boolean
~~~js
true 
false
~~~
## Array
~~~js
let names = ['Joe', 'ryan','martha']
~~~
Los arrays pueden ser de strings, numeros....
A los valores de cada array accedes por `[]` y dentro de los corchetes el índice que quieres acdeder.

~~~js
names.length; // tamaño del array
~~~

## Object
{
    "clave":valor
}
~~~js

// object

{
    "username":'Ryan',
    "score":70.4,
    "hours":14,
    "profesional": true
}
~~~

<hr>

<a name="schema4"></a>

# 4 Variables y constantes
Las variables pueden cambiar a lo largo de la ejecución, pero las constantes NO
~~~js
let username = "john";
const PI = 3.1415;
~~~
Las variables no pueden empezar por números y caracteres especiales.
Sólo se pueden empezar por `$` o `_`
Hay que tener algo de lógica para nombrar a las varibles con el valor que van a tener.

Tienen una convención, camelCase
~~~js
nombreDePersona = "Paco";
~~~

<hr>

<a name="schema5"></a>

# 5 Comentarios en el código
~~~js
// en una sola línea
/*para varias líneas
fakfkdafñl
kfdaldjfalkdjf
*/
~~~
<hr>

<a name="schema6"></a>

# 6 Operadores

Éstos son algunos de los operadores más comunes en JavaScript:

Asignación: = como en a = 2.

Matemáticas: + (adición), - (sustracción), * (multiplicación) y / (división), como en a * 3.

Asignación Compuesta : + =, - =, * =, y / = son operadores compuestos que combinan una operación matemática con asignación, como en a + = 2 (igual que a = a + 2).

Incremento / Decremento: ++ (incremento), - (decremento), como en a ++ (similar a a = a + 1).

Acceso a la propiedad del objeto:
Como en console.log ().
Los objetos son valores que contienen otros valores en determinadas ubicaciones denominadas propiedades. obj.a significa un valor de objeto llamado obj con una propiedad del nombre a. Las propiedades se pueden acceder alternativamente como obj ["a"].

Igualdad: == (suelto-igual), === (estricto-igual),! = (Suelto no-igual),! == (estricto no igual), como en a == b.

Comparación: <(menor que),> (mayor que), <= (menor que o suelto-igual),> = (mayor que o suelto-igual), como en a <= b.

Lógico: && (y), || (O), como en a || b que selecciona a o b. Estos operadores se usan para expresar condicionales compuestos (ver "Condicionales"), como si a o b es verdadero.

`+ - * /` operadores lógicos
~~~js
result = numberOne + numberTwo;
~~~

También se pueden unir strings, concatenar
~~~js
completeName = username + lastName
~~~

También se pueden comparar con `< > == !=` esto devuelve true o false dependiendo si la comparación es verdad o mentira.

<hr>

<a name="schema7"></a>

# 7 Condicionales
 ## IF
~~~js
let passwordDB = 'pepe123';
let input = "pepe123";
let result = input == passwordDB;

console.log(result);
if (result == true){
    console.log("Login correcto")
} else {
    console.log("Login incorrecto")
}

~~~
## IF else if
~~~js
let score = 70;
if (score > 30){
    console.log("You need to practice more");
}else if (score > 15){
    console.log("You are getting better")
}
else {
    console.log("You need to follow this tutorial");
}
~~~

## Switch
~~~js
let typeCard = "Debid Card";

switch(typeCard){
    case 'Debid Card':
        console.log('This is a debid card');
        break;
    case 'Credit Card':
        console.log('This is a credit card');
        break;
     default:
        console.log("No card")
}
~~~
<hr>

<a name="schema8"></a>

# 8 Loops/ bucles
## While
~~~js
let count = 5;
while(count >= 0 ){
    console.log(count);
    count--;
}
~~~
## do ... while
~~~js
while (numOfCustomers > 0) {
    console.log( "How may I help you?" );

    // help the customer...

    numOfCustomers = numOfCustomers - 1;
}

// versus:

do {
    console.log( "How may I help you?" );

    // help the customer...

    numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

~~~
La única diferencia práctica entre estos bucles es si el condicional se prueba antes de la primera iteración (while) o después de la primera iteración (do..while).


## For
~~~js
let names = ['Joe', 'ryan','martha'];
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
~~~
## for...in
~~~js
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(i in dias) {
  console.log(dias[i]);
}
~~~
<hr>

<a name="schema9"></a>

# 9 Funciones

Sin parámetros
~~~js
function greeting(){
    console.log("Hello");
}

greeting();

~~~
Con parámetrod
~~~js
function greeting(name){
    console.log("Hello " + name);
}

greeting(names[2]);

~~~

<hr>

<a name="schema10"></a>

# 10 Introducción de datos por pantalla
~~~js
age = prompt( "Please tell me your age:" );

console.log( age );
~~~

<hr>

<a name="schema11"></a>

# 11 Enlaces


- https://daniel-morales.gitbook.io/javascript-avanzado-en-espanol/chapter1/1-capitulo-1-en-la-programacion/110-funciones
- https://www.hostinger.es/tutoriales/que-es-javascript-introduccion-basica/
- https://www.youtube.com/watch?v=RqQ1d1qEWlE