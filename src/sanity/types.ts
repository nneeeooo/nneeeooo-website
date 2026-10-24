export type SanityImageAsset = {
  _ref: string;
  _type?: string;
};

export type SanityImage = {
  asset: SanityImageAsset;
  _type?: 'image';
};

export type CustomLink = {
  title: string;
  url: string;
};

export type ProfileDocument = {
  name?: string;
  avatar?: SanityImage;
  bio?: string;
  telegram?: string;
  email?: string;
  resumeFileUrl?: string;
  resumeUrl?: string;
  customLinks?: CustomLink[];
};

export type WebdevItem = {
  thumbnail169: SanityImage;
  thumbnail43: SanityImage;
  title: string;
  description: string;
  stack: string;
  link: string;
};

export type WebdevDocument = {
  webdev: WebdevItem[];
};

export type DesignPost = {
  preview: SanityImage;
  link?: string;
};

export type DesignDocument = {
  date: string;
  posts: DesignPost[];
};

export type PhotoDocument = {
  date: string;
  images: SanityImage[];
};
