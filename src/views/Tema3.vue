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
          p Una contingencia hace referencia a un suceso que puede ocurrir en cualquier momento, es decir; existe la posibilidad que ocurra o no.  La palabra contingencia proviene del latín, de las voces con (prefijo que denota juntura o convergencia), el verbo tangere (tocar) y #[em entia] (sufijo que indica cualidad de agente). En latín, el verbo #[em contingere] se puede traducir como acontecer, concernir o atañer.
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

    h2 Aspectos claves
    
    .row.justify-content-between.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-5 A continuación, se mencionan los diferentes tipos de plan de contingencia que se pueden tener de acuerdo con el daño ocurrido en una empresa.
        .h4 Plan de contingencia.
        p.mb-0 A continuación, se mencionan algunos ejemplos de planes de contingencia teniendo en cuenta la duración del daño que haya ocurrido en la empresa.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img05.svg")
      
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .BGR06.hg-2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img06.png' alt='AvatarTop')
          h2.text-center Duración
          p.text-center.mb-0 La duración del daño determinará en gran medida el tipo de contingencia que se implementará, también el nivel de complejidad y el tiempo de reparación.
        .BGR06.hg-2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img07.png' alt='AvatarTop')
          h2.text-center Clasificación
          p.text-center.mb-0 No es lo mismo hablar de un daño en la subestación eléctrica, a la avería en el equipo del auxiliar contable; reconocer los factores de riesgo y clasificarlos de acuerdo con su tipo permitirá crear un plan de contingencia.
        .BGR06.hg-2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img08.png' alt='AvatarTop')
          h2.text-center Plan de contingencia
          p.text-center.mb-0 Este plan de contingencia debe integrar las soluciones técnicas adecuadas, recursos humanos calificados, dispositivos, equipos y presupuesto necesario para solucionar la novedad y volver el sistema a su normal funcionamiento.
        .BGR06.hg-2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img09.png' alt='AvatarTop')
          h2.text-center Tipos de contingencia
          p.text-center Algunos de los tipos de contingencia que más se usan son: 
          p.text-center.mb-0 Planes de respaldo, contingencia en <i>hardware</i> y <i>software.</i>
        .BGR06.hg-2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img10.png' alt='AvatarTop')
          h2.text-center Tipos de contingencia
          p.text-center.mb-0 Planes de emergencia o planes de recuperación, que incluyan los manuales con los procedimientos para solucionar las novedades presentadas.

    .h4 Plan de contingencia
    p Para conocer dos ejemplos de un plan de contingencia aplicado en las organizaciones, por favor consulte el siguiente material.

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BGR07.p-4
          .row.justify-content-around.align-items-center
            .col-lg-2.col-3
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Plan de contingencia tecnológica IDEP
                  p.text-white.text-small Plan de contingencia tecnológica IDEP (noviembre 10 de 2022). Alcaldía Mayor de Bogotá D.C. Accediendo a través del siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-contenido(href="http://www.idep.edu.co/sites/default/files/PL-GT-12-02%20Plan%20Contingencia%20Tecno%20V12.pdf" target="_blank")
                    span Enlace web
                    i.fas.fa-link
      .col-lg-6.col-10(data-aos="fade-left")
        .BGR07.p-4
          .row.justify-content-around.align-items-center
            .col-lg-2.col-3
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Plan de contingencia tecnológica 2022
                  p.text-white.text-small Plan de Contingencia Tecnológica 2022. (noviembre 10 de 2022). SETP Transfederal SAS, Neiva. Accediendo a través del siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.setpneiva.gov.co/images/pdf/Planes/Plan-de-ecnologia/Plan%20de%20Contingencia%20Tecnol%C3%B3gica%202022.pdf" target="_blank")
                    span Enlace web
                    i.fas.fa-link 

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
