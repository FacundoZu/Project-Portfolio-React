export interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    github: string
    functionalities: string[]
}

export interface Technologies {
    name: string
    icon: React.ReactNode
}

export interface Courses {
    name: string
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
