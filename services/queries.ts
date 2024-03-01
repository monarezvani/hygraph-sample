import { gql } from "@apollo/client";

export const GET_DATA_QUERY = gql`
  query GetData {
    pageModel(where: { id: "clt691v82edup07ujmezi5axn" }) {
      subModels {
        subSections {
          subBlocks {
            ... on FeatureSection {
              id
              featureSectionTitle
              featureSectionMedia {
                ... on YouTubeVideo {
                  id
                  youtubeVideoEmbed
                }
                ... on StaticImage {
                  id
                  image {
                    url
                    height
                    width
                    id
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
              calloutActionButton {
                buttonUrl
                buttonText
              }
            }
            ... on Hero {
              id
              heroActionButtons {
                ... on Button {
                  id
                  buttonText
                  buttonUrl
                }
              }
              heroDescription
              heroTitle
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
