<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <i>Engagement</i>
    
    .row.justify-content-center.align-items-center
      .col-lg-4.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/1.jpg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") El <i>"engagement"</i> o compromiso en el <i>marketing</i> de contenidos es esencial para establecer una conexión significativa con la audiencia. Este término refleja la medida en que el público se involucra y conecta emocionalmente con el contenido promocional. Este compromiso se manifiesta cuando los usuarios comparten enlaces, recomiendan productos o servicios a su comunidad digital y participan en interacciones significativas en redes sociales.
        p(data-aos="fade-left") La construcción de un sólido <i>engagement</i> tiene diversos beneficios, tales como:
        .cajon.color-primario.p-4(style="background-color: #E3ECF7")
          li El aumento de la tasa de interacción en redes sociales en un corto período.
          li El fortalecimiento de la confianza del público en la marca debido a la entrega de contenido valioso.
          li La generación de mayor lealtad del cliente.
          li Posicionamiento más sólido en el mercado, contribuyendo al buen nombre de la empresa.
        p.mt-3(data-aos="fade-left") En resumen, el <i>engagement</i> no solo impulsa la visibilidad, sino que también fortalece los lazos emocionales con la audiencia, construyendo una base sólida para el éxito a largo plazo.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Estrategias
    
    p(data-aos="fade-left") Las estrategias diseñadas para incrementar el <i>engagement</i> juegan un papel crucial en la construcción de una conexión sólida entre la marca y su audiencia objetivo. Estas estrategias son fundamentales para fidelizar a los clientes y cultivar relaciones duraderas. A continuación, se invita a revisar detalladamente el contenido presentado para obtener una comprensión más profunda de cómo implementar estas estrategias con éxito y lograr una interacción significativa con la comunidad digital.

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Parte 1" :icono="require('@/assets/curso/temas/tema2/2.svg')")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/3.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            p María y Pablo se encuentran en la oficina trabajando para una empresa de publicidad y mercadeo requieren diseñar una estrategia de <i>marketing</i> para una empresa local que tiene 5 sedes en diferentes partes del país, por lo que se reúnen a mirar cuáles alternativas tienen para diseñarla.
            p <b>Pablo:</b> hola, María ¿Cómo va todo?
            p <b>María:</b> pues algo inquieta, estoy pensando en cómo hacer la estrategia para la empresa que nos asignaron ayer, estuve leyendo sobre lo que fueron, lo que son y lo que quieren ser.
            p <b>Pablo:</b> sí eso es importante, yo también investigué un poco sobre ellos … y creo que podemos mirar algunas alternativas… ¿Qué te parece si hacemos una lluvia de ideas?
            p <b>María:</b> listo.

      .py-4.py-md-5(titulo="Parte 2" :icono="require('@/assets/curso/temas/tema2/4.svg')")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/8.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            p <b>María:</b> yo conozco la estrategia que habla sobre la creatividad, que hace referencia al uso de las redes sociales con estrategias innovadoras o llamativas que permitan incrementar la audiencia, para ello se deben proponer llamados a la acción utilizando dichas plataformas de comunicación, por ejemplo, promover la participación de la audiencia como jurado de un concurso.
            p <b>Pablo:</b> humm, un concurso, suena bien, listo, ahora yo propongo lo siguiente hay una muy interesante que implica involucrar al usuario y hace referencia a compartir cierto contenido que los usuarios generan, por ejemplo, recetas de comidas especiales, cursos de aprendizaje o videos de experiencias de viajes.
            p <b>María:</b> listo, fomentar la creatividad e involucrar a los usuarios.
      .py-4.py-md-5(titulo="Parte 3" :icono="require('@/assets/curso/temas/tema2/5.svg')")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/9.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            p <b>María:</b> uno de los factores que veo que están de moda hoy son los influencer y creo que podemos mirar cómo los involucramos, ya que se pueden hacer alianzas estratégicas con personas que mueven determinado tipo de audiencia que tiene que ver con el producto o servicio de la empresa, por ejemplo, un influencer cuya audiencia es gente joven para promover un concierto con el cantante de moda.
            p <b>Pablo:</b> Sí, es verdad tenemos que revisar cuáles son los productos estrella o la marca de la empresa o el servicio que requieren dar a conocer o posicionar en la mente de los usuarios.
            p <b>María:</b> sí Pablo, sería una tarea por hacer.
      .py-4.py-md-5(titulo="Parte 4" :icono="require('@/assets/curso/temas/tema2/6.svg')")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/10.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            p <b>Pablo:</b> hay otra estrategia que se puede usar y es la asociación, es decir, promover un producto o servicio en una actividad específica en asociación con otra marca, cuyo fuerte sea un canal digital diferente, por ejemplo, realizar campañas de promoción en un evento con apoyo de un canal de televisión, un periódico, la radio o una revista, etc.
            p <b>María:</b> sí Pablo, esa sería otra tarea para realizar, ya que se hace necesario hablar con los responsables en la empresa.
      .py-4.py-md-5(titulo="Parte 5" :icono="require('@/assets/curso/temas/tema2/7.svg')")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/11.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            p <b>Pablo:</b> yo conozco otra muy interesante y es la gamificación. El cual hace referencia a realizar acciones de beneficio para la audiencia utilizando la mecánica de juegos educativos y de aprendizaje para el mejoramiento de habilidades y competencias de los participantes y con el fin de que obtengan premios o recompensas. Por ejemplo, concursos de ortografía, <i>spelling bee</i>, etc.
            p <b>María:</b> bueno ya tenemos 5 ideas interesantes y dos tareas por realizar, distribuyamos el trabajo, investigamos, proponemos alternativas y nos reunimos a ver que podemos seleccionar.
            p <b>Pablo:</b> listo, luego nos agendamos para definir cuál o cuáles le presentamos al cliente para que escoja.
        
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Técnicas e importancia
    
    .row.justify-content-center.align-items-center
      .col-lg-9.col-12.mb-3
        p(data-aos="fade-left") La importancia del <i>engagement</i> es lograr establecer qué tan comprometido están los usuarios o el público objetivo con la marca o la comunidad a la que pertenecen, por lo anterior, se hace necesario conocer la tasa de <i>engagement</i> mediante el alcance y los seguidores utilizando técnicas matemáticas para su cálculo como se muestra a continuación. 
        p(data-aos="fade-left") Para calcular la tasa de <i>engagement</i>, se pueden seguir varias técnicas, pero una fórmula común es la siguiente:
        figure.desktop
          img(src='@/assets/curso/temas/tema2/12.svg', alt='Se presenta la formula: tasa de engagement es igual a Interacciones dividido enalcance total y el resultado multiplicado por 100.')
        figure.movil
          img(src='@/assets/curso/temas/tema2/14.svg', alt='Se presenta la formula: tasa de engagement es igual a Interacciones dividido enalcance total y el resultado multiplicado por 100.')
      .col-lg-3.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/13.jpg', alt='Imagen decorativa')
        
    
    .tarjeta.color-primario.p-4(style="background-color: #E3ECF7").mt-5
      .row.justify-content-center 
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center
            .col-lg-3.col-10.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/15.svg', alt='Imagen decorativa')
            .col-lg-9.col-12.mb-3
              p(data-aos="fade-left") La importancia del <i>engagement</i> radica en varios aspectos:
              li <b>Conexión emocional:</b> el <i>engagement</i>  refleja el grado de conexión emocional entre la marca y la audiencia. Cuanto mayor sea el <i>engagement</i>, más fuerte será esta conexión.
              li <b>Fidelización:</b> un público comprometido tiende a ser más leal a la marca. Estos usuarios están más dispuestos a seguir interactuando y consumiendo contenido.
              li <b>Confianza:</b> el <i>engagement</i> puede contribuir a construir la confianza del público en la marca. Las interacciones positivas generan confianza y credibilidad.
              li <b>Visibilidad y posicionamiento:</b> una alta tasa de <i>engagement</i> también puede aumentar la visibilidad de la marca. Los algoritmos de muchas plataformas digitales favorecen el contenido que genera interacciones.
    p.mt-5(data-aos="fade-left") Al entender las técnicas para calcular y mejorar el <i>engagement</i>, las empresas pueden ajustar sus estrategias de <i>marketing</i> digital para fortalecer la relación con su audiencia y maximizar el impacto de sus esfuerzos.

</template>

<script>
export default {
  name: 'Tema2',
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
