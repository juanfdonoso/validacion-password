# Ejercicio de validación de un password
Validación de un password para que cumpla ciertas condiciones dadas
 
Realizar la validación de un password de modo que cumpla las siguientes condiciones:

	1. El password ingresado debe tener, por lo menos, 8 caracteres
	2. Debe contener, por lo  menos, una letra mayúscula
	3. Debe contener, por lo menos, una letra minúscula
	4. Debe contener, por lo menos, un número
	5. Debe contener, por lo menos, dos de los siguientes caracteres: @ # $ - _ ! ? * % &

## Funcionamiento
1. El ícono del ojito, a la derecha del campo en el que se ingresa el password, muestra y esconde el password ingresado, al dar un click sobre el mismo.  Además de mostrar y ocultar el password, el ícono cambia entre un ojito tachado y un ojito sin tachar. Referirse al ejercicio realizado en clase que muestra y oculta un password realizado el <a href="http://www.dis.uia.mx/profesores/juanfdonoso/spring2020/dci3/clases/enero22.zip">22 de enero</a>.

2. La función que valida el password debe revisar las cinco condiciones antes indicadas y generar un mensaje de error para cada condición que no se cumpla.  Si, por ejemplo, no se ingresa ningún password en el campo para el efecto y se preciona el botón que valida el password, se deben generar 5 mensajes de error, ya que dicho campo vacío no cumpliría ninguna de las condiciones establecidas.

3. Los mensajes de error deben imprimierse como una lista, en el campo &lt;ul&gt; creado para el efecto.  Para ello, crear un arrego para ingresar allí los mensajes de error y luego usar las funciones de createElement y appendChild de Javascript, para generar la lista de errores.  Referirse a la segunda versión del ejercicio de validación de email, que realizamos en la clase del <a href="http://www.dis.uia.mx/profesores/juanfdonoso/spring2020/dci3/clases/enero22.zip">22 de enero</a>.

4. Si el password ingresado cumple con todas las condiciones dadas, se debe imprimir un mensaje que indique que el password ingresado es válido
 
 
