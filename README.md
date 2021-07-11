# 1 Intro

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
Array
~~~js
['Joe', 'ryan','martha']
~~~
Los arrays pueden ser de strings, numeros....

Object
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

# 5 Comentarios en el código
~~~js
// en una sola línea
/*para varias líneas
fakfkdafñl
kfdaldjfalkdjf
*/
~~~

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

# 7 Condicionales
