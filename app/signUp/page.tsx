import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Sign up",
    template: `%s | Explorer`,
  },
  description: "Sign up and create an account",
};
export const SignUp = () => {
  return <div>Signup</div>;
};
export default SignUp;
