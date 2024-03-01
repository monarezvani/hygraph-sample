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
    <section className="component">
      <h1>{heroTitle}</h1>
      <p>{heroDescription}</p>
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
    </section>
  );
};
export default Hero;
