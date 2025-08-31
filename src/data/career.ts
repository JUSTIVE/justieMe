type Company = {
  location: string;
  name: string;
};

type Product = {
  name: string;
  productDescription: string;
  description: string[];
};

export type Career = {
  jd?: string;
  company: Company;
  duration: {
    start: string;
    end: string;
  };
  techStack: string[];
  products: Product[];
  description: string[];
};
