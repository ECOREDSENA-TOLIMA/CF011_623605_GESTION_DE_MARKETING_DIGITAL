<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-3.col-8.mb-3
        figure
          img(src='@/assets/curso/temas/intro/1.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        p(data-aos="fade-left") El análisis de datos se ha convertido en una herramienta fundamental para la toma de decisiones, ya que proporciona una comprensión profunda del comportamiento y rendimiento de las acciones implementadas por una empresa para cumplir sus objetivos. En el ámbito del #[i marketing], especialmente en la estrategia digital, es esencial realizar un seguimiento constante y análisis de la conducta de los consumidores o usuarios frente a los productos y servicios ofrecidos. Esta tarea se lleva a cabo a través de métricas, comúnmente conocidas como indicadores clave de rendimiento (KPI), que son expresiones numéricas de los resultados obtenidos por acciones específicas. Estos KPI permiten medir, comparar y valorar el rendimiento de cada acción, proporcionando información valiosa para la optimización continua de las estrategias de #[i marketing].
        .cajon.color-secundario.p-4(style="background-color: #FFFBE5")
          p Peter Druker se hizo célebre por la frase “Lo que no se puede medir no se puede controlar; lo que no se puede controlar no se puede gestionar; lo que no se puede gestionar no se puede mejorar”, en este sentido las acciones en el mundo digital requieren de medición constante para su control y posterior mejoramiento.

    .row 
      figure(data-aos="fade-right")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/iHMnjIbXVfE?si=TyMMNJSZmdJwtJLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
