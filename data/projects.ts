
import type { Project } from "../src/types/index.ts";

export const projects: Project[] = [
  {
    title: "UpTask",
    description: "Aplicación web fullstack para la gestión de proyectos y tareas en equipo, con enfoque en productividad y colaboración.",
    images: [
      "../uptask/register.png",
      "../uptask/login.png",
      "../uptask/cambiarcontraseña.png",
      "../uptask/confirm.png",
      "../uptask/proyectos.png",
      "../uptask/crearproyecto.png",
      "../uptask/email.png",
      "../uptask/agregarcolaborador.png",
      "../uptask/tabla.png"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express", "MongoDB", "Node.js"],
    github: "https://github.com/FacundoZu/UpTask_Forontend",
    githubback: "https://github.com/FacundoZu/UpTask_Backend",
    functionalities: [
      "Registro, inicio de sesión y autenticación segura de usuarios.",
      "Verificación de cuenta por correo electrónico y recuperación de contraseña.",
      "Control de roles y permisos para una administración flexible.",
      "Creación, edición y eliminación de proyectos (CRUD).",
      "Asignación de colaboradores a proyectos específicos.",
      "Gestión de tareas por proyecto (CRUD con estados y seguimiento).",
      "Interfaz moderna, intuitiva y completamente responsiva."
    ],
  },
  {
    "title": "Camping Cachi",
    "description": "Plataforma web completa para la gestión de un camping, permitiendo administrar reservas de cabañas, usuarios, servicios y eventos. Incluye un dashboard intuitivo y responsivo que facilita el control de todas las operaciones y mejora la experiencia de los visitantes.",
    "images": [
      "/camping/home.png",
      "/camping/login.png",
      "/camping/register.png",
      "/camping/reservas.png",
      "/camping/cabaña.png",
      "/camping/dashboard-usuarios.png",
      "/camping/dashboard-cabañas.png",
      "/camping/servicios.png",
      "/camping/actividades.png",
      "/camping/buscador.png",
      "/camping/pago.png",
      "/camping/confirmacion-pago.png",
      "/camping/preguntas.png",
      "/camping/contacto.png",
      "/camping/comentarios.png",
      "/camping/estadisticas.png"
    ],
    "technologies": ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    "github": "https://github.com/FacundoZu/camping-mern-frontend",
    "githubback": "https://github.com/FacundoZu/camping-mern-backend",
    "functionalities": [
      "Registro y autenticación segura de usuarios.",
      "Inicio de sesión con Google.",
      "Recuperación de contraseña.",
      "Gestión completa de cabañas, servicios, eventos, cupones, preguntas frecuentes y usuarios.",
      "Confirmación de reserva y envio de ticket via email.",
      "Posibilidad de realizar reservas sin autenticación.",
      "Calendario visual de reservas, con fechas ocupadas visibles.",
      "Cupones para descuentos en reservas.",
      "Dashboard intuitivo donde se maneja la administración de usuarios, cabañas, servicios, eventos, cupones, preguntas frecuentes y cupones.",
      "Subida de imagens en la nube, de forma automática.",
      "Formulario de contacto y consultas con envio de email.",
      "Sistema de calificación y comentarios de usuarios.",
      "Generación de estadísticas para el camping.",
      "Interfaz moderna, intuitiva y completamente responsiva.",
      "Posibilidad de generar reportes en PDF.",
      "Generación automatica de resumen de comentarios para cada cabaña, con inteligencia artificial."
    ]
  },
]