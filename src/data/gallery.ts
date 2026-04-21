export type PhotoMeta = {
  iso: number;
  aperture: string;
  shutterSpeed: string;
  focalLength: string;
  body: string;
  lens: string;
};
export type GalleryPhoto = {
  filename: string;
  location: string;
  title: string;
  description: string;
  datetime: string;
  meta: PhotoMeta;
};

export type PhotoGroup = {
  name: string;
  datetime: string;
  photos: GalleryPhoto[];
};
