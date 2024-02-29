"use client";

import { HeroActionButton } from "@/model/GetDataModel";

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
    <div>
      <h1>{heroTitle}</h1>
      <p>{heroDescription}</p>
      {heroActionButtons &&
        heroActionButtons.map((button) => (
          <a key={button.id} href={button.buttonUrl}>
            {button.buttonText}
          </a>
        ))}
    </div>
  );
};
export default Hero;
