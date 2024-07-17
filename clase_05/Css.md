## CSS

Como vimos, HTML nos sirve para dar estructura al contenido. En las primeras épocas de internet las páginas eran así. De hecho, todavía esta online la [primera página web](http://info.cern.ch/hypertext/WWW/TheProject.html). Como ven es bastante aburrida.
Luego se introdujo el concepto de CSS (Cascading Style Sheets); una forma de poder agregar color y estilos en nuestras páginas!

## Reglas CSS

Básicamente una regla CSS está compuesta por un atributo o propiedad y un valor. Seǵun el atributo que usemos y el valor que le pongamos a ese atributo vamos a obtener resultados visuales distintos en nuestro html.

Por ejemplo:

```css
html {
  color: red; /* "Color" es la propiedad y "red" el valor */
  font-size: 12px; /* "font-size" es la propiedad y "12px" el valor */
}
```

En este ejemplo, vemos dos atributos: `color` y `font-size`, el primero permite modificar el color del texto, en este caso está seteado a `red`; el segundo indica el tamaño del texto, en este caso `12px`.
Es importante notar que distintos atributos pueden recibir distintos valores, generalmente los que indican un color reciben un color (`red, blue`, etc...), los que son medidas reciben una medida (`12px, 15px`, etc..), y hay otras propiedades que reciben valor especificos, por ejemplo: la propiedad `border` (que dibuja un borde alrededor de un elemento) recibe tres valores: el color del borde, el ancho de la linea y el tipo de linea (punteada, continua, etc..).

> Hay muchos atributos CSS disponibles, más de los que podemos recordar. Así que no se asusten, con el tiempo van a empezar a memorizar estas propiedades. Pueden ver una lista completa [acá](https://cssreference.io/).

## Formas de dar estilo

Antes de empezar a dar estilos, necesitamos una forma de decirle al browser qué vamos a darles reglas de estilo.
Hay varias formas de lograr esto (más adelante veremos en detalle como funcionan cada una):

- usando el atributo style: esta es la forma primitiva más simple, básicamente le damos reglas a cada tag html.
- usando el tag `<style/>`: Se utiliza este tag en el `<head>` del documento HTML, con esto logramos agrupar todas las reglas que luego queremos que se apliquen a los elementos HTML.
- Usar el tag `<link/>`: Este método nos permite definir las reglas CSS en un documento separado e _importarlo_ a nuestra página (la ventaja que tiene es que podemos importar el mismo CSS a varias páginas).

### Atributo style

Todos los _tags_ HTML pueden recibir el atributo `style`. Este atributo indica las reglas CSS (que veremos más abajo), que se aplicaran **sólo** al elemento que las tiene.

` <h1 style="color:blue;">Esto es un título Azul</h1>`

Pros:

- Fácil de escribir y leer.
- Cómo se aplican a un sólo elemento no hay forma de confundirse y que se aplique la regla a un elemento no deseado.
  Cons:
- La regla aplica a un sólo elemento, si quisieramos que varios elementos tengan la misma regla, deberíamos copypastear!

### \<style/>

El tag _style_, que se escribe en el <head> del documento, nos permite escribir reglas que se aplicaran a uno o varios elementos html. Es importante notar que con esta forma, podremos darle estilo a muchos elementos de una sóla vez, pero sólo a elementos que estén en el mismo documento.

```html
<html>
  <head>
    <style>
      /*<!-- acá van las reglas -->*/
    </style>
  </head>
  <body></body>
</html>
```

Pros:

- Lugar central donde podemos escribir las reglas CSS del documento
- Podemos compartir reglas entre varios elementos iguales
  Cons:
- No podemos compartir las reglas con _otro_ documento HTML.
- Hay que prestar atención a las reglas, y a qué elementos se aplican.

### <link/>

Con el tag `<link>` dentro del `<head>` del documento, vamos a poder _importar_ un archivo css que contenga varias reglas CSS. Funciona similar al tag `<style/>` anterior. Pero ahora tenemos la ventaja que podemos _compartir_ el mismo archivo css con varios documentos HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body></body>
</html>
```

Pros:

- Lugar central donde podemos escribir las reglas CSS del documento
- Podemos compartir reglas entre varios elementos iguales
- Podemos compartir reglas entre varios documentos HTML
  Cons:
- Hay que prestar atención a las reglas, y a qué elementos se aplican.

### Selectores

Para poder aplicar reglas de estilo a los elementos html, necesitamos una forma de saber cómo seleccionar los elementos a los que deseamos aplicar las reglas, para esto sirven los _selectores CSS_.

![alt text](./img/css-declaration-small.png)

Hay varios tipos de selectores, los más básicos son los de tipo, donde indicamos a qué clase de elemntos se van a aplicar las reglas, el ejemplo de arriba usa un selector de tipo. Está diciendo: _aplicarle a todos los elementos de tipo <p\/> la regla de texto color rojo_.

El selector de tipo se puede usar con cualquier tipo de tag: p, div, body, etc. Otra forma de usar selectors poniendole un _nombre_ o _identificador_ a cada elemento HTML. Para esto existe un `atributo` que pueden recibir todos los tags llamados: `id` y `class`.

```html
<div id="selectorId"></div>
<div class="selectorClase"></div>
```

**Ids**: son nombre que sólo pueden aparecer una sólo vez en el documento. Es super especifico y sirve para seleccionar UN solo elemento en particular .

**Clases**: podemos asignarle el nombre de una clase a un grupo de elementos html.

#### Selectores básicos

- **Selector de tipo**: Selecciona todos los elementos que coinciden con el nombre del elemento especificado.
  Sintaxis: `h4{}`
  Ejemplo: h4 se aplicará a cualquier elemento `<h4>`.
- **Selector de clase**:
  Selecciona todos los elementos que tienen el atributo de class especificado.
  Sintaxis: .selectorClase
  Ejemplo: .selectorClase seleccionará cualquier elemento que tenga la clase "selectorClase".
- **Selector de ID**
  Selecciona un elemento basándose en el valor de su atributo id. Solo puede haber un elemento con un determinado ID dentro de un documento.
  Sintaxis: #selectorId
  Ejemplo: #selectorId se aplicará a cualquier elemento que tenga el ID "selectorId".
- **Selector universal**
  Selecciona todos los elementos. Opcionalmente, puede estar restringido a un espacio de nombre específico o a todos los espacios de nombres.
  Sintaxis: _ ns|_ _|_
  Ejemplo: \* se aplicará a todos los elementos del documento.

### Anatomía de las reglas de estilo

Ahora que sabemos como _seleccionar_ los elementos a los que queremos aplicar las reglas podemos escribir qué reglas queremos que se apliquen. Para el ejemplo vamos a usar la etiqueta `<style/>`.

```html
<style>
  body {
  }

  .selectorClase {
  }

  #selectorId {
  }
</style>
```

En el ejemplo de arriba vemos tres selectores. El primero es para el elemento `body`, el segundo para todos los elementos de la clase `selectorClase` y el tercero para el elemento que tenga el id: `selectorId`. Dentro de los `{}` vamos a escribir todas las reglas que queremos que se apliquen a esos elementos.

## Aplicando reglas

Ahora que tenemos los elementos seleccionados podemos empezar a agregar las reglas que habíamos visto antes.

```css
div {
  propiedad: valor;
}
```

## Introducción al modelo de caja (Box Model)

Para poder entender y luego manipular la forma en que los elementos HTML aparecen distribuidos en la página, tenemos que aprender cómo son representados estos en el browser.

![Image](./img/boxModel.png)

En un documento html cada elemento es representado como una _caja rectangular_ y en CSS cada una de estas cajas tiene 4 capas que podemos manipular. Yendo desde afuera hacia adentro, las capas son:

- **margin**: el espacio que separa al elemento de los otros elementos. Si los pensamos como cajas, es el espacio entre las cajas.

- **border**: el "borde de la caja". Podemos hacerlo visible con diferentes grosores, estilos y colores, como ya hicimos varias veces en ejercicios anteriores.

- **padding**: el espacio entre el borde de la caja y su contenido. En la metáfora de la caja, podríamos por ejemplo tener una caja grande con algo chiquito adentro, osea que "habría mucho padding".

- **content**: el contenido de la caja. Por ejemplo el texto en un h1, otros tags anidados, etc, todo lo que esté contenido en el elemento.

### height (alto) y width (ancho)

Podemos decirle al navegador exactamente qué tan _ancho_ y _alto_ queremos que sea nuestro elemento (contenido), esto se usa en divs, imgs y otros elementos basados en la altura (para determinar el tamaño del texto, necesitaremos usar un propiedad de estilo diferente). Los valores de tamaño pueden estar en muchas medidas diferentes, pero el más común es el píxel "px".

```css
div {
  height: 400px;
  width: 400px;
}
```

## Un par de otras propiedades CSS

### background

El background se puede establecer en una variedad de reglas, la más común sería establecer el fondo en un color o una imagen. Ambos se muestran a continuación.

```Css
  .divClass {
    background: red;
  }
  #divId {
    background: url ('');
  }
