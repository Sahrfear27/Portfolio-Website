import rest from "../../Images/educational.jpg";
import library from "../../Images/library.jpg";
import amazon from "../../Images/amazon.jpeg";
import weather from "../../Images/weather.png";
import music from "../../Images/music.jpg";
import { FaGithub } from "react-icons/fa";
import med from "../../Images/drug.jpg";
import "./Project.css";

type Props = {
  id?: string;
};

const projects = [
  {
    title: "Drug App",
    description:
      "SPA built with Angular featuring Role-Based Access Control (RBAC) for both guest and professional health users.",
    imgSrc: med,
    tech: ["Angular", "Node.Js", "Express", "JWT", "TypeScript"],
    link: "https://github.com/Sahrfear27/My-Projects/tree/main/Drug-App",
  },
  {
    title: "Library APP",
    description:
      "React-Native app for managing books, authors, and library tasks with centralized cataloging and circulation.",
    imgSrc: library,
    tech: ["React-Native", "Node.Js", "JSON", "JWT", "TypeScript"],
    link: "https://github.com/Sahrfear27/My-Projects/tree/main/Library%20Management%20System",
  },
  {
    title: "  Music Web Site",
    description:
      "Created interactive, engaging components for single-page sites with React and Angular for a seamless user experience",
    imgSrc: music,
    tech: ["Axios", "Node.Js", "Express", "JSON", "TypeScript"],
    link: "https://github.com/Sahrfear27/My-Projects/tree/main/Music-Website",
  },
  {
    title: "REST API",
    description:
      "Back-end app for managing users, tracking enrollments, and handling class interactions with authentication and registration features.",
    imgSrc: rest,
    tech: ["Fetch API", "MongoDB", "JWT"],
    link: "https://github.com/Sahrfear27/My-Projects/tree/main/REST_API",
  },
  {
    title: "Amazon Clone",
    description:
      "Recreate a clone of the Amazon webpage, providing users with a familiar interface for browsing and purchasing products online.",
    imgSrc: amazon,
    tech: ["HTML", "CSS", "BootStrap"],
    link: "https://github.com/Sahrfear27/My-Projects/tree/main/Amazon",
  },
  {
    title: "Weather App",
    description:
      "App providing current weather, forecasts, and detailed conditions (temperature, humidity, wind speed, pressure) for any location.",
    imgSrc: weather,
    tech: ["React", "Node.Js", "Express"],
    link: "https://github.com/Sahrfear27/My-Projects/tree/main/WeatherApp",
  },
];

export default function Projects(props: Props) {
  const { id } = props;
  return (
    <section id={id} className="project py-7">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="project-card">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="github-link"
                    aria-label={`GitHub link for ${project.title}`}
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
