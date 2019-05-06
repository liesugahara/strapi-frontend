module.exports = {
  siteMetadata: {
    title: 'Intranet Opensky',
    description: 'Este sitio reúne, experiencias, códigos, herramientas, cursos, entre otros elementos de apoyo generados en la ejecución de proyectos, prestación del servicio de soporte, uso de nuevas tecnologías y/o implementación y mantenimiento de nuestro Sistema de Gestión Integrado (SGI), convirtiéndose así en una base de conocimiento que permanece dentro de OPENSKY CONSULTORES y que esta en constante crecimiento y evolución por sus gestores (diseñadores, desarrolladores, analistas, gerencias, etc.) Estos gestores compartes sus conocimientos en pequeños y fáciles artículos, a los cuales tienen acceso todo el equipo de Opensky. Esta base de conocimiento esta dividida en varios grupos: área de desarrollos, área de diseño, área SGI, CRM, Gamification y Ruby on Rails. Para el área de desarrollo el tipo de artículos que se encuentran son: uso de códigos, agregar capturas de pantalla, uso de nuevos APls, etc., para el área de diseño se encuentran: OVAS, manuales de Moodle, etc., para el área de SGI se encuentran: capacitaciones del sistema de gestión de calidad, seguridad y salud en el trabajo, seguridad de la información, It mark, procesos, procedimientos etc., para CRM se encuentra capacitaciones generales de esta plataforma y para Gamification y Ruby se encuentra Información inicial y cursos básicos. Para mayor información sobre la GESTIÓN DE CONOCIMIENTO dentro de Opensky consultar el instructivo GH-I-003 Gestión de conocimiento.',
    author: 'Strapi team',
    menuLinks: [
      {
        "name": "home",
        "link": "/"
      },
      {
        "name": "page2",
        "link": "/page-2"}],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://strapi-demo-admin.herokuapp.com"
          : "http://localhost:1337",
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `article`,
          `user`
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}