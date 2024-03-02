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
      className="section-mobile lg:section mb-8 section-center items-center gap-16 lg:gap-24  "
      key={index}
    >
      <div className="content-mobile lg:content flex flex-col lg:flex-row content-center items-center md:gap-3 ">
        {featureSectionMedia && (
          <div
            className={`flex justify-center
          ${index % 2 === 0 && " lg:w-1/2 lg:order-last "}
          
          lg:w-1/2`}
          >
            <div className=" w-screen relative lg:px-0 px-8 h-[180px] lg:h-[400px]">
              {featureSectionMedia.image && (
                <Image
                  src={featureSectionMedia.image.url}
                  alt={featureSectionMedia.image.fileName}
                  // objectFit=""
                  // style={{fill:c}}
                  sizes="(max-width: 680px) 100%, (max-width: 1200px) 50vw, 33vw"
                  fill
                  className="lg:px-0 px-8"
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
          <span className="text-headerColor text-lg font-bold text-lg leading-38 mb-4">
            {featureSectionTitle}
          </span>
          <span className="text-left text-textColor text-sm font-normal leading-28">
            {featureSectionDescription}
          </span>
          {featureSectionActionButton && (
            <Link
              className="button-primary button-md w-full md:w-fit"
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
