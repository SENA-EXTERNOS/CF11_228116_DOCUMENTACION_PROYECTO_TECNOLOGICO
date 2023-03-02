export default {
  global: {
    componenteFormativo: 'Documentación del proyecto tecnológico',
    descripcionCurso:
      'En este componente formativo se conocerán aspectos administrativos del proyecto TI que le ayudarán a reconocer los actores que intervienen en cada una de las fases, costos, recursos y la distribución de actividades según el perfil de cada cargo, adicionalmente; aspectos como el manual de funciones, su posición como cliente y la normativa que desde el gobierno nacional lo protege.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-10', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Inventario',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Costos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Contingencias TI',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Proyecto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Manual de funciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Portafolio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Atención al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Cargos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'MGPTI.G.GEN.01 - Documento Maestro del Modelo de Gestión de Proyectos TI',
      referencia:
        'Ministerio de las TIC (10 de noviembre de 2022). Documento maestro del modelo de gestión de proyectos TI. Página web institucional. Recuperado el 10 de noviembre de 2022.',
      tipo: 'Documento maestro',
      link:
        'https://www.mintic.gov.co/arquitecturati/630/articles-144766_recurso_pdf.pdf',
    },
    {
      tema:
        'Alcaldía Mayor de Bogotá D.C. Plan de contingencia tecnológica IDEP',
      referencia:
        'Alcaldía Mayor de Bogotá D.C. (10 de noviembre de 2022) Plan de contingencia tecnológica IDEP. Retrieved November 10, 2022.',
      tipo: 'Plan de contingencia tecnológica',
      link:
        'http://www.idep.edu.co/sites/default/files/PL-GT-12-02%20Plan%20Contingencia%20Tecno%20V12.pdf',
    },
    {
      tema: 'Ley 1480 de 2011 Estatuto del consumidor y otras disposiciones',
      referencia:
        'Congreso de Colombia (2011). Ley 1480 de 2011. Estatuto del consumidor y otras disposiciones. Recuperado el 10 de noviembre de 2022.',
      tipo: 'Estatuto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306',
    },
    {
      tema: 'Modelo de costos de servicio TI en Educaciones de nivel Superior',
      referencia:
        'Universidad de Pamplona (2015). Modelo de costos de servicio TI en Educaciones de nivel Superior. Recuperado el 10 de noviembre de 2022.',
      tipo: 'Modelo',
      link:
        'https://documentas.redclara.net/bitstream/10786/1131/1/MODELO%20DE%20COSTOS%20DE%20SERVICIOS%20DE%20TECNOLOG%C3%8DAS%20DE%20INFORMACI%C3%93N%20EN%20INSTITUCIONES%20DE%20EDUCACI%C3%93N%20SUPERIOR.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'recurso tangible e intangible que posee un potencial de servicio o beneficio económico',
    },
    {
      termino: 'Costo',
      significado: 'cantidad de dinero que se paga por un objeto o algo',
    },
    {
      termino: 'Contingencia',
      significado:
        'evento que puede suceder o no, en TI hace referencia a un dispositivo o acción que permite dar solución a un imprevisto de manera temporal o permanente',
    },
    {
      termino: 'Cliente',
      significado:
        'persona que utiliza los servicios de un profesional o de una empresa, especialmente la que lo hace regularmente.',
    },
    {
      termino: 'Inventario',
      significado:
        'relación detallada, ordenada y valorada de los elementos que componen el patrimonio de una empresa o persona en un momento determinado.',
    },
    {
      termino: 'Ley',
      significado: 'regla o norma establecida por un ente de control superior',
    },
    {
      termino: 'Proyecto',
      significado:
        'conjunto de actividades encaminadas a alcanzar un objetivo en particular, cuenta con recursos y presupuestos para su ejecución y una duración determinada en el tiempo. ',
    },
    {
      termino: 'Recurso',
      significado:
        'conjunto de elementos disponibles para resolver una necesidad o llevar a cabo una tarea y que produce un beneficio',
    },
    {
      termino: 'T.I.',
      significado: 'Tecnologías de la Información. ',
    },
    {
      termino: 'PMI',
      significado: '<em>Project Management Institute.</em>',
    },
  ],
  referencias: [
    {
      referencia:
        'Chiavenato, I., & Obón. (2019). Introducción a la teoría general de la administración. México, D.F. McGraw-Hill Interamericana Editores.',
    },
    {
      referencia:
        'Escudero Serrano, M. (2019). Logística de almacenamiento. Madrid. Paraninfo.',
    },
    {
      referencia:
        'García Castro, J. (2017). Proyectos bajo ataque: Una historia en la búsqueda de la creación del valor. España. Ediciones Díaz de Santos.',
    },
    {
      referencia:
        'Guérin, B. (2018). Gestión de proyectos informáticos: Desarrollo, análisis y control. Barcelona. Ediciones ENI.',
    },
    {
      referencia:
        'Montes, C., Vallejo, C, & Montilla, O. (2019). Presupuestos: Aplicación práctica en las organizaciones. Bogotá. Alfaomega.',
    },
    {
      referencia:
        'Ruiz, F., & Ituarte, M. (2018). Tu marca personal en acción. Colección Acción empresarial.',
    },
    {
      referencia:
        'Torres Gómez, C., & Torres Gómez, C. (2018). Gestión de la atención al cliente/consumidor. Málaga. IC Editorial.',
    },
    {
      referencia:
        'Vásquez Rojas, F. (2020). Costos y Presupuestos para financieros junior. Colombia. Grupo editorial Nueva legislación.',
    },
    {
      referencia:
        'VirtualPro (2021). Un modelo de gestión de inventarios basado en estrategia competitiva. Recuperado el 29 de noviembre de 2022, de',
      link:
        'https://www.virtualpro.co/biblioteca/un-modelo-de-gestion-de-inventarios-basado-en-estrategia-competitiva',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
