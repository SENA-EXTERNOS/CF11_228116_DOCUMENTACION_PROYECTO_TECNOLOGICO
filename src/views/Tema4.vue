<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cliente
    
    .bloque-texto-g.color-secundario.BG08.bloque-40.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El cliente es aquella persona o empresa que adquiere los bienes o servicios que la compañía produce. No necesariamente se habla de una transacción monetaria, por ejemplo, para el equipo de mesa de ayuda los usuarios que adquieren sus servicios, bien se pueden llamar clientes de la mesa de ayuda.
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Ley del consumidor
    
    .row.justify-content-between.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center
          .col-9
            img(src="@/assets/curso/tema4/img02.svg")
      .col-lg-7(data-aos="fade-left")
        .cajon.color-secundario.p-4
          p.mb-0 La Ley del consumidor busca su protección creando unos lineamientos nacionales que promueven y garanticen los derechos a cada uno de ellos, además amparar su dignidad e intereses económicos en cinco pilares esenciales que son:

    .h4 Lineamientos nacionales

    .BGR02.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema4/img03.svg")
        .col-lg-6
          .tarjeta.tarjeta--blanca.p-3.mb-4
            .mb-0.d-flex
              .d-flex.flex-wrap.align-items-center.pe-4
                img(src='@/assets/curso/tema4/img04.svg' style="max-width: 32px;" data-aos="fade-right")
                p.col.mb-0(style="margin-left: 16px" data-aos="fade-left") Protección contra riesgos de salud y seguridad.
          .tarjeta.tarjeta--blanca.p-3.mb-4
            .mb-0.d-flex
              .d-flex.flex-wrap.align-items-center.pe-4
                img(src='@/assets/curso/tema4/img05.svg' style="max-width: 32px;" data-aos="fade-right")
                p.col.mb-0(style="margin-left: 16px" data-aos="fade-left") Acceso a información pertinente que permita tomar la mejor decisión.
          .tarjeta.tarjeta--blanca.p-3.mb-4
            .mb-0.d-flex
              .d-flex.flex-wrap.align-items-center.pe-4
                img(src='@/assets/curso/tema4/img06.svg' style="max-width: 32px;" data-aos="fade-right")
                p.col.mb-0(style="margin-left: 16px" data-aos="fade-left") Educación al consumidor. 
          .tarjeta.tarjeta--blanca.p-3.mb-4
            .mb-0.d-flex
              .d-flex.flex-wrap.align-items-center.pe-4
                img(src='@/assets/curso/tema4/img07.svg' style="max-width: 32px;" data-aos="fade-right")
                p.col.mb-0(style="margin-left: 16px" data-aos="fade-left") Oportunidad de crear organizaciones de consumidores y hacer oír sus opiniones. 
          .tarjeta.tarjeta--blanca.p-3.mb-4
            .mb-0.d-flex
              .d-flex.flex-wrap.align-items-center.pe-4
                img(src='@/assets/curso/tema4/img08.svg' style="max-width: 32px;" data-aos="fade-right")
                p.col.mb-0(style="margin-left: 16px" data-aos="fade-left") Protección especial para niños, niñas y adolescentes en su calidad de consumidores. 

    .BGR09.p-4.mb-4
      .row.justify-content-between.mb-4
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema4/img09.svg")
        .col-lg-6(data-aos="fade-left")
          .titulo-segundo.color-acento-contenido
            h3 Ley del consumidor en Colombia
          p Para conocer la Ley del consumidor en Colombia se recomienda revisar el siguiente material.
          p Estatuto del consumidor y otras disposiciones (2011). Congreso de Colombia, Ley 1480 de 2011. Accediendo al siguiente enlace:
          a.boton.color-acento-contenido(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306" target="_blank")
            span Enlace web
            i.fas.fa-link

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Alcance jurídico y financiero
    
    p El consumidor goza de protección por parte del Estado, cuenta con la Ley 1480 de 2011 en la cual se establece el estatuto del consumidor y otras disposiciones, también se enmarca en la Constitución política de Colombia para reconocer la protección del consumidor. 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      SlyderB(:datos="datosSlyder")
    
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="flip-up")
        .BGR07.p-4
          .row.justify-content-around.align-items-center
            .col-lg-1.col-sm-2.col-3
              img(src="@/assets/curso/tema4/img16.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Alcance jurídico del consumidor
                  p.text-white.text-small Para conocer más sobre el alcance jurídico del consumidor se invita a revisar el siguiente material. 
                  p.text-white.text-small.mb-0 Contenido y Alcance de los Derechos del Consumidor (noviembre 11 de 2022). Márquez y Márquez. Accediendo al siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.marquezabogados.co/blog/contenido-y-alcance-de-los-derechos-del-consumidor" target="_blank")
                    span Enlace web
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Reglamentación',
        texto:
          'A partir de esto se constituye una reglamentación que permite unificar los criterios entre todos los responsables, ejerciendo control, que permite regular la calidad en los bienes y servicios ofertados a la comunidad, protegiendo con especial atención la salud y seguridad. ',
        imagen: require('@/assets/curso/tema4/img10.jpg'),
      },
      {
        titulo: 'Información clara',
        texto:
          'Se indica también que se debe entregar información clara, precisa, verificable y suficiente, para que el cliente pueda tomar una decisión de compra, por tanto, el estado protege contra publicidad engañosa.',
        imagen: require('@/assets/curso/tema4/img11.jpg'),
      },
      {
        titulo: 'Libertad de los mercados',
        texto:
          'Ahumada López (2015, p.): <br>No obstante, se debe reconocer que la gran mayoría de los países desarrollados del mundo basa su progreso y crecimiento económico en la libertad de los mercados. En ese orden de ideas, el concepto de “proteger al consumidor” parte básicamente del derecho fundamental a la libre competencia de todos los agentes participantes de la actividad económica.',
        imagen: require('@/assets/curso/tema4/img12.jpg'),
      },
      {
        titulo: 'Protección al consumidor',
        texto:
          'El Estado se encuentra en la obligación de velar por la protección del consumidor y podrá intervenir en la producción, distribución y consumo con el fin de generar desarrollo y mejorar la calidad de vida.',
        imagen: require('@/assets/curso/tema4/img13.jpg'),
      },
      {
        titulo: 'Entidades financieras',
        texto:
          'A partir de la Constitución Política del año 1991, se han implementado estrategias y normativas que apoyan al consumidor desde el aspecto financiero, así estas entidades deben proteger al consumidor y educar a sus clientes en este aspecto según los productos y servicios que se adquieran.',
        imagen: require('@/assets/curso/tema4/img14.jpg'),
      },
      {
        titulo: 'Componente financiero',
        texto:
          'Desde el componente financiero, se apoya al consumidor para que logre establecer un equilibrio y tenga una decisión de compra que no afecte negativamente su economía.',
        imagen: require('@/assets/curso/tema4/img15.jpg'),
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
