<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Reacciones

    .row.justify-content-center.align-items-center 
      .col-lg-3.col-8.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/1.svg', alt='Imagen decorativa')
      .col-lg-9.col-12.mb-3
        p(data-aos="fade-left") Las reacciones en las redes sociales representan una forma esencial de comunicación en la era digital. Los usuarios, especialmente en las plataformas de <i>social media</i>, emplean diversas expresiones gráficas para manifestar sus respuestas emocionales de manera concisa. Este fenómeno, conocido como ciberlenguaje, permite una interacción eficiente en las conversaciones <i>online</i>, optimizando el tiempo de comunicación en dispositivos móviles o laptops. Estas reacciones, que van más allá del texto, se han convertido en una parte integral de la dinámica <i>social</i> en línea, ofreciendo a los internautas una manera rápida y visual de expresar sus emociones frente a las publicaciones.
        .cajon.color-secundario.p-4.mb-3(style="background-color: #FFFBE5")
          p Como parte de su aprendizaje autónomo, se invita a revisar en el material complementario el tema “El ciberlenguaje juvenil universitario, análisis de los textos” de la página de Facebook ¨Confesiones¨, donde podrá encontrar los rasgos característicos en el uso del lenguaje, que implica casi la codificación del mismo.
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Tipos
    p(data-aos="fade-left") En el ámbito de las redes sociales, las campañas basadas en las reacciones proporcionan una valiosa evaluación de las publicaciones al medir las emociones de los usuarios. La utilización de iconos y <i>emojis</i> se ha convertido en un centro crucial para validar la información y comprender las opiniones de los consumidores sobre productos o servicios específicos. En particular, la red social Facebook facilita la medición de estas reacciones mediante emoticones específicos, permitiendo una interpretación más detallada de la respuesta emocional de la audiencia, como se muestra a continuación:

    .row.justify-content-center.mt-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center 
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/2.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul(style="background-color: #E3ECF7")
                .p-4
                  p <b>Wow</b>= cara sorprendida.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/3.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul(style="background-color: #E3ECF7")
                .p-4
                  p <b>Amor</b>= corazón que late.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/4.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul(style="background-color: #E3ECF7")
                .p-4
                  p <b>Triste</b>= cara llorando, mostrando una lágrima animada.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/5.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul(style="background-color: #E3ECF7")
                .p-4
                  p <b>Enojado</b>= cara roja / enojada / haciendo pucheros.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/6.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul(style="background-color: #E3ECF7")
                .p-4
                  p <b>Jaja</b>= cara riendo.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/7.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul(style="background-color: #E3ECF7")
                .p-4
                  p <b><i>Me gusta</i></b>= pulgar hacia arriba.

      

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
