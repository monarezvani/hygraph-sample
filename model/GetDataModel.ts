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
  id?: string;
  heroDescription?: string;
  heroTitle?: string;
  heroActionButton?: ActionButton;
  featureSectionTitle?: string;
  featureSectionMedia?: FeatureSectionMedia;
  featureSectionLabel?: string;
  featureSectionActionButton?: ActionButton | null;
  featureSectionDescription?: string;
  calloutTitle?: string;
  calloutDescription?: string;
  calloutActionButtons?: CalloutActionButton[];
}

export interface CalloutActionButton {
  buttonUrl: string;
  buttonText: string;
  id: string;
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
