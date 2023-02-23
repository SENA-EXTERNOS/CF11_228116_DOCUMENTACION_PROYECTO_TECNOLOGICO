<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Proyecto
    
    .row.justify-content-between.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema5/img01.png")
      .col-lg-8(data-aos="fade-left")
        p Un proyecto es la planificación y la ejecución de una serie de acciones que, siendo su fin el conseguir un objetivo determinado, se llevan a cabo. Por tanto, un proyecto no es más que un conjunto de tareas alineadas hacia el cumplimiento de un objetivo en específico que permite tener presente a todos los actores que intervienen en el proceso según la planificación, en el proyecto se deben tener en cuenta también los recursos que se deberán utilizar, más los medios para que cada actividad se lleve a cabo, por último, un proyecto no posee una estructura concreta pues se debe adaptar según la necesidad.
        .BGR07.p-4
          .row.justify-content-around.align-items-center
            .col-lg-1.col-sm-2.col-3
              img(src="@/assets/curso/tema4/img16.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Tipos de proyecto
                  p.text-white.text-small.mb-0 Para ampliar la información, se sugiere ver el Anexo 1. Tipos de Proyecto, en el cual se detallan los diferentes tipos que existen, de acuerdo a criterios y los elementos que intervienen en el mismo.
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('downloads/Anexo1_Tipos_proyecto.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    h2 Concepto de proyecto TI
    
    p.mb-5 Un proyecto TI consiste en el proceso de planear, organizar, definir actores y funciones, además de especificar el objetivo principal de este, todo enmarcado en el concepto TI de la organización.
    .h4 Objetivo del proyecto

    .BGIMG02.p-4.mb-4(data-aos="zoom-in")
      .h5 Incluye aspectos clave como lo son:
      .row.justify-content-center
        .col-lg-11.mb-4
          img(src="@/assets/curso/tema5/img03.svg")
        .col-lg-10
          .BGR01.p-4
            p.mb-0 Además de todos los riesgos que se pueden presentar, al hablar de proyectos TI, también se debe contemplar que durante la ejecución del mismo se pueden presentar cambios significativos en el #[em hardware] o tecnología requerida, o ajustes a la infraestructura física, afectación en la seguridad y gestión de la información, infraestructura de red, entre otros.

    h2 Criterio para determinar recursos
    
    p Los recursos son aquellos elementos que permiten que la ejecución del proyecto se lleve a cabo sin contratiempo, los recursos se deben tener en cuenta a la hora de planear las actividades y costos, su optimización garantiza que la inversión para ejecutar el proyecto no sea alta. 

    .BGR10.p-4.mb-4(data-aos="zoom-out")
      SlyderA(tipo="b")
        .row.justify-content-between.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Costos del proyecto
            p.mb-0 Para estimar los costos del proyecto se deben tener en cuenta aspectos como la duración, costo de cada actividad, recursos humanos y materiales, asignación de recursos, por tanto, asegurar que se cumplan los tiempos establecidos garantiza que el proyecto cumpla con su rentabilidad y se lleve a cabo según lo presupuestado.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img04.png")
        .row.justify-content-between.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Recursos
            p.mb-0 Los recursos pueden ser humanos, materiales, financieros, para realizar su seguimiento se deben crear indicadores.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img05.png")
        .row.justify-content-between.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Humanos
            p A continuación, se mencionan algunos ejemplos de indicadores según tipo de recursos:
            ul.lista-ul--color
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                | Humanos.
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                |  Horas hombre asignadas a una tarea.
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                |  Recurso humano total por tarea.
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                |  Recurso humano total del proyecto.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img06.png")
        .row.justify-content-between.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Materiales
            ul.lista-ul--color
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                | Materiales.
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                | Cantidad de insumos adquiridos.
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                | Cantidad de equipos suministrados.
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                | Porcentaje de compra de equipos.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img07.png")
        .row.justify-content-between.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Financieros
            ul.lista-ul--color
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                | Costo del proyecto.
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                | Porcentaje de gasto del presupuesto del proyecto.
              li
                i.fas.fa-puzzle-piece(style="color: #FD9927")
                | Improvistos.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img08.png")
          
    h2 Fases de un proyecto
    
    p En el siguiente video se estudiarán las diferentes etapas que componen un proyecto como son la evaluación inicial, planeación, puesta en marcha o ejecución, seguimiento y control, cierre y conclusiones. Además, se revisarán las áreas de conocimiento que lo componen.
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p El PMI o #[em Project Management Institute], se creó en 1969 y es la organización mundial dedicada a la gestión y dirección de proyectos. Esta se identifica por:

    .row.justify-content-between.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")

        ul.lista-ul--color
          li
            i.far.fa.lightbulb(style="color: #0B5999")
            | Profesionalismo en la dirección de los proyectos. 
          li
            i.far.fa.lightbulb(style="color: #0B5999")
            | Contribuir a la calidad y alcance de acuerdo a la dirección de los proyectos. 
          li
            i.far.fa.lightbulb(style="color: #0B5999")
            | Contribuir al beneficio social estimulando su aplicación global en la dirección de proyectos. 
          li
            i.far.fa.lightbulb(style="color: #0B5999")
            | Crear un espacio para compartir ideas, aplicaciones y soluciones para la dirección de proyectos. 
          li
            i.far.fa.lightbulb(style="color: #0B5999")
            | Identificar y promover lineamientos que permitan dirigir proyectos exitosos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img09.svg")

    .BGR02B.p-4.mb-4
      .row.justify-content-around.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema5/img10.svg")
        .col-lg-6(data-aos="fade-left")
          .titulo-segundo.color-acento-contenido
            h3 Metodología de PMI
          p En el siguiente video, el gerente de Procem Consultores, da más información sobre la metodología de PMI (Project Management Institute), a través de un ejemplo muy práctico, para ver el material, se invita a dar clic sobre el siguiente enlace: 

          p Gestión de proyectos. Metodología PMI (ejemplo práctico). Consultores, P. [ProcemConsultores]. (2021, July 31).

          a.boton.color-acento-contenido(href="https://www.youtube.com/watch?v=Og7iI31kwPQ" target="_blank")
            span Enlace web
            i.fas.fa-link

    .BGR02B.p-4.mb-4
      .row.justify-content-around.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema5/img11.svg")
        .col-lg-6(data-aos="fade-left")
          .titulo-segundo.color-acento-contenido
            h3 Documento maestro del modelo de gestión de proyectos TI
          p Para conocer el documento maestro del modelo de gestión de proyectos TI en Colombia, por favor consulte el siguiente material:
          p Documento maestro del modelo de gestión de proyectos TI (noviembre 10 de 2022). Ministerio de las TIC (CO) MGPTI.G.GEN.01. 
          a.boton.color-acento-contenido(href="https://www.mintic.gov.co/arquitecturati/630/articles-144766_recurso_pdf.pdf" target="_blank")
            span Enlace web
            i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema5',
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
