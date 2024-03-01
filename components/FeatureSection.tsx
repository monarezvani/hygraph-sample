"use client";

import {
  ActionButton,
  FeatureSectionMedia,
  SubBlocks,
  SubSection,
} from "@/model/GetDataModel";
import Image from "next/image";
import Link from "next/link";
interface FeatureSectionProps {
  featureSections: SubSection[];
}

const FeatureSection = ({ featureSections }: FeatureSectionProps) => {
  return (
    <div className="flex flex-wrap">
      {featureSections.map((section, index) => {
        const image = section?.subBlocks?.featureSectionMedia?.image;
        return (
          <div
            key={index}
            className={`w-full ${
              index % 2 === 0 ? "lg:w-1/2" : "lg:w-1/2 lg:order-last"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center">
              {section.subBlocks.featureSectionMedia && image && (
                <div className="lg:w-1/2">
                  <Image
                    src={image.url}
                    alt={image.fileName}
                    className="w-full"
                    width={image.width}
                    height={image.height}
                  />
                </div>
              )}
              <div className="lg:w-1/2">
                <h2>{section.subBlocks.featureSectionTitle}</h2>
                <p>{section.subBlocks.featureSectionDescription}</p>
                {section.subBlocks.featureSectionActionButton && (
                  <Link
                    href={
                      section.subBlocks.featureSectionActionButton.buttonUrl
                    }
                  >
                    {section.subBlocks.featureSectionActionButton.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FeatureSection;
