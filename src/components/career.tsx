import type { Career as CareerType } from "@/data/career";
import { careerList } from "@/asset/career.json";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { TechIcon, type TechStackKind } from "./techIcons/TechIcon";

const CareerCard = ({
  company,
  duration,
  products,
  description,
  techStack,
  idx,
}: CareerType & { idx: number }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <section
      className={twMerge(
        "inline-flex p-4 bg-gray-100/50 rounded-2xl flex-col gap-2",
        "dark:bg-gray-800/50 dark:text-white/80",
        "border border-gray-500/10",
      )}
    >
      <button
        type="button"
        className="flex-1 flex justify-between gap-2 items-center active:bg-gray-500/10 rounded p-1 cursor-pointer pr-4 transition-colors"
        onClick={() => {
          setOpen((x) => !x);
        }}
      >
        <div className="flex flex-col items-start">
          <div className="level-4 mb-0.5">{company.name}</div>
          <div className="align-baseline level-7 mb-0.5 accent">
            {company.location}
          </div>
          <div className="align-baseline opacity-50 level-7 ">
            {duration.start} - {duration.end}
          </div>
        </div>
        <ChevronDown
          className={twMerge(
            "transition-transform",
            open ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
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
      {open ? (
        <>
          <div className="flex flex-col gap-2 opacity-0 animate-fade-in ease-material transition-all">
            <div className="level-6">{t("contributedProducts")}</div>
            <div className="level-6 flex flex-col gap-2">
              {products.map(({ name, description }) => (
                <div className="flex flex-col" key={name}>
                  <div className="opacity-80 accent" key={name}>
                    {name}
                  </div>
                  <div className="opacity-50 level-6">{description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="opacity-0 animate-fade-in ease-material transition-all">
            <ul className="flex flex-col gap-1.5 opacity-80">
              {description.map((desc) => (
                <li
                  key={desc}
                  className="level-6 list-disc list-outside ml-[3ch] break-keep"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </section>
  );
};

export const Career = () => {
  const { t } = useTranslation();
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4",
        "max-w-[calc(100%-32px)] transition-transform translate-x-4",
        "lg:max-w-screen-lg lg:translate-x-0",
      )}
    >
      <div className={twMerge("px-4", "dark:text-white")}>
        {t("workExperience")}
      </div>
      {careerList.map((career, idx) => {
        return <CareerCard {...career} key={career.company.name} idx={idx} />;
      })}
    </div>
  );
};
