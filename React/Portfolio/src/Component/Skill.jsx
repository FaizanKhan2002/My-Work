import React from "react";
import { GraduationCap, Pill, School } from "lucide-react";

const Skill = () => {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "Bootstrap", percentage: 80 },
    { name: "Tailwind", percentage: 80 },
    { name: "JavaScript", percentage: 65 },
    { name: "React.js", percentage: 60 },
  ];

  const education = [
    {
      icon: <School />,
      title: "Class-10th",
      year: "2017-2018",
      description:
        "I passed my 10th class in year 2017-2018; where I scored 72 percent in 10th class. I was studying in school Guru Sharan Academy (GSA); Piplya.",
    },
    {
      icon: <GraduationCap />,
      title: "Class-12th",
      year: "2019-2020",
      description:
        "I passed my 12th class in year 2019-2020; where I scored 60 percent in stream of BIOLOGY in 12th class. I was studying in school Vasudha Vidhya Vihar (VVV); Karhi.",
    },
    {
      icon: <Pill />,
      title: "Diploma in Pharmacy",
      year: "2020-2022",
      description:
        "I passed my Diploma in Pharmacy in year 2020-2022; where I scored 60 percent in Diploma. I was studying in college Devi Ahilya College of Pharmacy (DACOP); Indore.",
    },
  ];

  return (
    <section className="text-white mt-16 flex items-center justify-center min-h-screen mb-5">
      <div className="bg-zinc-950 container shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center md:justify-start w-full mb-8 ">
          <h1 className="text-4xl text-teal-400 font-semibold me-5">Skill</h1>
          <div className="w-auto h-auto bg-gradient-to-r from-zinc-300 to-zinc-700 md:w-1/5 md:h-0.5"></div>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 mt-16 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="relative bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="absolute top-0 left-0 bg-black rounded-full h-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1 flex justify-center">
                {skill.percentage}%
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge */}
        <div className="bg-black mt-12 container shadow-lg rounded-lg p-8 max-w-6xl w-full">
          <div className="flex items-center justify-center md:justify-start w-full mb-8 ">
            <h1 className="text-2xl text-teal-400 font-semibold me-5">
              Knowledge
            </h1>
            <div className="w-auto h-auto bg-gradient-to-r from-zinc-300 to-zinc-700 md:w-1/6 md:h-0.5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="w-full border hover:border-zinc-700 duration-500 rounded-lg shadow p-4 bg-zinc-950 border-zinc-800">
              M.S. Office
            </div>
            <div className="w-full border hover:border-zinc-700 duration-500 rounded-lg shadow p-4 bg-zinc-950 border-zinc-800">
              Word Press
            </div>
            <div className="w-full border hover:border-zinc-700 duration-500 rounded-lg shadow p-4 bg-zinc-950 border-zinc-800">
              Canva
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-3">
            <div className="w-full border hover:border-zinc-700 duration-500 rounded-lg shadow p-4 bg-zinc-950 border-zinc-800">
              Communication
            </div>
            <div className="w-full border hover:border-zinc-700 duration-500 rounded-lg shadow p-4 bg-zinc-950 border-zinc-800">
              Self Learner
            </div>
            <div className="w-full border hover:border-zinc-700 duration-500 rounded-lg shadow p-4 bg-zinc-950 border-zinc-800">
              Time Management
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="flex mt-12 items-center justify-center md:justify-start w-full mb-8 ">
            <h1 className="text-2xl text-teal-400 font-semibold me-5">
            Education
            </h1>
            <div className="w-auto h-auto bg-gradient-to-r from-zinc-300 to-zinc-700 md:w-1/6 md:h-0.5"></div>
          </div>
          {education.map((item, index) => (
            <div key={index} className="relative flex items-center mb-8">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border-2 border-white">
                {item.icon}
              </div>
              <div className="flex-grow bg-black rounded-lg shadow-lg p-6 ml-6">
                <h3 className="text-xl font-bold">
                  {item.title}{" "}
                  <span className="text-sm text-gray-400">{item.year}</span>
                </h3>
                <p className="text-gray-200 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

    </section>
  );
};

export default Skill;
