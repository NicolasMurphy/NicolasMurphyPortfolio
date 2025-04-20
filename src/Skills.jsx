import Django from "./Images/Skills/django-svgrepo-com.png";
import Python from "./Images/Skills/python-svgrepo-com.png";
import React from "./Images/Skills/react-javascript-js-framework-facebook-svgrepo-com.png";
import MongoDB from "./Images/Skills/mongo-svgrepo-com.png";
import Docker from "./Images/Skills/docker-svgrepo-com.png";
import PostgreSQL from "./Images/Skills/postgresql-svgrepo-com.png";
import MySQL from "./Images/Skills/mysql-svgrepo-com.svg";
import FastAPI from "./Images/Skills/fastapi-1.svg";
import JavaScript from "./Images/Skills/javascript-svgrepo-com.png";
import TypeScript from "./Images/Skills/typescript-official-svgrepo-com.svg";
import Tailwind from "./Images/Skills/tailwindcss-icon-svgrepo-com.png";
import PHP from "./Images/Skills/php-svgrepo-com.svg";


const Skills = () => {

  let skillList = [
    {"name": "Python",
    "src": Python},
    {"name": "Django",
    "src": Django},
    {"name": "FastAPI",
    "src": FastAPI},
    {"name": "PHP",
    "src": PHP},
    {"name": "Docker",
    "src": Docker},
    {"name": "MongoDB",
    "src": MongoDB},
    {"name": "PostgreSQL",
    "src": PostgreSQL},
    {"name": "MySQL",
    "src": MySQL},
    {"name": "React",
    "src": React},
    {"name": "JavaScript",
    "src": JavaScript},
    {"name": "TypeScript",
    "src": TypeScript},
    {"name": "Tailwind",
    "src": Tailwind},
  ];

  return (
    <>
    <div className="fade-in-5 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl text-center md:mb-[2%] mt-[4%] mb-[8%]">
        Skills and tools I use
      </h1>
      <div className="flex justify-center">
        <div className="mx-8 grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-4 md:gap-8">
            {skillList?.map((skill) => (
              <div
                key={skill.name}
                className="bg-base-100 text-base-content border border-base-300 dark:border-gray-700 rounded-full
                shadow p-4 text-center text-md">
                <img className="mx-auto" width="60" src={skill.src} alt="">
                </img>
                {skill.name}
              </div>
            ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
