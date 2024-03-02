import { ActionButton, FeatureSectionMedia } from "@/model/GetDataModel";
import Image from "next/image";
import Link from "next/link";
import { YoutubeVideoEmbed } from "./YoutubeVideoEmbed";
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
  return (
    <section
      className=" w-full mb-8 section content-center items-center lg:gap-24 xs:gap-16"
      key={index}
    >
      <div className="content flex flex-row flex-col lg:flex-row content-center items-center md:gap-3">
        {featureSectionMedia && (
          <div
            className={`flex justify-center
          ${index % 2 === 0 && " lg:w-1/2 lg:order-last "}
          
          lg:w-1/2`}
          >
            <div
              style={{ position: "relative", width: "480px", height: "360px" }}
            >
              {featureSectionMedia.image && (
                <Image
                  src={featureSectionMedia.image.url}
                  alt={featureSectionMedia.image.fileName}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          <span className="text-headerColor text-lg font-bold text-lg leading-38 mb-4">
            {featureSectionTitle}
          </span>
          <span className="text-textColor text-sm font-normal leading-28">
            {featureSectionDescription}
          </span>
          {featureSectionActionButton && (
            <Link
              className="button max-[640px]:button-sm  max-[768px]:button-md max-[1280px]:button-xl max-[1536px]:button-lg button-primary mt-8 w-fit"
              href={featureSectionActionButton.buttonUrl}
            >
              {featureSectionActionButton.buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
