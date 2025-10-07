export type GalleryPhoto = {
  filename: string;
  location: string;
  title: string;
  description: string;
  datetime: string;
};

export type PhotoGroup = {
  name: string;
  datetime: string;
  photos: GalleryPhoto[];
};
