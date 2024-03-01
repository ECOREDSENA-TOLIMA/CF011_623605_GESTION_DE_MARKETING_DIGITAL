<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Interacción
    
    .row.justify-content-center
      .col-lg-4.col-8.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/1.svg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        .bloque-texto-c.color-secundario.p-4(style="background-color: #A3BFE4")
          i.fas.fa-quote-left
          h3.mb-2 La interacción en el entorno digital es un componente crucial que permite la comunicación y participación entre individuos de manera sincrónica y asincrónica, aprovechando las diversas herramientas y canales disponibles
          span - Cabero y Gisbert, 2005; Hannum, 2001
          i.fas.fa-quote-right
        p.mt-2(data-aos="fade-left") En el contexto digital, la interacción se manifiesta cuando los usuarios establecen contacto a través de distintos canales, generando así información sobre sus preferencias y comportamientos. Este proceso refleja cómo las emociones se expresan en el ciberespacio al consumir contenido de interés.
        p.mt-2(data-aos="fade-left") La interacción #[em online] puede definirse como el resultado de la influencia de contenido, como un "imán de <i>leads</i>" <i>(lead magnet)</i> en el ciberespacio. Su objetivo es abordar problemas específicos para un público determinado, incentivando a los usuarios a proporcionar información relevante, como datos de contacto o correos electrónicos, a cambio de obtener soluciones o beneficios específicos.

    p.mt-5(data-aos="fade-left") Uno de los ejemplos clásicos es identificar las diferencias y las similitudes entre la intersección presencial y virtual, que le permitirá clarificar el concepto, es el siguiente: 

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        ImagenInfografica.color-secundario.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/2.svg', alt='Imagen decorativa')
          .tarjeta.color-acento-botones.p-3(x="46.3%" y="32.7%" numero="")
            .h5.mb-2 Presencial uno
            p Presencia de los actores en el espacio y el tiempo.
            p Segundo plano de la tecnología. 
            p Hay un límite en el número de personas implicadas en la interacción.
          .tarjeta.color-acento-botones.p-3(x="39.3%" y="45.8%" numero="")
            .h5.mb-2 Presencial  dos
            p La audiencia siempre se encuentra bajo cierto control.
            p Hay identificación clara del interlocutor.
            p El contexto físico y material es relevante.
          .tarjeta.color-acento-botones.p-3(x="39.3%" y="62%" numero="")
            .h5.mb-2 Presencial tres
            p La interacción predominante es verbal.
            p Hay comunicación no verbal basada en miradas y gestos.
            p La estructura organizacional de la interacción es estable.
          .tarjeta.color-acento-botones.p-3(x="45.6%" y="74.2%" numero="")
            .h5.mb-2 Presencial cuatro
            p La interacción tiene modalidades comunicativas limitadas y excluyentes.
            p Existe una puesta en escena de la persona, quien es cosificada, porque es limitada en su proceso de aprendizaje.
          .tarjeta.color-acento-botones.p-3(x="54.5%" y="74.2%" numero="")
            .h5.mb-2 Entornos virtuales uno
            p No requiere la misma ubicación en tiempo y espacio en igual de condiciones.
            p Alta presencia de la tecnología.
            p Pueden participar gran cantidad de personas.
          .tarjeta.color-acento-botones.p-3(x="60.5%" y="62.7%" numero="")
            .h5.mb-2 Entornos virtuales dos
            p La audiencia no tiene límite.
            p Hay identificación efímera del interlocutor.
            p El contexto relevante es el de la simulación.
          .tarjeta.color-acento-botones.p-3(x="60.5%" y="45.7%" numero="")
            .h5.mb-2 Entornos virtuales tres
            p La interacción se da a través de: textos escritos, imágenes, sonidos, videos, etc. Cuyos parámetros establecen la simulación.
            p La comunicación verbal está en el mismo plano que la verbal.
            p Tiene una estructura flexible.
          .tarjeta.color-acento-botones.p-3(x="54.9%" y="33.5%" numero="")
            .h5.mb-2 Entornos virtuales cuatro
            p Existe una interacción pluri-modal, porque puede incluir múltiples modalidades de comunicación y tipos de contenidos.
            p La persona en pantalla tiene un alto nivel de intención, construcción y reconstrucción, ya que es el centro del proceso.

    .row.justify-content-center
      .col-lg-10.col-12.movil
        figure
          img(src='@/assets/curso/temas/tema3/3.svg', alt='Imagen decorativa')  
    
    .row.justify-content-center.mt-5 
      .col-lg-8.col-12.mb-3
        p En complemento, existen otras estrategias para fomentar la interacción con los clientes, como el uso de <i>"lead magnets"</i> o "imanes de plomo". En el ámbito digital, este término hace referencia a ofertas atractivas diseñadas para captar la atención de los usuarios. Por ejemplo, ofrecer un curso de 5 semanas sobre un tema específico para que el usuario se convierta en experto, o invitarlos a registrarse en un enlace para recibir descuentos especiales, entre otras opciones. Estas ofertas actúan como "imanes" que atraen a los cibernautas, permitiendo obtener sus datos de contacto. Posteriormente, estos datos posibilitan el envío continuo de contenidos relevantes o futuras ofertas, fortaleciendo así la interacción a largo plazo.
      .col-lg-4.col-10.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/4.svg', alt='Imagen decorativa')  

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Tiempos
    
    p(data-aos="fade-left") En el contexto del <i>marketing</i> de contenidos, la gestión efectiva del tiempo en la interacción se convierte en un factor crítico para optimizar el valor del cliente a lo largo de su ciclo de vida. La dedicación a la creación de contenido relevante, la fomentación de la participación continua, la personalización según las fases del viaje del cliente y la construcción de relaciones a largo plazo son aspectos fundamentales. Adaptar estrategias en respuesta a la evolución del cliente y evaluar de manera constante el impacto de las interacciones a lo largo del tiempo son prácticas esenciales para asegurar la lealtad del cliente y el éxito a largo plazo en el mercado digital. A continuación, se ilustran los pasos que se deben tener en cuenta:

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        ImagenInfografica.color-secundario.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/5.svg', alt='Imagen decorativa')
          .tarjeta.color-acento-botones.p-3(x="21.6%" y="33.7%" numero="")
            p El <b><i>lead magnet</i></b> es el contenido que se ofrece como beneficio a los usuarios a cambio de sus datos personales.
          .tarjeta.color-acento-botones.p-3(x="21.6%" y="43.6%" numero="")
            p El <b><i>tripwire</i></b> es una oferta cuyo objetivo es convertir la mayor cantidad de nuevos <i>leads</i> que se acaban de suscribir en nuevos clientes de la empresa.
          .tarjeta.color-acento-botones.p-3(x="96.3%" y="74.5%" numero="")
            p El <b><i>remarketing</i></b> consiste en crear campañas de anuncios personalizadas para aquellos usuarios que ya han visitado previamente la <i>Web</i> o <i>e-commerce</i>, con el objetivo de incrementar el ROI o retorno de inversión.
          .tarjeta.color-acento-botones.p-3(x="96.3%" y="93.2%" numero="")
            p Las <b><i>custom audiences</i></b> son audiencias creadas a partir de una acción específica que ha realizado un usuario.
    .row.justify-content-center
      .col-lg-10.col-12.movil
        figure
          img(src='@/assets/curso/temas/tema3/6.svg', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
