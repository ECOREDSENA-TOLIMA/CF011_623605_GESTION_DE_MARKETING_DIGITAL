<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <i>Engagement</i>
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Estrategias
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Técnicas e importancia

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
