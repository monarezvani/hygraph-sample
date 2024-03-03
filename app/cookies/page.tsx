import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Cookies",
    template: `%s | Explorer`,
  },
  description: "cookies",
};
export const Cookies = () => {
  return <div>Cookies</div>;
};
export default Cookies;
