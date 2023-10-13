<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 3
      h1 Contingencias TI
    
    .BGIMG01.px.mb-5.px-4.py-4
      .row.justify-content-center.align-items-center.BGR03.p-4.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img01.svg")
        .col-lg-8(data-aos="fade-left")
          p Una contingencia hace referencia a un suceso que puede ocurrir en cualquier momento, es decir; existe la posibilidad que ocurra o no.  La palabra contingencia proviene del latín, de las voces #[em con] (prefijo que denota juntura o convergencia), el verbo #[em tangere] (tocar) y #[em entia] (sufijo que indica cualidad de agente). En latín, el verbo #[em contingere] se puede traducir como acontecer, concernir o atañer.
          p Un ejemplo clásico puede ser un servidor de sistemas de nombres de dominio (#[em domain name system] DNS), todos lo requieren para acceder a las funciones de la red, por tanto, la importancia de contar con un respaldo que permita suplir las necesidades del servidor principal en caso de fallas.
          p.mb-0 No se puede predecir que falle o no el servidor principal, pero por su importancia, se debe contar con una estrategia de respaldo.


    h2 Tipo de contingencia tecnológica
    
    p De acuerdo con el grado de riesgo de la incidencia que pueda llegar a ocurrir, las contingencias se clasifican en: 

    .row.justify-content-center.mb-4
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BGR05.hg-1.p-4
          .row.justify-content-center.mb-4
            .col-lg-10.col-8
              img(src="@/assets/curso/tema3/img02.svg")
          .h4 Leves o menores
          p #[b Tiempo de recuperación]: menos de ocho horas.
          p.mb-0 No generan mucho caos, producen daños pequeños reparables de manera ágil y sencilla, afectan la operación diaria pero no la detienen.
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .BGR05.hg-1.p-4
          .row.justify-content-center.mb-4
            .col-lg.col-8
              img(src="@/assets/curso/tema3/img03.svg")
          .h4 Graves o severas
          p #[b Tiempo de recuperación]: menos de 24 horas.
          p.mb-0 Generan afectaciones al servicio en un grado de mayor severidad, requieren inversiones más significativas para su reparación.
      .col-lg-4.col-10(data-aos="fade-left")
        .BGR05.hg-1.p-4
          .row.justify-content-center.mb-4
            .col-lg-10.col-8
              img(src="@/assets/curso/tema3/img04.svg")
          .h4.mt-4 Críticas o catastróficas
          p #[b Tiempo de recuperación]: no son reparables.
          p.mb-0 Daños graves que generan gran impacto en los servicios empresariales, sus consecuencias no se pueden reparar a corto plazo.


    
    .row.justify-content-between.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-5 De acuerdo con el tipo de daño, se debe tener en cuenta: 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img05.svg")
      
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.h-100.p-4(style="background-color: #f4d6b2")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img06.png' alt='AvatarTop')
          h3.text-center Duración
          p.text-center.mb-0 La duración del daño determinará en gran medida el tipo de contingencia que se implementará, también el nivel de complejidad y el tiempo de reparación.
        .tarjeta.h-100.p-4(style="background-color: #f4d6b2")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img07.png' alt='AvatarTop')
          h3.text-center Clasificación
          p.text-center.mb-0 No es lo mismo hablar de un daño en la subestación eléctrica, a la avería en el equipo del auxiliar contable; reconocer los factores de riesgo y clasificarlos de acuerdo con su tipo permitirá crear un plan de contingencia.
        .tarjeta.h-100.p-4(style="background-color: #f4d6b2")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img08.png' alt='AvatarTop')
          h3.text-center Plan de contingencia
          p.text-center.mb-0 Este plan de contingencia debe integrar las soluciones técnicas adecuadas, recursos humanos calificados, dispositivos, equipos y presupuesto necesario para solucionar la novedad y volver el sistema a su normal funcionamiento.
        .tarjeta.h-100.p-4(style="background-color: #f4d6b2")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img09.png' alt='AvatarTop')
          h3.text-center Tipos de contingencia
          ul.lista-ul--color.nar
              li.mb-3 
                i.fas.fa-check
                p.mb-0 Planes de respaldo, contingencia en <i>hardware</i> y <i>software.</i>
            
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Planes de emergencia o planes de recuperación, que incluyan los manuales con los procedimientos para solucionar las novedades presentadas. 



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
