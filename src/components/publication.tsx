import type {
  AcademicPaperKind,
  AcademicPublication,
  NormalPublication,
} from "@/data/publication";
import { publicationList } from "@/asset/publication.json";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { useClipboard } from "@/hooks/useClipboard";
import { match } from "ts-pattern";

const AcademicPublicationCard = ({
  author,
  title,
  doi,
  journal,
  quote,
}: AcademicPublication & { kind: string }) => {
  const { copy } = useClipboard();
  return (
    <section className={"inline-flex flex-col gap-2 mb-4"}>
      <button
        type="button"
        className="flex-1 flex justify-between gap-2 items-start"
        onClick={() => {
          copy(doi);
        }}
      >
        <div className="flex flex-col items-start">
          <div className="level-6 text-start">{title}</div>
          <div className="align-baseline level-7 mb-0.5 text-start opacity-50 mb-1">
            {author.join(", ")}
          </div>
          <div className="align-baseline level-7 text-start accent mb-1">
            {journal}
          </div>
        </div>
      </button>
      <div className="flex flex-row gap-2 justify-end print:hidden">
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

const NormalPublicationCard = ({
  title,
  description,
  // link,
}: NormalPublication) => {
  return (
    <section className={"inline-flex flex-col gap-2 mb-4"}>
      <button
        type="button"
        className="flex-1 flex justify-between gap-2 items-start"
      >
        <div className="flex flex-col items-start">
          <div className="level-6 text-start">{title}</div>
          <div className="align-baseline level-7 text-start accent">
            {description}
          </div>
        </div>
      </button>
    </section>
  );
};

export const Publication = () => {
  const { t } = useTranslation();
  return (
    <div className={twMerge("flex flex-col gap-4", "transition-transform")}>
      <div className={twMerge("dark:text-white")}>
        {t("publicationExperience")}
      </div>
      <div className="grid grid-cols-1">
        {Object.entries(Object.groupBy(publicationList, (x) => x.year))
          .toSorted(
            ([year1], [year2]) =>
              (year2 as unknown as number) - (year1 as unknown as number),
          )
          .map(([year, publications]) => (
            <div key={year} className="grid grid-cols-8 gap-2">
              <div className="col-span-2 align-baseline level-6 pt-2">
                <div className="screen:sticky screen:top-2 text-gray-500">
                  {year}
                </div>
              </div>
              <div className="col-span-6 flex flex-col gap-4">
                {(publications ?? []).map((publication) => {
                  return match(publication)
                    .with(
                      { __typename: "AcademicPublication" },
                      (publication) => (
                        <AcademicPublicationCard
                          {...(publication as AcademicPublication)}
                          kind={publication.kind as AcademicPaperKind}
                          key={publication.title}
                        />
                      ),
                    )
                    .with(
                      { __typename: "NormalPublication" },
                      (publication) => (
                        <NormalPublicationCard
                          {...(publication as NormalPublication)}
                          key={publication.title}
                        />
                      ),
                    )
                    .otherwise(() => null);
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
