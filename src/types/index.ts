export interface Project {
    title: string
    description: string
    images: string[]
    technologies: string[]
    github: string
    githubback?: string
    functionalities: string[]
}

export interface Technologies {
    name: string
    icon: React.ReactNode
}

export interface Courses {
    name: string
    plataform: string
    date: string
    description: string
    duration: string
    certificate: string
}

export interface MoreProjects {
    name: string
    description: string
    img: string
    github: string
    web: string
}
