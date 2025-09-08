
import type { Project } from "../src/types/index.ts";

export const projects: Project[] = [
  {
    title: "UpTask",
    description: "Aplicación web para gestionar tareas y proyectos",
    image: "../uptask/login.png",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Express", "MongoDB"],
    github: "https://github.com/FacundoZu/UpTask_Forontend",
    functionalities: [
      "Gestión de usuarios, roles y permisos.",
      "Autenticación segura de usuarios.",
      "Verificación de correo electrónico.",
      "Recuperar contraseña.",
      "Edicion de perfil.",
      "Interfaz de usuario intuitiva y responsiva.",
      "Gestión de tareas y proyectos (CRUD).",
      "Asignacion de proyectos y colaboradores.",
      "Lista de tareas por proyecto.",
    ],
  },
  {
    title: "Quiosco",
    description: "Aplicación web para gestionar pedidos de un restaurante.",
    image: "../default.jpg",
    technologies: ["Next", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/FacundoZu/quiosco_next_app_router",
    functionalities: [
      "Gestión de tareas y proyectos",
      "Autenticación segura de usuarios",
      "Interfaz de usuario intuitiva y responsiva",
    ],
  },
  {
    title: "Quiosco1",
    description: "Professional dashboard with real-time data visualization",
    image: "../default.jpg",
    technologies: ["Next", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/FacundoZu/quiosco_next_app_router",
    functionalities: [
      "Gestión de tareas y proyectos",
      "Autenticación segura de usuarios",
      "Interfaz de usuario intuitiva y responsiva",
    ],
  },
  {
    title: "UpTask2",
    description: "Professional dashboard with real-time data visualization",
    image: "../default.jpg",
    technologies: ["Next", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/FacundoZu/UpTask2",
    functionalities: [
      "Gestión de tareas y proyectos",
      "Autenticación segura de usuarios",
      "Interfaz de usuario intuitiva y responsiva",
    ],
  }
]