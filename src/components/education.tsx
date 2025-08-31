import { educationList } from "@/asset/education.json";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { Education } from "@/data/education";

const EducationCard = ({
  school,
  duration,
  major,
  degree,
  description,
  // link,
}: Education) => {
  return <section className={"inline-flex flex-col gap-2 mb-4"}>
    <button
      type="button"
      className="flex-1 flex justify-between gap-2 items-start"
    >
      <div className="flex flex-col items-start">

        <div className="level-6 text-start ">{school.name}</div>
        <div className="align-baseline level-7 text-start text-gray-500 mb-1">
          {school.location}
        </div>
        <div className="align-baseline level-7 text-start accent mb-2">
          {degree} / {major}
        </div>

        <div className="align-baseline level-6 text-start whitespace-pre opacity-60">
          {description.join("\n")}
        </div>

      </div>
    </button>
  </section >
}

export const Educations = () => {
  const { t } = useTranslation();
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4",
        "transition-transform",
      )}
    >
      <div className={twMerge("px-5", "dark:text-white")}>
        {t("education")}
      </div>
      <div className="grid grid-cols-1">
        {
          educationList
            .map((educations) => (
              <div key={educations.school.name} className="grid grid-cols-8 gap-2 px-5">
                <div className="col-span-2 align-baseline level-6 pt-2">
                  <div className="screen:sticky screen:top-2 text-gray-500">
                    {educations.duration.start} - {educations.duration.end}
                  </div>
                </div>
                <div className="col-span-6 flex flex-col gap-4">
                  <EducationCard
                    {...(educations as Education)}
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
