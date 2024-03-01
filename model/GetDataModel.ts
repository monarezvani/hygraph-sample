export interface GetDataModel {
  data: Data;
}

export interface Data {
  pageModel: PageModel;
}

export interface PageModel {
  subModels: SubModel[];
  id:        string;
}

export interface SubModel {
  subSections: SubSection[];
  id:          string;
}

export interface SubSection {
  subBlocks: SubBlocks;
  id:        string;
}

export interface SubBlocks {
  id:                          string;
  heroActionButtons?:          HeroActionButton[];
  heroDescription?:            string;
  heroTitle?:                  string;
  featureSectionTitle?:        string;
  featureSectionMedia?:        FeatureSectionMedia;
  featureSectionLabel?:        string;
  featureSectionActionButton?: ActionButton | null;
  featureSectionDescription?:  string;
  calloutTitle?:               string;
  calloutDescription?:         string;
  calloutActionButton?:        ActionButton;
}

export interface ActionButton {
  buttonUrl:  string;
  buttonText: string;
}

export interface FeatureSectionMedia {
  id:    string;
  image: Image;
}

export interface Image {
  url:      string;
  height:   number;
  width:    number;
  id:       string;
  fileName: string;
}

export interface HeroActionButton {
  id:         string;
  buttonText: string;
  buttonUrl:  string;
}
