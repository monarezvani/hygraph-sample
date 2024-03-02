import { ActionButton } from "@/model/GetDataModel";
import Link from "next/link";

interface HeroSectionProps {
  heroActionButton?: ActionButton;
  heroTitle?: string;
  heroDescription?: string;
}
export const Hero = ({
  heroTitle,
  heroDescription,
  heroActionButton,
}: HeroSectionProps) => {
  return (
    <section className="section">
      <div className=" content flex  flex-col items-center content-stretch content">
        <div className="mb-12">
          <p className="font-bold text-xl text-headerColor leading-72 tracking-title text-center mb-8">
            {heroTitle}
          </p>
          <p className="text-center text-base font-normal leading-30 text-textColor">
            {heroDescription}
          </p>
        </div>
        <div>
          {heroActionButton && (
            <Link
              href={heroActionButton.buttonUrl}
              className="button button-primary  max-[640px]:button-sm  max-[768px]:button-md max-[1280px]:button-xl max-[1536px]:button-lg button-primary "
            >
              {heroActionButton.buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default Hero;
