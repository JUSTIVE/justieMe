import { talks } from "@/asset/talks.json";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { Talk } from "@/data/talks";

const TalkCard = ({ title, event, location }: Talk) => {
  return (
    <section className={"inline-flex flex-col gap-2 mb-4"}>
      <button
        type="button"
        className="flex-1 flex justify-between gap-2 items-start"
      >
        <div className="flex flex-col items-start">
          <div className="level-6 text-start ">{title}</div>
          <div className="align-baseline level-7 text-start text-gray-500 mb-1">
            {event}
          </div>
          <div className="align-baseline level-7 text-start accent mb-2">
            {location}
          </div>

          {/*<div className="align-baseline level-6 text-start opacity-60">
          {description.map((desc) =>
            <div key={desc} className="break-keep mb-0.5 level-6">{desc}</div>)
          }

        </div>*/}
        </div>
      </button>
    </section>
  );
};

export const Talks = () => {
  const { t } = useTranslation();
  return (
    <div className={twMerge("flex flex-col gap-4", "transition-transform")}>
      <div className={twMerge("dark:text-white")}>{t("talks")}</div>
      <div className="grid grid-cols-1">
        {talks.map((talk) => (
          <div key={talk.title} className="grid grid-cols-8 gap-2">
            <div className="col-span-2 align-baseline level-6 pt-2">
              <div className="screen:sticky screen:top-2 text-gray-500">
                {talk.year}
              </div>
            </div>
            <div className="col-span-6 flex flex-col gap-4">
              <TalkCard {...(talk as unknown as Talk)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
