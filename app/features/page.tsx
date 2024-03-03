import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Features",
    template: `%s | Explorer`,
  },
  description: "Features of Hygraph CMS which boost performance of website",
};
export const Features = () => {
  return <div>Features</div>;
};
export default Features;
