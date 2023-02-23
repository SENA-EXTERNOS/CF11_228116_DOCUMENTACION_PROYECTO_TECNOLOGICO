<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Cargos
    
    .bloque-texto-g.color-secundario.bloque-40.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Un cargo se emplea para definir un empleo u oficio, también como la “obligación de hacer cumplir algo”, incluyendo cuidado de los equipos, maquinaria, elementos de protección personal y demás que le sean entregados para desempeñar su función dentro de una empresa.

    .row.justify-content-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-acento-contenido.cajon-full.p-3.mb-0
          .h4.mb-0 Obligación del cargo
        .cajon-b.color-acento-contenido.cajon-end-1.p-3.mb-4
          p.mb-0 Con respecto al término cargo, Chruden, H. y Sherman, A. (1963) lo definen como: “una unidad de organización que conlleva un grupo de deberes y responsabilidades que lo vuelven separado y distinto de otros cargos”. Livy, B. (1975) plantea que un cargo es “la composición de todas aquellas actividades desempeñadas por una sola persona que pueden ser miradas por un concepto unificado, y que ocupan un lugar formal en el organigrama”.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema9/img02.png")
    
    h2 Tipo de cargos en proyectos TI

    p.mb-5 En el área TI, a la hora de ejecutar un proyecto generalmente se encontrarán los siguientes perfiles:
    .h4.mb-5 Perfiles para un proyecto

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      ImagenInfografica.color-secundario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema9/img03.svg')
        .BGR01.p-3(x="6.6%" y="12.3%" numero="1")
          .h5.mb-2 Gerente del proyecto
          p.mb-0 Responsable de la asignación de recursos, define actividades, revisa y aprueba.
        .BGR01.p-3(x="27.5%" y="12.3%" numero="2")
          .h5.mb-2 Líder del proyecto
          p.mb-0 Atiende las necesidades del personal asociado al proyecto TI, establece control de avance, brinda soluciones a las inquietudes presentes durante la ejecución de las tareas de su personal a cargo, dicho en pocas palabras se encarga de la ejecución del proyecto.
        .BGR01.p-3(x="48.2%" y="12.3%" numero="3")
          .h5.mb-2 Analista de sistema
          p.mb-0 Ingeniero encargado de realizar todo el análisis de requerimientos para el diseño del sistema, debe tener presente las necesidades corporativas, dar respuesta a cada involucrado con el sistema y proponer soluciones.
        .BGR01.p-3(x="69%" y="12.3%" numero="4")
          .h5.mb-2 Diseñador
          p.mb-0 Garantiza el cumplimiento de las necesidades del sistema de acuerdo con las normativas, también permite implementar características como la accesibilidad, navegabilidad, interactividad y usabilidad, para permitir al usuario final una experiencia de fácil uso.
        .BGR01.p-3(x="19.3%" y="57.6%" numero="5")
          .h5.mb-2 Ingeniero de <i>software</i>
          p.mb-0 Define y mantiene el código fuente, depura errores y realiza pruebas de uso.
        .BGR01.p-3(x="40%" y="57.6%" numero="6")
          .h5.mb-2 Responsable de calidad
          p.mb-0 Garantiza el cumplimiento de los compromisos, revisando cada fase y haciendo seguimiento a cada tarea.
        .BGR01.p-3(x="60.9%" y="57.6%" numero="7")
          .h5.mb-2 Responsable de prueba
          p.mb-0 Asegura la disponibilidad de cada producto, genera el repositorio del proyecto, documentación durante el ciclo del proyecto.
        .BGR01.p-3(x="81.8%" y="57.6%" numero="8")
          .h5.mb-2 Cliente
          p.mb-0 Define los requerimientos del sistema, verifica la validación del producto entregado, acepta de conformidad lo pactado, cierra el proyecto.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="flip-up")
        .BGR07.p-4
          .row.justify-content-around.align-items-center
            .col-lg-1.col-sm-2.col-3
              img(src="@/assets/curso/tema8/img10.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Gestión de Proyectos de TI
                  p.text-white.text-small Para profundizar conocimientos sobre gestión de proyectos de TI, se sugiere revisar el siguiente material: 
                  p.text-white.text-small.mb-0 Gestión de proyectos de TI: guía para gerentes y equipos (18 jul 2022). Equipo Asana. 
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://asana.com/es/resources/it-project-management" target="_blank")
                    span Enlace web
                    i.fas.fa-link 
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, como son la síntesis, la actividad didáctica, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema9',
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
