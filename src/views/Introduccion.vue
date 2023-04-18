<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p La gestión TI va mucho más allá del componente administrativo como tal, es decir; no solamente se enfoca en realizar supervisión y monitoreo a cada dispositivo que compone la plataforma tecnológica, también se debe realizar una proyección que estén encaminados en fortalecer la prestación de servicios generales de la compañía. Para saber los recursos humanos necesarios para administrar dicha infraestructura, se requiere conocer con exactitud cada dispositivo vinculado, a través de un inventario y control del mismo, adicional a lo anterior; conocer los costos y tener una proyección de estos permite realizar un aprovisionamiento de insumos, materiales, mano de obra, entre otros, que permita ejecutar cada actividad sin novedades, adquirir conocimientos sobre el cliente, sus obligaciones y derechos, aplicando el alcance jurídico y financiero que se requiera. 
    
    .row.justify-content-between.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4
          p.mb-0 En este componente formativo se conocerán aspectos administrativos del proyecto TI que le ayudarán a reconocer los actores que intervienen en cada una de las fases, también costos, recursos y la distribución de actividades según el perfil de cada cargo; adicionalmente, aspectos como el manual de funciones, su posición como cliente y la normativa que desde el gobierno nacional lo protege. 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        .row.justify-content-center
          .col-10
            img(src="@/assets/curso/intro/img01.svg")
      
    .h5 En el siguiente video conocerá de forma general, la temática que estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!
    .h5.mb-5 ¡Bienvenido! 

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/NpPEktD2L8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
