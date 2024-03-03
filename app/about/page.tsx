import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About",
    template: `%s | Explorer`,
  },
  description: "about us and information about a company",
};
export const About = () => {
  return <div>About</div>;
};
export default About;
