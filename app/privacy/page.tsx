import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Policy",
    template: `%s | Explorer`,
  },
  description: "Policy of website",
};
export const Privacy = () => {
  return <div>Privacy</div>;
};
export default Privacy;
