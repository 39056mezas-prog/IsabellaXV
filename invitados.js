/* =========================================================================
   LISTA DE INVITADOS Y SUS PASES
   =========================================================================

   Cada familia lleva su propio enlace. Al abrirlo ve su nombre en la
   invitacion y solo puede confirmar hasta el numero de pases que le diste.

   Cada renglon tiene tres datos:

     c : el codigo que va en el enlace. Sin acentos, sin espacios, sin enies.
         Ejemplo: "garza"  ->  el enlace termina en  ?i=garza
     n : el nombre que vera la familia. Aqui si van acentos.
     p : cuantos pases le das a esa familia (un numero).
     t : OPCIONAL. Su WhatsApp con clave de pais, solo numeros.
         Ejemplo: "526121234567". Sirve para mandarle la invitacion
         con un toque desde la pagina pases.html. Si no lo tienes, borra
         esa parte o dejala como "".

   Para agregar una familia, copia un renglon completo y cambia los datos.
   Cada renglon termina con coma. Cuida que las comillas queden cerradas.

   Para ver todos los enlaces ya hechos, abre pases.html en el navegador.

   Si dejas esta lista vacia, la invitacion funciona como siempre: el
   invitado escribe su nombre y elige cuantas personas vienen.
   ========================================================================= */

window.INVITADOS = [

  { c: "aguilar",  n: "Familia Aguilar Pérez",  p: 5, t: "" },
  { c: "garza",    n: "Familia Garza Rendón",   p: 4, t: "" },
  { c: "ejemplo",  n: "Familia Ejemplo",        p: 2, t: "" },

];
