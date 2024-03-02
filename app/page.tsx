import Callout from "@/components/Callout";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { getData } from "@/services/getData";
import { Fragment } from "react";

export default async function Home() {
  const loadedData = await getData();

  const subModels = loadedData.data?.pageModel.subModels;
  return (
    <Fragment>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <ul>
          <Fragment>
            {subModels?.map((subModel) => (
              <Fragment key={subModel.id}>
                {subModel.subSections.map((subSection, index) => (
                  <Fragment key={subSection.id}>
                    {subSection.subBlocks.heroTitle && (
                      <Hero
                        heroTitle={subSection.subBlocks.heroTitle}
                        heroDescription={subSection.subBlocks.heroDescription}
                        heroActionButtons={
                          subSection.subBlocks.heroActionButtons
                        }
                      />
                    )}

                    {subSection.subBlocks.featureSectionTitle && (
                      <FeatureSection
                        featureSectionMedia={
                          subSection.subBlocks.featureSectionMedia
                        }
                        featureSectionTitle={
                          subSection.subBlocks.featureSectionTitle
                        }
                        featureSectionActionButton={
                          subSection.subBlocks.featureSectionActionButton
                        }
                        featureSectionDescription={
                          subSection.subBlocks.featureSectionDescription
                        }
                        featureSectionLabel={
                          subSection.subBlocks.featureSectionLabel
                        }
                        index={index}
                      />
                    )}
                    {subSection.subBlocks.calloutTitle && (
                      <Callout
                        calloutTitle={subSection.subBlocks.calloutTitle}
                        calloutDescription={
                          subSection.subBlocks.calloutDescription
                        }
                        calloutActionButton={
                          subSection.subBlocks.calloutActionButton
                        }
                      />
                    )}
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </Fragment>
        </ul>
      </main>
      <Footer />
    </Fragment>
  );
}
