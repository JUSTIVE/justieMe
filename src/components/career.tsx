import type { Career as CareerType } from "@/data/career";
import { careerList } from "@/asset/career.json";
import { Trans, useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { TechIcon, type TechStackKind } from "./techIcons/TechIcon";

const CareerCard = ({
  company,
  duration,
  products,
  description,
  techStack,
  jd,
  idx,
}: CareerType & { idx: number }) => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-8 py-5 gap-x-2">
      <div className="align-baseline level-6 pt-2 col-span-2">
        <div className="screen:sticky screen:top-2 text-gray-500">
          {duration.start} - {duration.end}
        </div>
      </div>
      <section
        className={twMerge("inline-flex rounded-2xl flex-col gap-2 col-span-6")}
      >
        <div className="flex-1 flex justify-between gap-2 items-center">
          <div className="flex flex-col items-start">
            <div className="level-5">{company.name}</div>
            <div className="align-baseline level-7 mb-0.5 text-gray-500">
              {jd}
            </div>
            <div className="align-baseline level-7 mb-0.5 accent">
              {company.location}
            </div>
          </div>
        </div>
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

        <div className="flex flex-col  opacity-0 animate-fade-in ease-material transition-all mb-4 pt-2">
          <div className="level-6 flex flex-col gap-8">
            {products.map(({ name, productDescription, description }) => (
              <div className="flex flex-col" key={name}>
                <div className="" key={name}>
                  {name}
                </div>
                <div className="level-7 text-gray-500 mb-2 accent">
                  {productDescription}
                </div>
                <ul className="flex flex-col opacity-60">
                  {(description ?? []).map((desc) => (
                    <div key={desc}>
                      <Trans
                        t={t}
                        i18nKey={desc}
                        className="break-keep"
                        components={{
                          Highlight: <span className="accent" />,
                        }}
                      />
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {description.length > 0 && (
          <div className="opacity-0 animate-fade-in ease-material transition-all level-6">
            {t("그 외")}
            <ul className="flex flex-col opacity-60">
              {description.map((desc) => (
                <li key={desc} className="level-6 break-keep">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export const Career = () => {
  const { t } = useTranslation();

  return (
    <div className={twMerge("flex flex-col")}>
      <div className={twMerge("dark:text-white")}>{t("workExperience")}</div>
      {careerList.map((career, idx) => {
        return <CareerCard {...career} key={career.company.name} idx={idx} />;
      })}
    </div>
  );
};
