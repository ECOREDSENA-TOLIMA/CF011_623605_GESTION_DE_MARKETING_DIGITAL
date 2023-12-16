<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Métricas (KPIs)

    .row.justify-content-center 
      .col-lg-2.col-6.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/1.svg', alt='Imagen decorativa')
      .col-lg-10.col-12.mb-3
        p(data-aos="fade-left") Las métricas, también conocidas como Indicadores Clave de Rendimiento (KPIs), desempeñan un papel crucial en la gestión comercial digital. Estas representaciones numéricas son el resultado del seguimiento, valoración y comparación de los objetivos establecidos en un período de tiempo específico. Al medir y analizar estas métricas, las empresas obtienen información valiosa sobre el rendimiento de sus estrategias de #[i marketing] digital, permitiéndoles tomar decisiones informadas y ajustar sus enfoques según sea necesario.
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Concepto
    .row.justify-content-center 
      .col-lg-4.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/2.jpg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") KPI #[b #[i (Key Performance Indicator)]] lo que traducido al español significa #[b indicador clave de desempeño].
        p(data-aos="fade-left") El desempeño como en toda estrategia o proyecto no es más que la representación o esquematización de la información como resultado de una serie de acciones implementadas en un periodo determinado y con un objetivo definido, mediante un conjunto de indicadores KPI´s que representan las métricas de una estrategia.
        p(data-aos="fade-left") Por lo anterior, la implementación de estos en una estrategia empresarial requiere factores clave que se resuelven haciendo uso de los siguientes interrogantes:
        .cajon.colo-primario.p-4(style="background-color: #FFFBE5")
          li ¿Qué se quiere medir?
          li ¿Por qué se mide específicamente esa acción?
          li ¿Esa acción permite el seguimiento de alguno de nuestros objetivos con sus resultados?
          li ¿La acción es un factor clave para la empresa?
          li ¿Quién es el responsable de los resultados de la acción?
          li ¿Con qué frecuencia se realizará la supervisión de los resultados de la acción?

    p.mt-5(data-aos="fade-left") Es esencial comprender la importancia y las ventajas del uso de indicadores clave de rendimiento (KPIs) en un proyecto empresarial. Estos indicadores proporcionan una serie de beneficios fundamentales para el éxito de la empresa:

    .row.justify-content-center
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span #[i Alcance del uso de indicadores]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/4.svg' alt='En la figura 1 se muestra la importancia y ventajas del uso de indicadores en un proyecto empresarial, que va desde suministrar información útil hasta facilitar el proceso de toma de decisiones.')
            
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/5.svg' alt='En la figura 1 se muestra la importancia y ventajas del uso de indicadores en un proyecto empresarial, que va desde suministrar información útil hasta facilitar el proceso de toma de decisiones.')
              
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Tipos
    
    p(data-aos="fade-left") #[b Definir o clasificar un indicador depende del objetivo proyectado que se quiere controlar]. Dentro del esquema del marketing digital se encuentran varios tipos de #[b KPI´s] con sus respectivas características, los cuales se usan a nivel empresarial y que están determinados conforme a la estructura orgánica de la empresa y a las metas proyectadas como se observa en la siguiente figura:

    .row.justify-content-center
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span #[i Ilustración de KPI´s]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/6.svg' alt='En la figura 2 se muestran los elementos que componen a los KPI´s.')
            
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/7.svg' alt='En la figura 2 se muestran los elementos que componen a los KPI´s.')
    p.mt-5(data-aos="fade-left") Como cada organización tiene un plan estratégico a seguir, también tiene una serie de indicadores que la caracterizan exclusivamente, por lo que se hace necesario tener claro el objetivo de la misma. Por lo anterior, es importante conocer cuáles son las principales características de un indicador, ya que estas le permitirán establecer las pautas a seguir, por tanto, se invita a revisar el siguiente contenido:

    ImagenInfografica.color-secundario.mb-5.desktop
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/8.svg', alt='Imagen decorativa')
      .tarjeta.color-acento-botones.p-3(x="55%" y="7.7%" numero="")
        .h5.mb-2 KPI temporal
        p Hace referencia a los tiempos de cumplimiento de cada objetivo propuesto, se caracteriza porque permite la comparación con otros objetivos a corto, mediano y largo plazo.
      .tarjeta.color-acento-botones.p-3(x="38.2%" y="48.2%" numero="")
        .h5.mb-2 KPI específico
        p Hace referencia a un tema en particular, se caracteriza por ser muy concreto permitiendo el seguimiento y control a los objetivos trazados.
      .tarjeta.color-acento-botones.p-3(x="82.5%" y="64.2%" numero="")
        .h5.mb-2 KPI relevante
        p Hace referencia al análisis de información que verdaderamente interesa,  se caracteriza por identificar las necesidades de la empresa y definir los KPI´S que permitirán el cumplimiento de objetivos.
      .tarjeta.color-acento-botones.p-3(x="56.6%" y="91%" numero="")
        .h5.mb-2 KPI medible
        p Hace referencia a los resultados obtenidos, se caracteriza por permitir un control más exhaustivo sobre los objetivos proyectados en tiempo real.

    .row.justify-content-center
      .col-12 
        figure.movil(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/9.svg' alt='Imagen decorativa')

    p.mt-5(data-aos="fade-left") Otro de los factores a revisar son los tipos de indicadores, ya que se hace necesario definir el indicador para cada área de la empresa para la consecución de los objetivos proyectados en el periodo de tiempo determinado. A continuación, se presentan los siguientes KPI´s considerados como los más importantes:

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Tipos de indicadores
            p Los indicadores son usados para medir los resultados de un proceso o una estrategia, por ejemplo, la satisfacción de un cliente, el nivel de desempeño de un empleado o los resultados financieros en una empresa, por esa razón se usan en diferentes formas en las organizaciones a continuación se mencionan algunos de ellos:
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/10.svg', alt='Imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 KPI´s financieros
            p Su función es medir la inversión realizada y confrontar los gastos sobre resultados, por lo que a continuación se dan algunos ejemplos: tasa de crecimiento, tasa de retorno y beneficio neto.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/11.svg', alt='Imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 KPI´s de logística
            p Su función es medir la eficiencia en la entrega de productos una vez realizada la compra conforme a las condiciones establecidas, algunos ejemplos son: tiempos de entrega, devoluciones y costo de transporte.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/12.svg', alt='Imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 KPI´s de producción
            p Cuya función es medir la productividad de los procesos, por lo que se presentan a continuación unos ejemplos que permitirán clarificar su concepto: tiempos de producción, tasa de trabajo y volumen de producción.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/13.svg', alt='Imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 KPI´s de <i>e-commerce</i> o <i>marketing</i> digital
            p Su función es medir las actividades del comercio electrónico, entre sus ejemplos se pueden contar: tráfico, fuentes de tráfico, coste por <i>leads</i> (adquisición), tasa de conversión, tiempo medio de visitas, visitas nuevas vs. visitas recurrentes, páginas vistas y entorno social, entre otros elementos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/14.svg', alt='Imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 KPI´s de ventas
            p Su función es medir las ventas de un producto específico, algunos ejemplos son: la satisfacción del cliente, el nivel de facturación y los cierres comerciales.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/15.svg', alt='Imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 KPI´s de redes sociales
            p Su función es medir los resultados de los tipos de medios, pagados, ganados y propios, algunos ejemplos son: el número de seguidores, el alcance de la publicación, el <i>engagement</i>, entre otros.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/16.svg', alt='Imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0.p-4
            p Es fundamental comprender la importancia de los indicadores clave de rendimiento (KPI) al implementar una estrategia de <i>marketing</i> digital en una empresa. Estos KPI son cruciales, ya que los resultados que arrojen evidenciarán el impacto de la campaña en el público objetivo. Esto, a su vez, permitirá tomar decisiones informadas para posicionar la organización o marca en la mente del público objetivo al final del proceso.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/17.svg', alt='Imagen decorativa')
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Estándares
    
    .tarjeta.p-4.mb-3(style="background-color: #E3ECF7")  
      .row.justify-content-center.align-items-center  
        .col-lg-10.col-10
          .row.justify-content-center 
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/tema1/18.svg', alt='Imagen decorativa')
            .col-lg-8.col-12
              p(data-aos="fade-left") La definición de estándares es crucial en el establecimiento de indicadores para medir los objetivos dentro de un segmento de mercado específico. Estos estándares actúan como puntos de referencia que facilitan la evaluación del rendimiento. Un ejemplo ilustrativo es cuando un indicador revela que la mayoría de los usuarios que interactuaron positivamente con la última publicación pertenecen al grupo de edades entre 18 y 24 años. En este caso, el estándar identificado es el grupo demográfico de jóvenes. Estos estándares proporcionan una base para comparar y contextualizar los resultados, permitiendo una comprensión más profunda y precisa del impacto de las estrategias de <i>marketing</i> digital en segmentos específicos de la audiencia 

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Técnicas de medición
    
    .row.justify-content-center.align-items-center
      .col-lg-4.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/19.jpg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") Las técnicas de medición para las estrategias del <i>marketing</i> digital determinan el tiempo y el alcance que obtuvo una publicación en los medios digitales.
        p(data-aos="fade-left") Establecer un KPI para determinar la técnica que se utilizará para su medición depende del objetivo a alcanzar, por lo tanto, debe cumplir con ciertas características básicas.
        .cajon.colo-primario.p-4(style="background-color: #FFFBE5")
          .row.justify-content-center.align-items-center 
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/tema1/20.svg', alt='Imagen decorativa')
            .col-lg-8.col-8
              p Por ejemplo, se encuentran algunas técnicas para medir el comportamiento de las publicaciones en las redes sociales que se utilizan para conocer la respuesta de los usuarios frente a los contenidos, estas son: <i>Facebook Analytics, Google Analytics</i>  y <i>Twitter Analytics</i>, etc.

    p.mt-5(data-aos="fade-left") Por otro lado, parte de lo que se debe tener claro en este proceso de <i>marketing</i> digital, es conocer cuáles son las características del objetivo a medir, las cuales se describen a continuación:

    .row.justify-content-center
      .col-lg-10.col-12 
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/21.svg' alt='Imagen decorativa')
            
    .row.justify-content-center
      .col-12 
        figure.movil(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/22.svg' alt='Imagen decorativa')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_5 1.5 Tasa de conversión
    
    .row.justify-content-center.align-items-center 
      .col-lg-7.col-12.mb-3
        p.mb-2(data-aos="fade-left") La tasa de conversión en <i>marketing</i> digital es esencial para medir la eficacia del embudo de conversión, que representa el proceso por el cual un visitante se convierte en cliente después de interactuar con contenido digital. Calcular la tasa de conversión implica dividir el número de conversiones entre el número total de visitantes y multiplicar por 100 para obtener el porcentaje.
        figure.mb-2(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/23.svg' alt='Imagen decorativa')
        p.mb-2(data-aos="fade-left") Esta métrica proporciona una visión clara de la eficiencia de las estrategias de <i>marketing</i> en la transformación de visitantes en clientes, permitiendo realizar comparaciones a lo largo del tiempo y con otros referentes del sector <i>(benchmarking)</i>. La tasa de conversión es un indicador crucial para evaluar y ajustar las tácticas de <i>marketing</i> digital, asegurando un rendimiento óptimo en la generación de <i>leads</i>  y la conversión efectiva de usuarios en clientes.
      .col-lg-5.col-10.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/24.svg' alt='Imagen decorativa')

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        .cajon.color-primario.p-4(style="background-color: #E3ECF7")
          p(data-aos="fade-left") Un ejemplo claro del proceso de conversión es el seguidor al cliente. Esta se consolida cuando un seguidor toma la decisión de realizar una compra por cualquier plataforma <i>e-commerce</i>, a este paso se le denomina conversión.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_6 1.6 Volumen de tráfico
    
    .row.justify-content-center 
      .col-lg-4.col-8.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/25.jpg' alt='Imagen decorativa')
      .col-lg-8.col-8.mb-3
        p(data-aos="fade-left") El volumen de tráfico es una métrica clave que evalúa la cantidad de accesos que un contenido recibe en un sitio web, página o <i>blog</i> durante un periodo específico. Esta métrica es esencial para analizar el impacto de la estrategia de <i>marketing</i> digital, ya que permite medir tanto el tráfico orgánico, derivado de búsquedas naturales, como el tráfico obtenido a través de medios pagados, como campañas publicitarias. Un volumen de tráfico significativo indica un mayor alcance y visibilidad, lo que puede traducirse en una mayor exposición de la marca, generación de leads y posiblemente mayores conversiones. Al monitorear el volumen de tráfico, las empresas pueden evaluar la efectividad de sus esfuerzos de <i>marketing</i> digital y ajustar estrategias según sea necesario para optimizar el rendimiento y alcanzar los objetivos establecidos.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_7 1.7 Número de visitas
    .row.justify-content-center 
      .col-lg-8.col-8.mb-3
        p(data-aos="fade-left") El número de visitas a un sitio <i>web</i>, página o <i>blog</i> es una métrica fundamental para evaluar el alcance y la efectividad del contenido. A medida que este número aumenta, se incrementan las posibilidades de lograr un mayor alcance de manera orgánica. El contenido valioso y relevante tiene el potencial de ser compartido por los visitantes, amplificando así su impacto. Un ejemplo destacado de esta práctica es la inclusión de enlaces de suscripción a cursos virtuales gratuitos, donde el valor percibido por los visitantes puede motivar la difusión orgánica del contenido. Monitorear el número de visitas proporciona información clave sobre la resonancia del contenido y la atracción que ejerce sobre la audiencia, lo que permite a las empresas ajustar y optimizar sus estrategias para maximizar el impacto deseado.
      .col-lg-4.col-8.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/26.svg' alt='Imagen decorativa')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_8 1.8 Tasa de rebote

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/27.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La tasa de rebote es una métrica crucial que revela el comportamiento de los visitantes al interactuar con un sitio <i>web</i>, página o <i>blog</i>. Este indicador se calcula como el porcentaje de usuarios que abandonan el sitio sin realizar ninguna interacción significativa. La tasa de rebote ofrece <i>insights</i> valiosos sobre la efectividad y el atractivo del contenido, así como la capacidad del sitio para retener la atención de los visitantes. Un alto porcentaje de rebote puede indicar que el contenido no cumple con las expectativas de los usuarios o que la página carece de elementos persuasivos para fomentar la interacción. Por lo tanto, controlar y reducir la tasa de rebote es fundamental para optimizar la retención de usuarios y mejorar la experiencia general del visitante.
          br
          br
          | 
      
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
