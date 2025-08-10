import type { Career as CareerType } from "@/data/career";
import { careerList } from "@/asset/career.json";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { TechIcon, TechStackKind } from "./techIcons/TechIcon";

const CareerCard = ({
  company,
  duration,
  products,
  description,
  techStack,
}: CareerType) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  return (
    <section
      className={twMerge(
        "inline-flex p-4 bg-gray-100/50 rounded-2xl flex-col gap-4",
        "dark:bg-gray-800/50 dark:text-white/80",
        "border border-gray-500/10",
      )}
    >
      <button
        type="button"
        className="flex-1 flex justify-between gap-2 items-center hover:bg-gray-500/10 rounded p-1 cursor-pointer pr-4 transition-colors"
        onClick={() => {
          setOpen((x) => !x);
        }}
      >
        <div className="flex flex-col items-start">
          <div className="accent">{company.name}</div>
          <div className="align-baseline opacity-50 level-7 mb-0.5">
            {company.location}
          </div>
          <div className="align-baseline opacity-50 level-7">
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
      <div className="flex flex-row gap-2">
        {(techStack ?? []).map((tech) => (
          <TechIcon
            stack={tech as TechStackKind}
            className="size-6"
            key={tech}
          />
        ))}
      </div>
      {open ? (
        <>
          <div className="flex flex-col gap-2">
            <div className="level-7">{t("contributedProducts")}</div>
            <div className="level-6 flex flex-col gap-2">
              {products.map(({ name, description }) => (
                <div className="flex flex-col" key={name}>
                  <div className="opacity-80" key={name}>
                    {name}
                  </div>
                  <div className="opacity-50 level-7">{description}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ul className="flex flex-col gap-1.5 opacity-80">
              {description.map((desc) => (
                <li
                  key={desc}
                  className="level-7 list-disc list-outside ml-[3ch] break-keep"
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
      {careerList.map((career) => {
        return <CareerCard {...career} key={career.company.name} />;
      })}
    </div>
  );
};
