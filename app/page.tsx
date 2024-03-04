import Callout from "@/components/Callout";
import FeatureSection from "@/components/FeatureSection";
import { revalidateTag } from "next/cache";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { getData } from "@/services/getData";
import { Fragment } from "react";

export default async function Home() {
  const loadedData = await getData();
  revalidateTag("pageModelData");

  const subModels = loadedData.data?.pageModel.subModels;
  return (
    <Fragment>
      <Navbar />
      <main className="flex min-h-screen flex-col ">
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
                        heroActionButton={subSection.subBlocks.heroActionButton}
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
                        calloutActionButtons={
                          subSection.subBlocks.calloutActionButtons
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
