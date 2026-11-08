# Banco de Prompts UNITEC — versión centralizada

Ambos prompts están integrados en `index.html`. Los botones «ABRIR PROMPT» despliegan el contenido en la misma página y cada prompt tiene su propio botón de copiado.

## Archivos
- `index.html`: página principal y contenido íntegro de ambos prompts.
- `styles.css`: diseño institucional adaptable.
- `scripts.js`: desplegables y copiado.
- `logo-unitec.png`: logotipo proporcionado.

## Actualizar GitHub
1. Abre el repositorio y usa **Add file → Upload files**.
2. Sube estos cuatro archivos a la raíz: `index.html`, `styles.css`, `scripts.js`, `logo-unitec.png`.
3. Confirma el cambio con **Commit changes**.
4. Elimina los archivos anteriores `prompt-01.html` y `prompt-02.html` para que no queden páginas antiguas independientes.
5. Conserva la configuración actual de GitHub Pages (`main` / root).

La copia requiere pulsar el botón. Si el navegador bloquea el acceso al portapapeles, se selecciona el texto completo para copiarlo manualmente.

## Versión 3
- Cabecera: logo y título institucional juntos.
- Dos columnas independientes en pantallas amplias; una columna en pantallas pequeñas.
- Botones de apertura en verde esmeralda #15A047 y de copiado en magenta #D6006A.

## Versión 4
- Botones de apertura identificados como «ABRIR PROMPT 01» y «ABRIR PROMPT 02».
- La confirmación de copiado es exclusiva: al copiar el segundo prompt, el primer botón vuelve a «COPIAR PROMPT COMPLETO», y viceversa.

## Versión 5
- El botón de desplegable activo cambia a un verde más oscuro.
- El botón de copiado que acaba de utilizarse cambia a un magenta más oscuro; al copiar el otro prompt, el estado oscuro se traslada al segundo botón.

## Versión 6
- Las tarjetas de Prompt 01 y Prompt 02 mantienen la misma altura en pantallas de dos columnas; los botones de apertura quedan alineados en la parte inferior.

## Versión 7
- Se corrigió el comportamiento del grid: ambas tarjetas conservan la misma altura inicial, pero al desplegar un prompt solo crece su propia tarjeta. El botón de la otra tarjeta permanece en su posición.

## Versión 8
- Las tarjetas cerradas tienen una altura uniforme en escritorio (218 px).
- Al abrir un prompt, solo su tarjeta pasa a altura automática; la tarjeta vecina no se estira ni desplaza su botón.
- En móvil, las tarjetas conservan altura automática para adaptarse al ancho disponible.

## Versión 9
- Las tarjetas mantienen el mismo tamaño fijo y los botones de apertura quedan alineados.
- Los paneles de los prompts ahora se despliegan como capas superpuestas debajo de cada tarjeta, sin modificar el flujo del documento ni mover ningún otro elemento.
- Al abrir ambos prompts, sus paneles y botones de copiado comienzan en la misma altura.

## Versión 10
- En escritorio, al desplegar uno o ambos prompts, el aviso amarillo y el pie de página se desplazan hacia abajo para dejar espacio a los paneles.
- Las tarjetas, los botones verdes y la posición de los demás elementos superiores permanecen fijos; los paneles siguen superpuestos debajo de cada tarjeta.
- En pantallas pequeñas, los paneles se integran al flujo vertical para evitar que se superpongan entre sí.

## Versión 11 — adaptación móvil
- Se conserva la presentación de las dos tarjetas en dos columnas también en móviles, con tipografía y botones compactos.
- Al abrir cualquiera de los prompts en móvil, el panel se extiende a lo ancho de las dos columnas para que el texto largo sea legible y tenga desplazamiento interno.
- El otro botón permanece en su posición; el aviso amarillo y el pie se desplazan hacia abajo para dejar espacio al panel abierto.
- Se mantienen el diseño de escritorio, los colores y el comportamiento de copiado.
