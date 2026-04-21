type School = {
  location: string;
  name: string;
};

export type Education = {
  school: School;
  duration: {
    start: string;
    end: string;
  };
  major: string;
  degree: string;
  description: string[];
};
