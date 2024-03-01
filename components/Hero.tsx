"use client";

import { HeroActionButton } from "@/model/GetDataModel";
import Link from "next/link";

interface HeroSectionProps {
  heroActionButtons?: HeroActionButton[];
  heroTitle?: string;
  heroDescription?: string;
}
export const Hero = ({
  heroTitle,
  heroDescription,
  heroActionButtons,
}: HeroSectionProps) => {
  console.log(heroTitle);
  return (
    <section className="section">
      <div className="flex  flex-col items-center content-stretch component">
        <div className="mb-12">
          <p className="font-bold text-xl text-textColor leading-72 tracking-title text-center mb-8">
            {heroTitle}
          </p>
          <p className="text-center text-base font-normal leading-30 text-textColor">
            {" "}
            {heroDescription}
          </p>
        </div>
        <div>
          {heroActionButtons &&
            heroActionButtons.map((button) => (
              <Link
                key={button.id}
                href={button.buttonUrl}
                className="button xs:button-xs s:button-sm md:button-md xl:button-xl lg:button-lg button-primary "
              >
                {button.buttonText}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
