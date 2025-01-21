import type { Career as CareerType } from "@/data/career";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const CareerCard = ({ jd, company, duration, products }: CareerType) => {
  return (
    <div
      className={twMerge(
        "inline-flex p-4 bg-gray-100/50 rounded-2xl flex-col gap-4",
        "dark:bg-gray-800/50 dark:text-white/80",
      )}
    >
      <div className="flex-1 flex justify-between gap-2 items-end">
        <div className="flex flex-col items-start">
          <div className="">{company.name}</div>
          <div className="align-baseline opacity-50 level-7 mb-0.5">
            {company.location}
          </div>
          <div className="align-baseline opacity-50 level-7">
            {duration.start} - {duration.end}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="level-6 flex flex-col gap-2">
          {products.map(({ name, description }) => (
            <div className="flex flex-col">
              <div className="opacity-80" key={name}>
                {name}
              </div>
              <div className="opacity-50 level-7">{description}</div>
            </div>
          ))}
        </div>
      </div>
      <div>{}</div>
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
      <div className={twMerge("px-1", "dark:text-white")}>
        {t("workExperience")}
      </div>
      <CareerCard
        company={{ name: t("marketboro"), location: "판교동, 경기도 성남시" }}
        jd={""}
        duration={{ start: "2023.04", end: t("now") }}
        products={[
          {
            name: "식봄",
            description: "식당 사장님들을 위한 식자재 플랫폼",
          },
          {
            name: "마켓봄",
            description: "식자재 유통사를 위한 ERP 서비스",
          },
        ]}
        description={[]}
      />
      <CareerCard
        company={{ name: t("greenlabs"), location: "문정동, 서울시 송파구" }}
        jd={""}
        duration={{ start: "2022.05", end: "2023.02" }}
        products={[
          {
            name: "신선하이",
            description: "농민들을 위한 농산물 직거래 플랫폼",
          },
          { name: "팜모닝", description: "농민들을 위한 커뮤니티" },
        ]}
        description={[]}
      />
      <CareerCard
        company={{ name: t("onepredict"), location: "문정동, 서울시 송파구" }}
        jd={""}
        duration={{ start: "2021.04", end: "2022.05" }}
        products={[
          {
            name: "GuardiOne Substation",
            description: "변압기 예지보전 솔루션",
          },
          {
            name: "GuardiOne Motor",
            description: "모터 설비 예지보전 솔루션",
          },
        ]}
        description={[]}
      />
      <CareerCard
        company={{ name: t("Codemind"), location: "서울시 구로구" }}
        jd={""}
        duration={{ start: "2019.04", end: "2021.04" }}
        products={[
          {
            name: "COYOTE",
            description: "C++, C 언어를 위한 콘콜릭 테스팅 도구",
          },
          {
            name: "HANACode",
            description: "Oracle SQL to HANA SQL transpiler",
          },
        ]}
        description={[]}
      />
    </div>
  );
};
