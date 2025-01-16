import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

type CareerCardProps = {
  title: string;
  company: string;
  duration: {
    start: string;
    end: string;
  };
  description: string[];
};

const CareerCard = ({
  title,
  company,
  duration,
  description,
}: CareerCardProps) => {
  return (
    <div
      className={twMerge(
        "inline-flex p-4 bg-gray-100 rounded-2xl",
        "dark:bg-gray-800 dark:text-white/50",
      )}
    >
      <div className="flex-1 flex justify-between gap-2">
        <div>{company}</div>
        <div className="text-sm align-baseline">
          {duration.start} - {duration.end}
        </div>
      </div>
    </div>
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
      <div
        className={twMerge("text-lg font-semibold px-1", "dark:text-white/50")}
      >
        {t("workExperience")}
      </div>
      <CareerCard
        company={"마켓보로"}
        title={""}
        duration={{ start: "2023.10", end: t("now") }}
        description={[]}
      />
    </div>
  );
};