```

### color

El color se usa sólo para texto. Establecerá el color de tu texto

### font-size

No podemos usar ancho o alto para el texto, pero podemos determinar el tamaño de la fuente utilizada. Puede usar cualquier unidad de tamaño aquí que usaría con una fuente en un procesador de textos (px, em, in, etc.). El más popular es px.

## Hojas de estilo externas y el elemento \ <link>

Hemos explicado cómo usar el elemento html \ `<style>`. Esto está bien si tiene una página web muy pequeña y un estilo mínimo, pero la mayoría de las páginas comenzarían a sentirse abarrotadas muy rápidamente si incluimos todo nuestro CSS en el HTML. Afortunadamente, tenemos una solución para eso, hojas de estilo externas y el elemento \ `<link>`.

Una hoja de estilo externa es simplemente otro archivo con el tipo de archivo .css. Convencionalmente, este archivo se llama algo así como "style.css". Podemos tomar todas las reglas de estilo que escribimos entre las etiquetas \ `<style>` y transferirlas directamente al archivo css. No necesitamos incluir nada más, solo las reglas de estilo.

Una vez que tengamos una hoja de estilo externa creada, necesitaremos asegurarnos de que el navegador lea ese archivo y aplique las reglas a nuestra página. Le decimos al navegador que busque ese archivo utilizando el elemento \ `<link>`. Podemos eliminar las etiquetas \ `<style>` y en su lugar agregar el elemento \ `<link>`. Dentro del elemento de enlace, necesitaremos proporcionar la ubicación y el tipo de archivo que estamos vinculando. Utilizaremos dos banderas, la bandera "rel" y la bandera "href".

El atributo rel solo le dirá al navegador qué tipo de archivo es y cómo procesarlo. En nuestro caso lo configuraremos como "hoja de estilo"

El atributo href le dirá al navegador dónde encontrar el archivo. Si el archivo está en la misma carpeta que nuestro archivo html, podemos configurarlo en: "./styles.css" (esta ruta será relativa)

```HTML
  <link rel = "stylesheet" href = "./ styles.css" />
```

Ahora que tenemos nuestra hoja de estilo externa vinculada a nuestro archivo HTML, deberíamos ver las reglas de estilo que establecemos reflejadas en nuestra página.

## Info adicional

- [MDN official CSS documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)
- [MDN official HTML documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
