import { revalidateTag } from "next/cache";
import { Fragment } from "react";
import Callout from "@/components/Callout";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import { getData } from "@/services/getData";
/*
This code is the entry point for the Home component of our application.
 It asynchronously loads data using the getData function and constructs the UI based on the received data.
  The revalidateTag function is called to ensure that the page model data is refreshed when necessary.

The main structure of the page consists of Hero,FeatureSection, and Callout components,
 which are dynamically rendered based on the data fetched. Each subModel contains subSections,
  each of which may include various subBlocks such as heroTitle, featureSectionTitle, and calloutTitle. 
  These subBlocks are utilized to populate the respective components with content.

Overall, this code demonstrates the use of Next.js for server-side rendering and dynamic UI construction based on fetched data.
*/
export default async function Home() {
  const loadedData = await getData();
  revalidateTag("pageModelData");

  const subModels = loadedData.data?.pageModel.subModels;
  return (
    <Fragment>
      <main className="flex min-h-screen flex-col  relative">
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
      </main>
    </Fragment>
  );
}
