import { redirect } from "next/navigation";
import React from "react";

function isInvalidLogin(input: {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}) {
  return !input || input.email === "" || input.password === "";
}
type State = {
  message: string;
};

type PrevState = State | undefined;
export const onLoginSubmit = (
  prevState: PrevState,
  formData: FormData
): State => {
  const loginData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  if (isInvalidLogin!(loginData) || isInvalidLogin(loginData)) {
    return {
      message: "Invalid input.",
    };
  }
  redirect("/");

  return {
    message: "Login successful",
  };
};
