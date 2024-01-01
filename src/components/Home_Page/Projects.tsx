import { projects } from "./data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <div className="mx-auto inline-block w-10 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </div>

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 items-center justify-center">
          {projects.map((project) => (
            <a href={project.link} className="cursor-pointer">
              <div className="max-w-sm overflow-hidden shadow-lg m-3 bg-[#1F2937] rounded-lg ">
                <img
                  className="w-full"
                  src={project.image}
                  alt="project banner"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-yellow-300 text-xl mb-2">
                    {project.title}
                  </div>
                  <p className="text-white text-md">{project.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {project.subtitle.split(", ").map((lang, id) => (
                    <span
                      key={id}
                      className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
