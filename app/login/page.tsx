import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Login",
    template: `%s | Explorer`,
  },
  description: "Login to an account",
};
export const Login = () => {
  return <div>Login</div>;
};
export default Login;
