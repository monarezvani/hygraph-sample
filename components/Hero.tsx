import { ActionButton } from "@/model/GetDataModel";
import Link from "next/link";
import { Fragment } from "react";

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
    <section className="section-mobile lg:section ">
      <div className=" content-mobile lg:content  flex flex-col items-center content-stretch content">
        <div className="mb-12">
          <h2 className="font-bold text-semiLg md:text-xl text-headerColor leading-44 md:leading-72 tracking-title text-center mb-8 w-fit">
            {heroTitle}
          </h2>
          <p className="text-center text-base font-normal leading-30 text-textColor">
            {heroDescription}
          </p>
        </div>
        <Fragment>
          {heroActionButton && (
            <Link
              href={heroActionButton.buttonUrl}
              className=" button-primary button-lg w-full md:w-fit"
            >
              {heroActionButton.buttonText}
            </Link>
          )}
        </Fragment>
      </div>
    </section>
  );
};
export default Hero;
