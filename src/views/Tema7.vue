<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Reporte
    
    .row.justify-content-center.align-items-center 
      .col-lg-4.col-8.mb-3
        figure
          img(src='@/assets/curso/temas/tema7/1.jpg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") Los reportes desempeñan un papel crucial en las empresas al proporcionar información esencial para la toma de decisiones informadas. La comprensión detallada del estado actual y el rendimiento de los objetivos establecidos se vuelve posible a través del seguimiento y análisis de datos. En el entorno digital, especialmente en las redes sociales como Facebook, Instagram y X, esta capacidad se ve facilitada por herramientas administrativas que ofrecen análisis de datos en tiempo real, conocidas como estadísticas.
        .cajon.color.secundario.p-4.mb-3(style="background-color: #FFFBE5")
          p(data-aos="fade-left") La palabra "reporte", según el diccionario de inglés, implica "dar una noticia o informe acerca de un hecho o suceso reciente". En términos generales, un reporte consiste en un documento que compila datos detallados sobre el comportamiento cuantitativo de las variables de estudio, permitiendo su análisis y posterior toma de decisiones en un periodo de tiempo específico. En el ámbito digital, estos informes se centran en datos cuantitativos, expresados en números o porcentajes, que proporcionan métricas clave como el número de visitas a una página, el porcentaje de descargas de un documento, o la cantidad de interacciones en redes sociales, brindando una visión clara del rendimiento #[em online] de la empresa.
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_7_1 7.1 Técnica
    .row.justify-content-center.align-items-center 
      .col-lg-2.col-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema7/2.svg', alt='Imagen decorativa')
      .col-lg-10.col-12.mb-3
        p(data-aos="fade-left") La retención y monetización de clientes, usuarios, consumidores o público objetivo constituyen los objetivos fundamentales de cualquier marca, empresa o comunidad virtual que opera en el ámbito digital. Lograr este propósito requiere la aplicación de técnicas efectivas respaldadas por informes precisos basados en métricas clave. A continuación, se presentan dos técnicas esenciales que, al ser implementadas en una empresa, aportan un valor significativo al ámbito del <i>marketing</i> digital. Estas técnicas permiten gestionar de manera efectiva las comunidades y redes sociales, que sirven como herramientas vitales para establecer contactos con proveedores, clientes y posibles clientes potenciales. La generación adecuada de informes basados en métricas proporciona una comprensión profunda del comportamiento del público, facilitando así la toma de decisiones estratégicas orientadas a la retención y monetización.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Reporte por retención de membresías
      div.titulo-herramientas.d-block.d-md-none Reporte por retención de membresías

    .row.justify-content-center.align-items-center 
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") Esta técnica aplica especialmente para los modelos de negocio cuya sostenibilidad en el mercado depende del número de suscriptores (miembros), por ejemplo, las plataformas de películas como Netflix o Amazon Prime, para eso se debe tener presente la siguiente ecuación y sus respectivas variables
        .cajon.color-primario.p-4.mb-3(style="background-color: #E3ECF7")
          .row.justify-content-center.align-items-center
            .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/tema7/4.svg', alt='Imagen decorativa')      
            .col-lg-9.col-12
              li MF = Miembros al final del periodo
              li MN = Miembros nuevos adquiridos durante el periodo
              li MS = Miembros al comienzo del periodo
              br
              p <b>Reporte = [ ( MF – MN) / MS] * 100</b>
      .col-lg-4.col-8.mb-3
        figure
          img(src='@/assets/curso/temas/tema7/3.jpg', alt='Imagen decorativa')

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Retorno por la inversión REI
      div.titulo-herramientas.d-block.d-md-none Retorno por la inversión REI

    p(data-aos="fade-left") Es importante lograr medir el tráfico y determinar si la inversión realizada en cada campaña está arrojando los resultados esperados, por lo que en la tabla 3 se presenta el esquema para poder llevar el seguimiento y control en un periodo determinado de una red social.

    .row.justify-content-center.alig-items-center.mt-5
      .col-12.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span #[i REI por tráfico]
        .tabla-a.color-acento-contenido.mb-5
          table.text-center
            thead(style="background-color: #33ECE0")
              tr
                th Campaña
                th Costo total ($)
                th Clic totales
                th Ganancias ($)
                th GPC ($) (TOTAL)
                th GPC ($) (SEMANAL)
                th REI (%)
                th <i>LEADS</i>
            tbody
              tr(style="background-color: #F6F6F6")
                td CAMPAÑA 1
                td 20.000
                td 100000
                td 60.000
                td 0.6
                td 0.28
                td 200
                td 4.0000
              tr
                td CAMPAÑA 2
                td 5.000
                td 8000
                td 3.200
                td 0.4
                td 0.05
                td - 36
                td 0
              tr(style="background-color: #F6F6F6")
                td CAMPAÑA 3
                td 30.000
                td 75000
                td 28.000
                td 0.37
                td 0.32
                td - 7
                td 30000
              tr
                td CAMPAÑA 4
                td 20.000
                td 40000
                td 50.000
                td 1.25
                td 0.27
                td 150
                td 0
    p(data-aos="fade-left") Como se puede ver en la tabla anterior se hace un análisis de cuatro campañas realizadas según sus propias características, para ello se hace una breve descripción de cada uno de los elementos a continuación:

    .row.justify-content-center.alig-items-center.mt-5
      .col-12.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span #[i REI por tráfico, descripción de elementos]
        .tabla-b.color-acento-contenido.mb-5
          table
            tr.text-center.text-bold(style="background-color: #33ECE0")
              th Elementos
              td Descripción
            tr
              th Campaña
              td Hace referencia al nombre de la campaña, por ejemplo, promoción de curso en Colombia.
            tr
              th Costo total
              td La inversión realizada en la campaña.
            tr
              th Clic totales
              td Número de usuarios que dieron clic en el link de la publicación y llegaron al sitio web.
            tr
              th Ganancias
              td Valor en dinero que refleja la utilidad obtenida.
            tr
              th GPC (totales)
              td Es la división de las ganancias entre la cantidad de clics obtenidos. Ganancias por clic.
            tr
              th GPS (semanal)
              td Es un reporte que genera la plataforma de la red social directamente, para obtenerlo se debe ingresar al panel de control de la red, por ejemplo, Facebook Analytics y Ganancias por clic semanal.
            tr
              th REI. Retorno en la inversión
              td Es el excedente o faltante de restar las ganancias con la inversión y posterior a ello, se realiza el cálculo para porcentualmente determinar si la utilidad es positiva o negativa.
            tr
              th <i>Leads</i>
              td Permite establecer a cuántos nuevos usuarios llegó la publicación y hacer el análisis respectivo comparando con los clics totales y el REI.
    p(data-aos="fade-lefet") Adicionalmente, hay muchas más técnicas para presentar reportes de métricas de datos como resultado de la implementación de estrategias de <i>marketing</i> digital y será decisión de la marca y de los estrategas cuál ejecutar, con miras al cumplimiento de los objetos trazados.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_7_2 7.2 Estructura
    
    p(data-aos="fade-left") La estructura de los reportes puede adoptar diversos formatos, ya sea impreso, digital o incluso audiovisual. Estos informes proporcionan a la empresa una visión general de su posición en el ámbito digital, especialmente en relación con los clientes habituales y potenciales. Además, ofrecen a la gerencia un panorama detallado de las estrategias empleadas en las redes sociales y su efectividad percibida por los usuarios. Comparar datos entre estrategias y evaluar los resultados en diferentes plataformas digitales son prácticas clave para identificar las vías más eficientes para conectar con los usuarios.
    p(data-aos="fade-left") Al elaborar un informe para la gerencia, es crucial que los datos sean preferiblemente presentados de manera visual, facilitando así las comparaciones necesarias. A continuación, se destacan algunos aspectos clave de la estructura que se deben incorporar según la estrategia de <i>marketing</i> implementada.

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span #[i Estructura del reporte final]
        figure.desktop
          img(src='@/assets/curso/temas/tema7/5.svg', alt='En la figura 5 se muestra una estructura de un informe final, basado en datos recopilados de una campaña de marketing digital, la cual se presenta a la gerencia para la toma de decisiones futuras.')
        figure.movil
          img(src='@/assets/curso/temas/tema7/6.svg', alt='En la figura 5 se muestra una estructura de un informe final, basado en datos recopilados de una campaña de marketing digital, la cual se presenta a la gerencia para la toma de decisiones futuras.')
    p.mt-5(data-aos="fade-left") Con toda la información recolectada durante el tiempo definido para la implementación de la estrategia de <i>marketing</i> digital se hace un reporte del impacto en el público en general y se entrega a la gerencia, con el fin de que se tomen decisiones y se definan medidas correctivas o preventivas a futuro.

    .tarjeta.p-3.mb-5.mt-5(style="background-color: #F5EAEA")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema7/7.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Referencias bibliográficas
              p.text-small Como parte de su aprendizaje autónomo, se invita a revisar la sección de referencias bibliográficas. Al consultar diversas fuentes, no solo se amplía el conocimiento, sino que también se obtienen diferentes perspectivas y enfoques sobre los temas tratados. Esta exploración adicional contribuye a una comprensión más completa y matizada de los conceptos, proporcionando una base sólida para el desarrollo académico y profesional.
            //-.col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="http://biblioteca.udgvirtual.udg.mx/jspui/bitstream/123456789/3555/1/100_herramientas_community_managers.pdf" target="_blank")
                span Enlace web
                i.fas.fa-file-code


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
