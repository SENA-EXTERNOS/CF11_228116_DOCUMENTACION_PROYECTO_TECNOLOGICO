<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Portafolio
      
    .row.justify-content-between.mb-4
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema7/img01.svg")
      .col-lg-10(data-aos="fade-left")
        .cajon-b.color-primario.p-3.mb-0
          p.mb-0 El portafolio de servicios es un documento que contiene toda la información relevante a los servicios, productos o bienes con los que una empresa, emprendedor o #[em freelance] cuenta.
        .cajon-b.color-primario.cajon-gray.cajon-end.p-3.mb-4
          p.mb-0 El portafolio ofrece de manera directa al cliente una gama de elementos que permiten conocer el perfil de la persona a contratar a través de trabajos realizados, contactos y referencias, también funciona como una tarjeta de presentación que contiene detalles importantes sobre el negocio.

    .h4.mb-5 Portafolio
    p.mb-4 Las secciones o partes con las que debe contar un portafolio de servicio son: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta(style="background-color: #0B5999")
              span 1
            | Presentación. 
          li 
            .lista-ol--cuadro__vineta(style="background-color: #0B5999")
              span 2
            | Objetivos.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #0B5999")
              span 3
            | Misión y valores.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #0B5999")
              span 4
            | Certificaciones.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #0B5999")
              span 5
            | Sociedades.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #0B5999")
              span 6
            | Clientes.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #0B5999")
              span 7
            | Proveedores.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #0B5999")
              span 8
            | Servicios.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #0B5999")
              span 9
            | Proyectos.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #0B5999")
              span 10
            | Contacto.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema7/img02.png")


    h3 Tipo de portafolio de servicio
    
    p Los tipos de portafolio que hoy en día se utilizan son:

    .BGR12.p-4.mb-5(data-aos="zoom-in")
      SlyderA.slyder-blue(tipo="b")
        .row.justify-content-between.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Físico
            p.mb-0 Elemento que se entrega de manera física a la persona interesada y en el cual, se encuentra toda la información relevante según su necesidad, esta debe ser clara y precisa.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img03.png")
        .row.justify-content-between.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Digital
            p.mb-0 El portafolio digital es el más utilizado actualmente, permite conocer toda la oferta de bienes, productos y/o servicios que una compañía posee de manera virtual, se comparte a través de un enlace al cual los interesados acceden, encontrarán en él, un documento que puede ser compartido a través de correo, chat, mensaje, entre otros. Puede ser visualizado desde un teléfono inteligente, tableta, computador. Un portafolio digital deberá diseñarse pensando en su distribución <i>online.</i> 
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img04.png")

    .h4 Gestión estratégica de proyectos
    p.mb-5 Ahora bien, un portafolio TI, se enfoca en presentar los servicios que el área pone a disposición de la compañía. Su gestión estratégica está enmarcada en:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      SlyderB(:datos="datosSlyder")
    
    .BGR02B.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema7/img08.png")
        .col-lg-6(data-aos="fade-left")
          
          h3 Portafolio de servicios TIC
          p Para conocer el portafolio de servicio TIC de la oficina de tecnologías de la información del Departamento Nacional de Planeación y el portafolio de servicio TI del Ministerio de Agricultura, se invita a revisar el siguiente material:

    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10
        .BGR07.p-4
          .row.justify-content-around.align-items-center
            .col-lg-1.col-sm-2.col-3
              img(src="@/assets/curso/tema7/img09.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Portafolio de servicios TIC
                  p.text-white.text-small.mb-0 Portafolio de Servicio TI. (2019). de Ministerio de agricultura de Colombia. Accediendo al siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.minagricultura.gov.co/SIG/DocumentosSIG/19GESTION_DE_SERVICIOS_TICS/Gu%C3%ADa-Portafolio-de-Servicios-V2.pdf" target="_blank")
                    span Ver anexo
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Procesos',
        texto:
          'Planificar, crear, evaluar, balancear cada elemento para asignar recursos, de acuerdo con el grado de complejidad y criticidad del servicio.',
        imagen: require('@/assets/curso/tema7/img05.jpg'),
      },
      {
        titulo: 'Herramientas',
        texto:
          'Entrega de aplicaciones que permite que los usuarios tengan acceso a los servicios de la mesa de ayuda, a través de una interfaz de fácil uso. El equipo TI pone a disposición un portafolio de estrategias, para garantizar el funcionamiento del sistema en un estado de óptimo desempeño.',
        imagen: require('@/assets/curso/tema7/img06.jpg'),
      },
      {
        titulo: 'Gobernabilidad',
        texto:
          'Se crea una estructura de trabajo TI en la mesa de ayuda, así se podrán distribuir los servicios asignados, administrar los recursos e insumos según necesidades de la compañía.',
        imagen: require('@/assets/curso/tema7/img07.jpg'),
      },
    ],
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
