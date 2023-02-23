<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inventario
      
    .row.justify-content-between.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p El inventario permite tener control y gestión sobre los recursos. El manejo y control de este, permite seguir el movimiento de materias primas, insumos, materiales, recursos y demás, también requiere seguimiento de cada elemento a medida que avanza en una línea de producción o su utilización dentro de la compañía para su depreciación. El control de inventarios tiene como objetivo principal alinear niveles de existencia para agilizar el flujo completo, desde el abastecimiento, pasando por almacenamiento y posterior venta.
        .cajon.color-primario.p-4
          p.mb-0 La gestión de inventario por norma requiere la recopilación de datos y registro de elementos relacionados, que garanticen el control y seguimiento de cada activo o elemento que ingresa o posee la empresa.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img01.svg")
      
    .bloque-texto-g.color-secundario.BGR04.bloque-40.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img02.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        img.img-01.col-lg.d-none.d-lg-flex(src="@/assets/curso/temas/img02.svg")
        .h4 Gestión de Inventario<br><br>
        p.mb-0 La gestión de inventario por norma requiere la recopilación de datos y registro de elementos relacionados, que garanticen el control y seguimiento de cada activo o elemento que ingresa o posee la empresa.<br><br>Estos datos representan una unidad dentro del sistema, factores como la ubicación, fecha de compra, período de garantía, control de mantenimiento, entre otros. Permite dar trazabilidad y realizar seguimiento a cada activo dentro del aplicativo de administración y control.

    p Realizar la gestión de un inventario requiere cinco fases, que se convierten en política organizacional y apunta a garantizar el cumplimiento de cada una de ellas para beneficio de la empresa. A continuación, se especifican cada una de ellas:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/img03.png')
        .BGR01.p-3(x="12%" y="19%" numero="1")
          .h5.mb-2 Comprobación
          p.mb-0 Se cuenta con una lista de control que permite identificar todos los activos, se deberá realizar una verificación del inventario físico versus la cantidad de activos en el sistema. 
        .BGR01.p-3(x="32%" y="19%" numero="2")
          .h5.mb-2 Auditoría Interna
          p.mb-0 Se realiza de manera periódica para garantizar el control y administración de los activos fijos en el sistema, a través de la supervisión del cumplimiento de los estándares organizacionales de activos fijos. 
        .BGR01.p-3(x="53%" y="19%" numero="3")
          .h5.mb-2 Seguimiento
          p.mb-0 Se debe realizar seguimiento al activo fijo desde el proceso de compra, recibo, carga al sistema, entrega y custodia de este, así se asegura la cadena completa y se refuerza toda la gestión del inventario. 
        .BGR01.p-3(x="20%" y="54.5%" numero="4")
          .h5.mb-2 Almacenamiento
          p.mb-0 El inventario deberá garantizar que los activos fijos se encuentren en custodia, no solo cuando se entregan al usuario final sino también en bodega, por ello se deben implementar políticas de seguridad que permitan controlar las existencias de activos almacenados. 
        .BGR01.p-3(x="42%" y="54.5%" numero="5")
          .h5.mb-2 Auditoría a Terceros
          p.mb-0 El ciclo completo se cierra a la hora de contar con proveedores que cumplan con los estándares requeridos, además que garanticen el aprovisionamiento de los recursos y activos a la hora de ser requeridos, contar con excelentes suministros, permite suplir las demandas corporativas, por ello resulta importante realizar evaluación y seguimiento a los proveedores. 

    h2 Política de inventarios
    
    p Las políticas de inventarios permiten que las instrucciones y métodos dados por la gerencia o dirección empresarial se apliquen en pro de la gestión de los recursos, es decir; cómo se administra el inventario desde el stock, ubicación, entre otros aspectos; con el fin de evitar pérdidas, daños y optimizar los costos. 
    p Recuerde que el inventario se refiere a todas las existencias de la empresa, equipos, edificaciones, automotores, entre otros, por tanto, la política de inventario también estipula que se debe contar con disponibilidad suficiente de activos para atender la demanda. Algunos de los factores a considerar a la hora de implementar una política de inventario son:

    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="BGR02A")
          div(titulo="Nivel de satisfacción esperado")
            p.mb-0 Corresponde al estado del producto, tiempo de entrega, todos los elementos que intervienen en el activo y que aseguran la satisfacción del usuario final garantizando el cumplimiento de la función o funciones que desempeñará de acuerdo con las necesidades corporativas.
          div(titulo="Condiciones del proveedor")
            p.mb-0 Se deben contemplar aspectos como la cantidad de suministros que se deben comprar, tiempo de entrega del elemento solicitado, tipo de pago, entre otros.
          div(titulo="Tiempo de reabastecimiento")
            p.mb-0 Considerado el lapso que transcurre mientras se realiza la solicitud del activo y su entrega por parte del proveedor.
          div(titulo="Patrones de demanda")
            p.mb-0 Hace referencia a la cantidad de elementos solicitados en un periodo de tiempo, calculando el pedido que se debe solicitar al proveedor, así se podrán prever imprevistos y garantizar la continuidad de los insumos requeridos para el funcionamiento de la empresa.
          div(titulo="Características del activo")
            p.mb-0 Al conocer las características del elemento, se pueden establecer patrones de uso, almacenamiento y rotación dentro del inventario. No es lo mismo una subestación eléctrica que una unidad de procesamiento central (UPS, por sus siglas en inglés), ambos parámetros permiten calcular tiempo de uso y depreciación.
          div(titulo="Frecuencia del inventario")
            p.mb-0 Mensual, trimestral, anual o en tiempo real, la frecuencia garantiza el control y gestión del inventario.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img04.svg")

    h2 Herramienta de inventarios
    
    p.mb-5 Las herramientas garantizan que el proceso de inventario se lleve de manera sencilla y ordenada, algunas de las herramientas más utilizadas son:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      SlyderB(:datos="datosSlyder")


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Recopilación de datos con código de barra',
        texto:
          'Identifica el activo fijo antes de cargarlo al sistema con un código de barras. Para su control se lee dicho código, así se agiliza el tiempo, mejorando la fiabilidad y precisión del inventario.',
        imagen: require('@/assets/curso/tema1/img05.jpg'),
      },
      {
        titulo: 'Recuento cíclico',
        texto:
          'Se cuenta periódicamente los activos más importantes y se rezagan los activos menos importantes, permite disminuir los costos y garantiza encontrar fallas en una cadena de suministro.',
        imagen: require('@/assets/curso/tema1/img06.jpg'),
      },
      {
        titulo: 'Análisis ABC',
        texto:
          'Se distribuyen los elementos del más al menos importante así:<br><br><span style="background-color: #0B5999; padding: 5px; color: #fff">A</span> Artículos de mayor prioridad.<br><br><span style="background-color: #0B5999; padding: 5px; color: #fff">B</span> Artículos de prioridad media.<br><br><span style="background-color: #0B5999; padding: 5px; color: #fff">C</span> Artículos de prioridad baja.',
        imagen: require('@/assets/curso/tema1/img07.jpg'),
      },
      {
        titulo: '<em>Software</em> de gestión de inventario',
        texto:
          'Permite automatizar muchas tareas y en conjunto, con otras herramientas, garantiza la eficiencia en la toma del inventario y reducción en el tiempo de ejecución de este.',
        imagen: require('@/assets/curso/tema1/img08.jpg'),
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
