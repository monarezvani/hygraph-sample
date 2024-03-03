import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Terms",
    template: `%s | Explorer`,
  },
  description: "privacy and terms ",
};
export const Terms = () => {
  return <div>Terms</div>;
};
export default Terms;
