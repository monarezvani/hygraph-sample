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
  featureSectionTitle?: string;
  featureSectionMedia?: FeatureSectionMedia;
  featureSectionLabel?: string;
  featureSectionActionButton?: ActionButton | null;
  featureSectionDescription?: string;
  index: number;
}

const FeatureSection = ({
  featureSectionTitle,
  featureSectionMedia,
  featureSectionLabel,
  featureSectionActionButton,
  featureSectionDescription,
  index,
}: FeatureSectionProps) => {
  console.log(featureSectionActionButton);
  return (
    <section
      className="flex flex-col lg:flex-row w-full mb-8 section content-center items-center lg:gap-24"
      key={index}
    >
      {featureSectionMedia && (
        <div
          className={`flex justify-center
          ${index % 2 === 0 && " lg:w-1/2 lg:order-last "}
          
          lg:w-1/2`}
        >
          {featureSectionMedia.image && (
            <Image
              src={featureSectionMedia.image.url}
              alt={featureSectionMedia.image.fileName}
              width={480}
              height={320}
            />
          )}
        </div>
      )}
      <div className="flex flex-col lg:w-1/2">
        <span className="capitalize font-extrabold text-primary text-sm">
          {featureSectionLabel}
        </span>
        <span className="text-headerColor text-lg font-bold text-lg leading-38 mb-4">
          {featureSectionTitle}
        </span>
        <span className="text-textColor text-sm font-normal leading-28">
          {featureSectionDescription}
        </span>
        {featureSectionActionButton && (
          <Link
            className="button button-lg xs:button-xs s:button-sm md:button-md xl:button-xl lg:button-lg button-primary mt-8 "
            href={featureSectionActionButton.buttonUrl}
          >
            {featureSectionActionButton.buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;
