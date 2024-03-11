export default {
  global: {
    componenteFormativo: 'Métricas de impacto en la gestión comercial digital',
    descripcionCurso:
      'La gestión comercial digital se ve reflejada a través de los indicadores (KPI) implementados por la empresa para medir los resultados de la estrategia de <em>marketing</em> digital.  Este documento contempla los siguientes temas que permiten la medición de una gestión comercial digital: las métricas, el <i>engagement</i>, las interacciones, las reacciones, los comentarios, los seguidores y finalmente, los reportes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Métricas (KPIs)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estándares',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas de medición',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tasa de conversión',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Volumen de tráfico',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Número de visitas',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Tasa de rebote',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<i>Engagement</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estrategias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas e importancia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interacción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tiempos',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reacciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Comentarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Protocolos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Plantilla',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Mensajes',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguidores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Importancia',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Medición',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Reporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Técnica',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Estructura',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_11_623605.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Reacciones',
      referencia:
        'Chávez, D., Ramos, T., Núñez, L. & Inga, M. (2018). El ciberlenguaje juvenil universitario: análisis de los textos de la página de Facebook ¨Confesiones¨. Propós. Represent, 6(2).',
      tipo: 'Artículo',
      link:
        'http://www.scielo.org.pe/scielo.php?script=sci_arttext&pid=S2307-79992018000200008#:~:text=Para%20referirse%20de%20lenguaje%20de,como%20parte%20de%20un%20grupo',
    },
    {
      tema: 'Medición',
      referencia:
        'Rosero, S.  y Núñez, R. (s.f.). 100 + herramientas útiles para <i>community managers</i>. Udgvirtual.',
      tipo: 'PDF',
      link: 'http://biblioteca.udgvirtual.udg.mx/jspui/handle/123456789/3555',
    },
  ],
  glosario: [
    {
      termino: 'Alcance orgánico',
      significado:
        'es el porcentaje que evalúa el impacto y el número de personas que han visto una publicación de manera natural, sin ningún tipo de promoción o publicidad de pago.',
    },
    {
      termino: 'Alcance viral',
      significado:
        'calcula la evolución y la interacción de una publicación en cualquier tipo de formato, especialmente las redes sociales.',
    },
    {
      termino: 'Analítica web',
      significado:
        'es la forma de medir y analizar los datos de tráfico de un sitio web.',
    },
    {
      termino: '<em>Blog post</em>',
      significado:
        'es el nombre técnico que recibe la acción de publicar una entrada o un artículo en un <i>blog</i>.',
    },
    {
      termino: '<em>Blog roll</em>',
      significado:
        'es un <i>widget</i> (programa integrado de una Web externa) que se puede instalar en los <i>blogs</i> y visualiza en forma de lista los blogs que se siguen y que se recomiendan a los lectores.',
    },
    {
      termino: 'Comunidad <em>online</em>',
      significado:
        'conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente respecto a una marca o temática.',
    },
    {
      termino: '<em>Cookies</em>',
      significado:
        'son pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio web y que permiten a este sitio seguir el rastro de la actividad de los usuarios.',
    },
    {
      termino: '<em>Crowdsourcing</em>',
      significado:
        'acción por la cual las empresas y marcas generan contenido creativo a través de los propios clientes, fans o usuarios de Internet. Este término se ha generalizado y puesto en práctica sobre todo para fomentar la participación en las redes sociales.',
    },
    {
      termino: '<em>Dashboard</em>',
      significado:
        'es el área de administración de un <i>blog</i>, conocido por todos como escritorio, desde donde se puede gestionar todas las opciones.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'es la sensación de pertenencia y unión emocional entre una marca y un usuario. Es el objetivo de toda marca o empresa en redes sociales basar la estrategia en <em>marketing</em> de contenidos y generar en cada una de las redes la mayor participación posible.',
    },
    {
      termino: '<em>Fanpage</em>',
      significado:
        'también llamada “página de <i>fans</i>”, es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una <i>fan</i> page no tiene límite de <i>fans</i> y es posible tener acceso a la información estadística de la página.',
    },
    {
      termino: '<em>Feed</em>',
      significado:
        'también conocido como RSS <i>(Really Simple Syndication)</i>, es el formato en el que se comparte el contenido de los <i>blogs</i>.',
    },
    {
      termino: 'Geolocalización',
      significado:
        'término que hace referencia al posicionamiento y a la localización geográfica de un negocio, una persona o un lugar a través de coordenadas que permiten situar cualquier elemento en el mapa. Es una herramienta fundamental para aplicaciones a través del <em>mobile marketing</em>.',
    },
    {
      termino: '<em>Hashtag</em>',
      significado:
        'es una etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que transmite una idea, un nombre o un concepto que normalmente va asociado con un mensaje o texto. Su uso se ha extendido principalmente en redes sociales como X, Instagram o Google Plus.',
    },
    {
      termino: 'Influenciador',
      significado:
        'en <i>social media</i> es aquella persona que tiene la capacidad para viralizar y compartir contenidos con un amplio número de personas.',
    },
    {
      termino: 'KPI',
      significado:
        'son las siglas de <i>Key Performance Indicator</i>; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de <i>social media marketing</i>.',
    },
    {
      termino: '<em>Marketing</em> de contenidos',
      significado:
        'son estrategias de <em>marketing</em> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios, principalmente a través del <em>blog</em> y del <em>social media marketing</em>.',
    },
    {
      termino: 'Metadatos',
      significado:
        'es un código que se estructura al inicio de un sitio web para clasificar el tipo de información que describe a su vez otro elemento, del cual se puede obtener información detallada de sus características.',
    },
    {
      termino: 'Reputación <em>online</em>',
      significado:
        'es el conjunto de opiniones y experiencias (positivas o negativas) de usuarios y consumidores que giran en torno a una marca, un producto o una empresa, generados en el entorno 2.0 y en las redes sociales.',
    },
    {
      termino: '<em>Retargeting</em>',
      significado:
        'es una nueva técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizado de productos y servicios en los que se está más receptivo a recibir información. Este tipo de prácticas se hacen posibles si y solo si los usuarios admiten voluntariamente que aceptan <em>cookies</em> cuando navegan en determinado sitio.',
    },
    {
      termino: 'ROI',
      significado:
        'son las siglas en inglés de <i>Return On Investment</i>, que significa retorno de la inversión. Es un indicador que mide el beneficio frente al gasto de la inversión de un proyecto de <em>social media marketing</em>, en función de los objetivos y las metas logrados.',
    },
    {
      termino: '<em>Segmentar</em>',
      significado:
        'en redes sociales es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo.',
    },
    {
      termino: '<em>Status report</em>',
      significado:
        'documento informativo del estado de los planes de acción en las diferentes estrategias de <i>social media</i>, que incluye datos cuantitativos y cualitativos provenientes del resultado de la analítica web.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'técnica de <em>marketing</em> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual.',
    },
    {
      termino: '<i>TT</i>',
      significado:
        'son las siglas de <i>Trending Topic</i>; es una de las abreviaturas más famosas de X para asignar los temas más importantes e influyentes del momento. Se pueden ver los <i>trending topic</i> según el país o la ciudad a través de https://trends24.in/',
    },
    {
      termino: 'Viral',
      significado:
        'un contenido viral, del tipo que sea, es aquel que se difunde y se comparte como la pólvora entre diferentes usuarios y a través de diferentes medios y redes sociales. El objetivo de cualquier campaña de <em>marketing</em> es “viralizar” sus contenidos.',
    },
    {
      termino: '<i>Webinars</i>',
      significado:
        'son eventos o conferencias que tienen lugar en el medio <i>online</i>. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales.',
    },
    {
      termino: '<i>Youtuber</i>',
      significado:
        'son las personas que crean y suben videos a YouTube y han convertido su canal en algo más que una afición. El <i>Youtuber</i> gana dinero por los anuncios de los videos o por mostrar productos patrocinados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Armstrong, G. y Kotler, P. (2003). Mercadotecnia: una introducción. Pearson Educación.',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=sLJXV_z8XC4C&oi=fnd&pg=PA9&dq=Armstrong,+G.+y+Kotler,+P.+(2003).+Mercadotecnia:+una+introducci%C3%B3n.+Pearson+Educaci%C3%B3n.&ots=IfPp2bJ0Uq&sig=GqcWamL_wMvKY4t8QORRURNIjrM#v=onepage&q=Armstrong%2C%20G.%20y%20Kotler%2C%20P.%20(2003).%20Mercadotecnia%3A%20una%20introducci%C3%B3n.%20Pearson%20Educaci%C3%B3n.&f=false',
    },
    {
      referencia:
        'Bertolotti, S. (2014). Conceptos básicos de comunicación digital.  Mincyt.gob.ar.',
      link: '',
    },
    {
      referencia:
        'Cabero, J. y Llorente, M. (2007). La interacción en el aprendizaje en red: uso de herramientas, elementos de análisis y posibilidades educativas. Revista Iberoamericana de Educación a Distancia. 10(2), p. 97-123.',
      link: 'https://revistas.uned.es/index.php/ried/article/view/995',
    },
    {
      referencia:
        'Cambridge Dictionary. (s.f.). Definición de la palabra:  reporte. Cambridge Dictionary',
      link: 'https://dictionary.cambridge.org/dictionary/english/report ',
    },
    {
      referencia:
        'Gálvez, A. y Tirado, F. (2006). Sociabilidad en pantalla. Un estudio de la interacción en los entornos virtuales. UOC.',
      link: 'https://ddd.uab.cat/record/14652',
    },
    {
      referencia:
        'IMT. (s.f.). La atención al cliente a través de redes sociales [video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=lsGZ94JrXUY',
    },
    {
      referencia:
        'Jenkins, H. (2001). La cultura de la convergencia de los medios de comunicación. Paidós.',
      link:
        'https://stbngtrrz.files.wordpress.com/2012/10/jenkins-henry-convergence-culture.pdf',
    },
    {
      referencia:
        'Kotler, P. y Armstrong, G. (2013). Fundamentos de <em>marketing</em>. Pearson.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf',
    },
    {
      referencia:
        'Real Academia de la Lengua Española. (2021). Definición de reporte. RAE.',
      link: 'https://dle.rae.es/reporte',
    },
    {
      referencia:
        'Sánchez, A. (2006). Peter Drucker, innovador maestro de la administración de empresas. Cuadernos Latinoamericanos de Administración.',
      link: 'https://www.redalyc.org/pdf/4096/409634344005.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Navarro Macías',
          cargo: 'Experto Temático',
          centro: 'Regional Norte de Santander - Centro CIES',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tag Pinzón',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
