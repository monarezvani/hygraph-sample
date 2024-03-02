export interface GetDataModel {
  data: DataModel;
}

export interface DataModel {
  pageModel: PageModel;
}

export interface PageModel {
  subModels: SubModel[];
  id: string;
}

export interface SubModel {
  subSections: SubSection[];
  id: string;
}

export interface SubSection {
  subBlocks: SubBlocks;
  id: string;
}

export interface SubBlocks {
  id: string;
  heroActionButtons?: HeroActionButton[];
  heroDescription?: string;
  heroTitle?: string;
  featureSectionTitle?: string;
  featureSectionMedia?: FeatureSectionMedia;
  featureSectionLabel?: string;
  featureSectionActionButton?: ActionButton | null;
  featureSectionDescription?: string;
  calloutTitle?: string;
  calloutDescription?: string;
  calloutActionButton?: ActionButton;
}

export interface ActionButton {
  buttonUrl: string;
  buttonText: string;
}

export interface FeatureSectionMedia {
  image?: Image;
  youtubeVideoEmbed?: string;
}

export interface Image {
  url: string;
  fileName: string;
}

export interface HeroActionButton {
  id: string;
  buttonText: string;
  buttonUrl: string;
}
