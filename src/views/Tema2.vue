<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Costos
    
    .bloque-texto-g.color-primario.bloque-40.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El costo también conocido como coste, es el desembolso económico que se realiza para la producción de algún bien o la oferta de algún servicio. En él, se incluyen todos los actores y factores que intervienen en el proceso como lo son: mano de obra, insumos, gastos en producción, gastos administrativos, entre otros. 
  
    h2 Tipos de costos
    
    p Existen varios tipos de costos, la manera en la que se deben calcular puede variar de una empresa a otra.
    p Los costos se pueden clasificar según diferentes criterios de acuerdo con la siguiente información:

    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="BGR02")
          div(titulo="Según su comportamiento: fijos")
            p.mb-0 Solo se pueden tener en cuenta a corto plazo, hacen parte de los pagos que se deben realizar independientemente del nivel de operación, producción, ingresos. Algunos ejemplos son: internet, salarios, rentas de oficinas, servicios públicos, seguros, impuestos, entre otros.
          div(titulo="Según su comportamiento: variables")
            p.mb-0 Costos que cambian de acuerdo con la producción, por ejemplo, a mayor cantidad de producción mayor cantidad de materia prima a utilizar.
          div(titulo="Según su comportamiento: semi variable")
            p.mb-0 Poseen en su esencia un elemento fijo y otro variable, varían al momento de surgir determinados cambios en la producción o venta. Ejemplos: materiales indirectos, energía eléctrica.
          div(titulo="Según la relación entre los factores de producción y los productos: directos")
            p.mb-0 Se aplican a la producción total y no sobre algún elemento que intervino en ella, se debe repartir este rubro de manera equitativa entre toda la producción obtenida. Ejemplo: aumento en el salario de los empleados, insumos de limpieza, entre otros.
          div(titulo="Según la relación entre los factores de producción y los productos")
            p.mb-0 Se pueden aplicar a un bien o servicio producido en particular. Por ejemplo, la tinta o los tonner para las impresoras, al aumentar el valor del insumo se puede aplicar dicho costo sobre el total de impresiones obtenidas, para conocer su valor de producción real.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img02.svg")

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img03.svg")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="BGR02")     
          div(titulo="Según su naturaleza: mano de obra")
            p.mb-0 Costos que se derivan del pago de salarios, incluido el personal administrativo.
          div(titulo="Según su naturaleza: materia prima")
            p.mb-0 Todos los elementos necesarios que se utilizan para la producción.
          div(titulo="Según su naturaleza: financieros")
            p.mb-0 Necesarios para el financiamiento del negocio.
          div(titulo="Según su naturaleza: distribución")
            p.mb-0 Costos que se aplican a la hora de realizar la entrega final del producto, transporte, distribución, entre otros.
          div(titulo="Según su naturaleza: tributarios")
            p.mb-0 Costos relacionados con el pago de impuestos para que la empresa funcione con normalidad y bajo los lineamientos nacionales.

    p Los costos y los gastos a veces se usan de manera errónea. Aunque pueden llegar a tener similitudes, en contabilidad tienen diferente significado. 

    .bloque-texto-g.color-secundario.bloque-40.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img04.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        img.img-02.col-lg.d-none.d-lg-flex(src="@/assets/curso/temas/img02.svg")
        p.mb-0 El costo hace referencia a la inversión que se realiza para producir un bien o un servicio, es decir; una inversión que regresará como ganancia más adelante. Por el contrario, un gasto lo realiza la empresa, pero no tiene que ver directamente con la producción, por tanto, no se relaciona con las ganancias. 

    
    .row.justify-content-center.align-items-center.BGR03.p-4.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img05.svg")
      .col-lg-8(data-aos="fade-left")
        h3 Modelo de costo de servicio TI
        p Ahora bien, con los conceptos adquiridos se pueden estructurar los costos del proyecto de infraestructura, teniendo en cuenta todos los factores que intervienen en el proceso. Si desea conocer un modelo de costos de servicio TI, se invita a revisar el siguiente material:
        p Modelo de costos de servicios de tecnologías de información en instituciones de educación superior, de la Universidad de Pamplona.
        a.boton.color-acento-contenido(href="https://documentas.redclara.net/bitstream/10786/1131/1/MODELO%20DE%20COSTOS%20DE%20SERVICIOS%20DE%20TECNOLOG%C3%8DAS%20DE%20INFORMACI%C3%93N%20EN%20INSTITUCIONES%20DE%20EDUCACI%C3%93N%20SUPERIOR.pdf" target="_blank")
          span Enlace web
          i.fas.fa-link

    .row.justify-content-center.align-items-center.BGR03.p-4.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img06.svg")
      .col-lg-8(data-aos="fade-left")
        
        h3 Normas vigentes y la reglamentación
        p Para conocer las normas vigentes y la reglamentación en el modelo de gestión de proyectos TI en Colombia, por favor consulte el siguiente material:
        p Documento maestro del modelo de gestión de proyectos TI, del Ministerio de las TIC (CO) MGPTI.G.GEN.01 (noviembre 10 de 2022).
        a.boton.color-acento-contenido(href="https://www.mintic.gov.co/arquitecturati/630/articles-144766_recurso_pdf.pdf" target="_blank")
          span Enlace web
          i.fas.fa-link

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
