import type { SanityImageSource } from "../sanityClient";

export interface ProjectBase {
  _id: string;
  _createdAt?: string;
  titre: string;
  slug: string;
  categorie: {
    nom: string;
    slug: string;
  };
  thumbnail: SanityImageSource;
}

export interface ProjectLayout1 extends ProjectBase {
  layout: "layout_1";
  subtitle: string;
  short_description: string;
  long_description: string;
  mainImage: SanityImageSource;
}

export interface ProjectLayout2 extends ProjectBase {
  layout: "layout_2";
  subtitle: string;
  long_description: string;
  mainImage: SanityImageSource;
  gallery: SanityImageSource[];
}

export interface LabeledGalleryItem {
  _key: string;
  label: string;
  image: SanityImageSource;
}

export interface ProjectLayout3 extends ProjectBase {
  layout: "layout_3";
  subtitle: string;
  long_description: string;
  labeled_gallery: LabeledGalleryItem[];
}

export type Project = ProjectLayout1 | ProjectLayout2 | ProjectLayout3;
