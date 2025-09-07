import { Technologies } from "../src/types";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import React from 'react';

const technologies: Technologies[] = [
    {
        name: "React",
        icon: React.createElement(FaReact)
    },
    {
        name: "Tailwind CSS",
        icon: React.createElement(SiTailwindcss)
    },
    {
        name: "TypeScript",
        icon: React.createElement(SiTypescript)
    },
    {
        name: "Express",
        icon: React.createElement(FaNodeJs)
    },
    {
        name: "MongoDB",
        icon: React.createElement(FaDatabase)
    },
    {
        name: "Next",
        icon: React.createElement(RiNextjsFill)
    },
];

export const getTechnology = (name: string) => {
    return technologies.find((tech) => tech.name === name);
};
