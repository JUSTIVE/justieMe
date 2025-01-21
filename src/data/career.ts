type Company = {
  location: string;
  name: string;
};

type Product = {
  name: string;
  description: string;
};

export type Career = {
  jd?: string;
  company: Company;
  duration: {
    start: string;
    end: string;
  };
  products: Product[];
  description: string[];
};

export const career: Career[] = [
  {
    company: {
      name: "marketboro",
      location: "판교동, 경기도 성남시",
    },
    duration: {
      start: "2023.04",
      end: "now",
    },
    products: [
      {
        name: "식봄",
        description: "식당 사장님들을 위한 식자재 플랫폼",
      },
      {
        name: "마켓봄",
        description: "식자재 유통사를 위한 ERP 서비스",
      },
    ],
    description: [],
  },
  {
    company: {
      name: "greenlabs",
      location: "문정동, 서울시 송파구",
    },
    duration: { start: "2022.05", end: "2023.02" },
    products: [
      {
        name: "신선하이",
        description: "농민들을 위한 농산물 직거래 플랫폼",
      },
      { name: "팜모닝", description: "농민들을 위한 커뮤니티" },
    ],
    description: [],
  },
];
