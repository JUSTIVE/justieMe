import type { PublicationType } from "@/data/publication";
import { publicationList } from "@/asset/publication.json";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { useClipboard } from "@/hooks/useClipboard";

const PublicationCard = ({
  title,
  author,
  doi,
  journal,
  quote,
  kind,
}: PublicationType & { kind: string }) => {
  const { copy } = useClipboard();
  const { t } = useTranslation();
  return (
    <section
      className={twMerge(
        "inline-flex p-4 bg-gray-100/50 rounded-2xl flex-col gap-4",
        "dark:bg-gray-800/50 dark:text-white/80",
        "active:bg-gray-500/10 cursor-pointer transition-colors",
        "border border-gray-500/10",
      )}
    >
      <button
        type="button"
        className="flex-1 flex justify-between gap-2 items-start  rounded p-1  pr-4 transition-colors"
        onClick={() => {
          copy(doi);
        }}
      >
        <div className="flex flex-col items-start">
          <div className="align-baseline level-7 text-start accent">
            {journal}
          </div>
          {/*<div className="level-7 accent">{t(kind)}</div>*/}
          <div className=" text-start">{title}</div>
          <div className="align-baseline level-7 mb-0.5 text-start opacity-50">
            {author.join(", ")}
          </div>
        </div>
      </button>
      <div className="flex flex-row gap-2 justify-end">
        {Object.entries(quote)
          .filter(([, v]) => v !== "")
          .map(([key, value]) => (
            <button
              type="button"
              key={key}
              className="level-7"
              onClick={() => {
                copy(value);
              }}
            >
              {key}
            </button>
          ))}
      </div>
    </section>
  );
};

export const Publication = () => {
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
        {t("publicationExperience")}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Object.entries(publicationList)
          .flatMap(([k, v]) => v.map((x) => ({ ...x, kind: k })))
          .map((publication) => {
            return (
              <PublicationCard
                {...(publication as PublicationType)}
                kind={publication.kind}
                key={publication.title}
              />
            );
          })}
      </div>
    </div>
  );
};
