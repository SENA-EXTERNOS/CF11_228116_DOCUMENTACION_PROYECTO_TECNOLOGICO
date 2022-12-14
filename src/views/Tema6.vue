<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Manual de funciones
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-acento-botones.p-4
          p.mb-0 Dentro de las técnicas de administración del personal, una de las más efectivas a la hora de facilitar la administración y gestión del recurso humano, corresponde a la creación de manuales de funciones, así se podrá tener un documento que permita delimitar el alcance de cada puesto de trabajo y aplicar técnicas de selección que permitan encontrar el personal idóneo para cada cargo en la compañía.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        .row.justify-content-center
          .col-9
            img(src="@/assets/curso/tema6/img01.svg")
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10
        .BGR07.p-4
          .row.justify-content-around.align-items-center
            .col-lg-1.col-sm-2.col-3
              img(src="@/assets/curso/tema6/img02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Manual de funciones
                  p.text-white.text-small.mb-0 Para ampliar la información, se invita a ver el Anexo 2. Manual de funciones, en el cual se nombran las técnicas de selección de personal, los elementos y beneficios que debe contener este documento.
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('downloads/Anexo2_Manual_funciones.pdf')" target="_blank")
                    span Ver anexo
                    i.fas.fa-eye
    
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Tipo de manuales
    
    p Como se ha visto, un manual permite coordinar el recurso humano desde cada cargo dentro de la compañía, además proporciona dirección e instrucciones precisas para guiar cada tarea según la función a desempeñar. 
    .h4 Tipos de manuales

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema6/img03.svg')
        .BGR11.p-3(x="9.5%" y="29%" numero="1")
          .h5.mb-2 Manual organizacional
          p.mb-0 Contiene el resumen general que permite el manejo y administración empresarial, indica la estructura organizacional, las funciones y roles de cada área o departamento, es genérico y debe ser conocido por todos los integrantes de la empresa (trabajadores, personal administrativo, entre otros).
        .BGR11.p-3(x="18.4%" y="61%" numero="2")
          .h5.mb-2 Manual departamental
          p.mb-0 Regula la ejecución de las funciones y actividades, pero en cada área o departamento de la empresa, enseñan las operaciones de cada área de manera particular.
        .BGR11.p-3(x="36.5%" y="61%" numero="4")
          .h5.mb-2 Manual de política
          p.mb-0 Enmarca todos los aspectos políticos empresariales, permite dar un horizonte claro a los ejecutivos de la compañía.
        .BGR11.p-3( x="45%" y="29%" numero="5")
          .h5.mb-2 Manual de procedimiento
          p.mb-0 Posee el paso a paso para llevar a cabo cada actividad o tarea de manera adecuada, contiene la secuenciación de pasos lógicos con sus instrucciones permitiendo que cada tarea se lleve eficientemente.
        .BGR11.p-3(x="27.2%" y="29%" numero="3")
          .h5.mb-2 Manual de técnicas
          p.mb-0 Es un complemento al manual de procedimiento, permite conocer las técnicas que se requieren para que cada tarea se pueda cumplir a cabalidad.
        .BGR11.p-3(x="54%" y="61%" numero="6")
          .h5.mb-2 Manual de bienvenida
          p.mb-0 Contiene la historia de la compañía, objetivos, misión, visión, derechos, funciones y todo el marco general de la empresa. Se entrega a los nuevos miembros o trabajadores de la empresa.
        .BGR11.p-3(x="62.7%" y="29%" numero="7")
          .h5.mb-2 Manual de puesto
          p.mb-0 Responsabilidades, características y funciones del puesto de trabajo.
        .BGR11.p-3(x="81.7%" y="29%" numero="9")
          .h5.mb-2 Manual de finanzas
          p.mb-0 Dirige la administración de todos los bienes de la compañía.
        .BGR11.p-3(x="71.7%" y="61%" numero="8")
          .h5.mb-2 Manual de sistema
          p.mb-0 A la hora de implementar el sistema de información, se entrega a cada trabajador un manual que explica cada actividad que deberá realizar en el sistema de acuerdo con sus funciones, posee el paso a paso para utilizar el sistema según el rol designado.
        .BGR11.p-3(x="90.6%" y="61%" numero="10")
          .h5.mb-2 Manual de calidad
          p.mb-0 Políticas de calidad empresarial midiendo la productividad, eficiencia, calidad de servicio.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Clasificación de manuales
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4
          .h4 Los manuales se pueden clasificar en generales y específicos
          p.mb-0 Los manuales generales contienen información global de la compañía, son para uso de todos los integrantes de la empresa, a diferencia de los específicos que se crean para dar respuesta a cada área de la empresa, se estipulan procesos, funciones propias de cada departamento y cargos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema6/img04.svg")

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Característica de manual

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .h5 Las características más comunes que un manual debe presentar son:
        ul.lista-ul--color
          li
            i.fas.fa-puzzle-piece(style="color: #FD9927")
            | Redacción en un lenguaje amigable, así garantiza que el lector comprenda todos los aspectos relevantes a su quehacer diario.
          li
            i.fas.fa-puzzle-piece(style="color: #FD9927")
            | Contar con un diseño que permita su fácil actualización.
          li
            i.fas.fa-puzzle-piece(style="color: #FD9927")
            | Cumplir con la función para la cual fue creado.
          li
            i.fas.fa-puzzle-piece(style="color: #FD9927")
            | Esquema claro, tabla de contenido, introducción, instrucciones, cuerpo, flujograma, glosario de términos, conclusiones, recomendaciones y anexos.
          li
            i.fas.fa-puzzle-piece(style="color: #FD9927")
            | Recordar que los manuales de calidad hacen parte de los requisitos básicos para la obtención del certificado ISO 9001:2008.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema6/img05.png")

</template>

<script>
export default {
  name: 'Tema6',
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
