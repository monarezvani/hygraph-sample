import Callout from "@/components/Callout";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import { MODEL_ID } from "@/config/Variables";
import { getData } from "@/services/getData";

export default async function Home() {
  const loadedData = await getData();

  const subModels = loadedData.data?.pageModel.subModels;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ul>
        <div>
          {subModels?.map((subModel) => (
            <div key={subModel.id}>
              {subModel.subSections.map((subSection, index) => (
                <div key={subSection.id}>
                  {subSection.subBlocks.heroTitle && (
                    <Hero
                      heroTitle={subSection.subBlocks.heroTitle}
                      heroDescription={subSection.subBlocks.heroDescription}
                      heroActionButtons={subSection.subBlocks.heroActionButtons}
                    />
                  )}
                  {subSection.subBlocks.featureSectionTitle && (
                    <FeatureSection featureSections={subModel.subSections} />
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
                </div>
              ))}
            </div>
          ))}
        </div>
      </ul>
    </main>
  );
}
