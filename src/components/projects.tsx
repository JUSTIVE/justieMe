import { projectLists } from "@/asset/projects.json";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import type { Projects as ProjectType } from "@/data/projects";
import { TechIcon, type TechStackKind } from "./techIcons/TechIcon";

const ProjectCard = ({
  name,
  techStack,
  description,
  idx,
  // link,
}: ProjectType & { idx: number }) => {
  return (
    <section className={"inline-flex flex-col gap-2 mb-4"}>
      <button
        type="button"
        className="flex-1 flex justify-between gap-2 items-start"
      >
        <div className="flex flex-col items-start">
          <div className="level-6 text-start ">{name}</div>

          <div className="flex flex-row">
            {(techStack ?? []).map((tech, i) => (
              <div
                key={tech}
                className="dark:bg-gray-700 bg-gray-100 rounded-full p-1 [&:not(:first-child)]:-ml-3 aspect-square border-[4px] dark:border-gray-900/80 border-gray-200/50 overflow-hidden opacity-0 animate-fade-in-up"
                style={{
                  zIndex: techStack.length - i,
                  animationDelay: `${i * 0.06 + idx * 0.2}s`,
                  animationDuration: "0.5s",
                  animationTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
              >
                <TechIcon
                  stack={tech as TechStackKind}
                  className={twMerge("size-6")}
                />
              </div>
            ))}
          </div>

          <div className="align-baseline level-6 text-start opacity-60">
            {description}
          </div>
        </div>
      </button>
    </section>
  );
};

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className={twMerge("flex flex-col gap-4", "transition-transform")}>
      <div className={twMerge("dark:text-white")}>{t("projects")}</div>
      <div className="grid grid-cols-1">
        {projectLists.map((projects, idx) => (
          <div key={projects.name} className="grid grid-cols-8 gap-2 ">
            <div className="col-span-2 align-baseline level-6 pt-2">
              <div className="screen:sticky screen:top-2 text-gray-500">
                {projects.year}
              </div>
            </div>
            <div className="col-span-6 flex flex-col gap-4">
              <ProjectCard {...(projects as ProjectType)} idx={idx} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
