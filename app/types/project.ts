    //app/types/project.ts

    export interface Project {
    id?: number;
    title: string;
    description: string;
    techStack: string[];
    link: string;
    github?: string;
    demo?: string;
    image?: string;
    }