import { gql } from "@apollo/client";

export const GET_DATA_QUERY = gql`
query GetData {
  pageModel(where: {id: "clt691v82edup07ujmezi5axn"}) {
    subModels {
      subSections {
        subBlocks {
          ... on FeatureSection {
            featureSectionTitle
            featureSectionMedia {
              ... on YouTubeVideo {
                youtubeVideoEmbed
              }
              ... on StaticImage {
                image {
                  url
                  fileName
                }
              }
            }
            featureSectionLabel
            featureSectionActionButton {
              buttonUrl
              buttonText
            }
            featureSectionDescription
          }
          ... on Callout {
            id
            calloutTitle
            calloutDescription
            calloutActionButtons {
              buttonUrl
              buttonText
              id
            }
          }
          ... on Hero {
            id
            heroDescription
            heroTitle
            heroActionButton {
              buttonUrl
              buttonText
            }
          }
        }
        id
      }
      id
    }
    id
  }
}

`;
