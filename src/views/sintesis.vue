<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo Métricas de impacto en la gestión comercial digital, explora la creciente relevancia del #[em marketing] digital, una estrategia que ha integrado diversas disciplinas como el mercadeo, la tecnología, la psicología y la economía. Este enfoque multidisciplinario ha dado lugar al desarrollo de herramientas tecnológicas y #[i software]  estadístico, que permiten un seguimiento preciso de procesos clave. Se abordan especialmente las plataformas especializadas para realizar mediciones en redes sociales, evaluando así el impacto de la marca o el producto en el público. Este componente formativo busca proporcionar una comprensión integral de las métricas de impacto y su aplicación en la gestión comercial digital.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se muestra que el uso de métricas y análisis de datos ha permitido a las empresas comprender mejor y progresar en su conexión con los clientes, a través del análisis de datos, los indicadores claves KPI, interacciones, reacciones y comentarios.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
