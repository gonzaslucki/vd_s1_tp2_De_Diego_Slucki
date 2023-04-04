# Trabajo práctico 2: Explicar con datos

Autores: Gonzalo Dan Slucki y Valentina De Diego

Este repositorio contiene cuatro visualizaciones de datos basadas en un conjunto de datos de misiones espaciales. El objetivo de estas visualizaciones es presentar de manera clara y concisa la información relevante contenida en el conjunto de datos.

## Conjunto de datos
El conjunto de datos utilizado a lo largo del proyecto se encuentra en los archivos llamados "astronautas.csv" El archivo contiene información sobre distintos astronautas y las misiones en las que participaron entre el 1 de enero de 2010 y el 30 de diciembre de 2019. Los datos incluyen nombre, género, nacionalidad, edad, año de la misión, duración de la misión, entre otros campos.

Un ejemplo de entrada del conjunto de datos es el siguiente: 
| nombre | genero | anio_nacimiento | nacionalidad | status | ocupacion | anio_mision | edad_mision | mision_hs | eva_mision_hs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|Aleksandr Kaleri | masculino | 1956 | U.S.S.R/Rusia | civil | ingeniero aeroespacial | 2010 | 54 | 3824 | 0 |


## Visualizaciones 
En el proyecto se presentan las siguientes cuatro visualizaciones:

1. **El boom aeroespacial**: En esta visualización se presenta el promedio de duración de las misiones a través de los años, dividido por género. En este gráfico se decidió utilizar como marca la línea ya que permite reflejar la evolución en el tiempo; y como canal la posición. Se le suma a la línea el color para diferenciar el promedio de horas por género, un atributo categórico. En cuanto al diseño, se decicidió poner los ejes x e y para ayudar al entendimiento, pero no poner la grilla ya que generaba mucha contaminación visual. Lógicamente, para poder calcular los promedios de horas de misión hubo que transformar los datos con Plot.binX que agrupa por año las misiones, y luego utilizando el comando "mean" para calcular la media en el eje y. Para dividir por genero, utilizamos el eje z y la propiedad stroke.

2. **Cada vez menos astronautas**: En esta visualización se puede ver como fue disminuyendo la cantidad de astronautas en misiones espaciales a través del tiempo. La marca elegida fueron las barras ya que representan gráficamente la diferencia en cantidad de astronautas a través de los años. El canal en este caso es el área que ocupa la barra. Además, a través del color de las barras, se puede ver la diferencia entre la cantidad de astronautas por género. Desde el punto de vista del diseño, se muestran los años en el eje x y ciertos números de referencia en el eje y para ver la cantidad de astronautas, acompañado por líneas horizontales que ayudan a la referencia. Nos hubiese gustado ubicar dentro de las barras la cantidad de astronautas del período pero no pudimos lograrlo. Para llevar a cabo el gráfico fue necesario agrupar los datos por año y contarlos con el comando "count".

3. **El tiempo vuela en el espacio**: A través de esta visualización se muestra la relación entre el año de la misión y el año de nacimiento del astronauta. A esto se le agrega, por medio del tamaño de los círculos y el color de los mismos, las horas de la misión y la actividad fuera de la nave de la misión, respectivamente. Es, a través de esta compleja visualización, que se puede responder a la pregunta de ¿cómo es la exigencia física de las misiones? y ¿esta exigencia física fue cambiando a lo largo del tiempo? Con el objetivo de responder estas preguntas, elegimos como marca los dots. La elección se debe a que haciendo uso de esta forma se puede caracterizar las principales misiones mostrando la relación entre la edad del astronauta (teniendo en cuenta el año de la misión y el año de nacimiento), y mostrar de forma muy intuitiva la duración de la misión y la actividad fuera de la nave. A nivel diseño, se decidió utilizar el tamaño del círculo para mostrar la duración de la misión y la escala de color para mostrar la actividad fuera de la nave. Nos pareció que el rojo es un color asociado al cansancio por lo que a más actividad fuera de la nave, más rojo el círculo.

4. **Se requiere experiencia**: Esta simple visualización demuestra la experiencia requerida para participar en misiones espaciales en los principales países. Las marcas seleccionadas en este gráfico fueron los puntos y las líneas horizontales, además de unas pequeñas líneas verticales para marcar las medias. Los canales son tanto la posición horizontal, que marca la edad de un astronauta de cierto país. Para resaltar la media de edad en cada uno de los países, se utilizaron lineas rojas verticales. El rojo nos permite llamar la atención y poner el centro de atención visual allí. Para presentar los datos, se transformó el conjunto de datos manteniendo únicamente aquellas entradas correspondientes a países con al menos 3 misiones.

## Utilización del repositorio
Por más de que se puede clonar el repositorio, por el funcionamiento de Github Pages modificamos las urls de los botones y las fotos, por lo que al clonarlo y utilizarlo de manera local puede encontrarse un mal funcionamiento de estos elementos mencionados. Recomendamos descagar el zip para una versión que funciona correctamente a nivel local o modificar las direcciones de los botones en el index de la home y la imagen del archivo de estilos de la home. 

