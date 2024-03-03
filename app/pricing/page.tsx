import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Prices",
    template: `%s | Explorer`,
  },
  description: "Various Prices of packages",
};
export const Pricing = () => {
  return <div>Pricing</div>;
};
export default Pricing;
