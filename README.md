# Ejercicio de validación de un password
Validación de un password para que cumpla ciertas condiciones dadas
 
Realizar la validación de un password de modo que cumpla las siguientes condiciones:

	1. El password ingresado debe tener, por lo menos, 8 caracteres
	2. Debe contener, por lo  menos, una letra mayúscula
	3. Debe contener, por lo menos, una letra minúscula
	4. Debe contener, por lo menos, un número
	5. Debe contener, por lo menos, dos de los siguientes caracteres: @ # $ - _ ! ? * % &

## Funcionamiento
1. El ícono del ojito, a la derecha del campo en el que se ingresa el password, muestra y esconde el password ingresado, al dar un click sobre el mismo.  Además de mostrar y ocultar el password, el ícono cambia entre un ojito tachado y un ojito sin tachar. Referirse al ejercicio de clase que muestra y oculta un password realizado el <a href="http://www.dis.uia.mx/profesores/juanfdonoso/spring2020/dci3/clases/enero22.zip">22 de enero</a>.

2. La función que valida el password debe revisar las cinco condiciones antes indicadas y generar un mensaje de error para cada condición que no se cumpla.  Si, por ejemplo, no se ingresa ningún password en el campo para el efecto y se presiona el botón que valida el password, se deben generar 5 mensajes de error, ya que dicho campo vacío no cumpliría ninguna de las condiciones establecidas.

3. Los mensajes de error deben imprimirse como una lista, en el campo &lt;ul&gt; creado para el efecto en la página <i>index.html</i>.  Para ello, crear un arrego para ingresar allí los mensajes de error, a través del método <i>push</i> de los arreglos, y luego usar las funciones de <i>createElement</i> y <i>appendChild</i> de Javascript, para generar la lista de errores.  Referirse a la segunda versión del ejercicio de validación de email, que realizamos en la clase del <a href="http://www.dis.uia.mx/profesores/juanfdonoso/spring2020/dci3/clases/enero22.zip">22 de enero</a>.

4. Si el password ingresado cumple con todas las condiciones dadas, se debe imprimir un mensaje que indique que el password ingresado es válido

5. Para los mensajes de error, usar la clase <i>.passwordCorrecto</i> definida en las hojas de estilo.  Para los errores, usar la clase <i>error</i> de los estilos.  Estas clases hay que añadir al tag &lt;ul&gt; que sirve para desplegar los mensajes de validación. Investigar cómo se añaden o se quitan estilos a un cierto elemento de HTML a través de Javascript.  Esta información se la puede revisar en el siguiente link del sito de <b>w3schools.com</b>: <a href="https://www.w3schools.com/jsref/prop_element_classlist.asp" target="_blank">www.w3schools.com/jsref/prop_element_classlist.asp</a>.

6. Para que todo funcione, es necesario, por lo tanto, escribir el código de las funciones del archivo <i>scripts.js</i> y llamar a dichas funciones en los tags adecuados de la página <i>index.html</i>

7. La tarea debe subirse al servidor de diseño, a su carpeta personal, usando un programa ftp client como <b>cyberduck</b>. Incluir, por favor, todo los archivos que se necesitan para esta tarea (estilos, scripts, etc.). Crear un folder que diga <b>tarea 1</b> en su folder personal del servidor.

##Calificación
<table border="1">
	<tr><td>Mostrar / Ocultar passwore</td><td> 1 pt </td></tr>
	<tr><td>Cambiar el ícono del ojito</td><td> 2 pts</td></tr>
	<tr><td>Mostrar mensajes de validación como una lista</td><td> 4 pts </td></tr>
	<tr><td>Colocar los estilos en los mensajes de validación</td><td> 3 pts </td></tr>
</table>
	
 
 
