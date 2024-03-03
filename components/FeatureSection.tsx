import { ActionButton, FeatureSectionMedia } from "@/model/GetDataModel";
import Image from "next/image";
import Link from "next/link";
import YoutubeVideoEmbed from "./YoutubeVideoEmbed";
interface FeatureSectionProps {
  featureSectionTitle?: string;
  featureSectionMedia?: FeatureSectionMedia;
  featureSectionLabel?: string;
  featureSectionActionButton?: ActionButton | null;
  featureSectionDescription?: string;
  index: number;
}

export default function FeatureSection({
  featureSectionTitle,
  featureSectionMedia,
  featureSectionLabel,
  featureSectionActionButton,
  featureSectionDescription,
  index,
}: FeatureSectionProps) {
  return (
    <section
      className="section-mobile lg:section mb-8 section-center items-center"
      key={index}
    >
      <div className="content-mobile lg:content flex flex-col lg:flex-row content-center items-center gap-12 lg:gap-24 ">
        {featureSectionMedia && (
          <div
            className={`flex justify-center
          ${index % 2 === 0 && " lg:w-1/2 lg:order-last "}
          
          lg:w-1/2`}
          >
            <div className="w-screen relative h-[180px] lg:h-[400px]">
              {featureSectionMedia.image && (
                <Image
                  className="lg:px-0 px-8 object-cover lg:object-contain"
                  src={featureSectionMedia.image.url}
                  alt={featureSectionMedia.image.fileName.split(".")[0] + index}
                  sizes="(max-width: 680px) 100%"
                  fill
                  loading="lazy"
                />
              )}
              {featureSectionMedia.youtubeVideoEmbed && (
                <YoutubeVideoEmbed
                  youtubeVideoEmbed={featureSectionMedia.youtubeVideoEmbed}
                />
              )}
            </div>
          </div>
        )}
        <div className="flex flex-col lg:w-1/2">
          <span className="capitalize font-extrabold text-primary text-sm">
            {featureSectionLabel}
          </span>
          <h2 className="text-headerColor text-lg font-bold text-lg leading-38 mb-4">
            {featureSectionTitle}
          </h2>
          <span className="text-left text-textColor text-sm font-normal leading-28">
            {featureSectionDescription}
          </span>
          {featureSectionActionButton && (
            <Link
              className="button-primary button-md w-full md:w-fit mt-8"
              href={featureSectionActionButton.buttonUrl}
            >
              {featureSectionActionButton.buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
