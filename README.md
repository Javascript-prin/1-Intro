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
## For
~~~js
let names = ['Joe', 'ryan','martha'];
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
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