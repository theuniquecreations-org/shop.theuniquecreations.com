import logo from "@/images/logo-dark.png";
import bg from "@/images/update-1-12-2020/background/login-bg.jpg";

export const loginWrapper = {
  bg,
  logo,
  logoTitle: "Linoor - DIgital Agency NextJS Template",
  year: new Date().getFullYear(),
  author: "Linoor",
  forgotText: "Please enter your email \n address to get password reset link.",
  inputs: [
    {
      name: "name",
      type: "text",
      placeholder: "Your Name *",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter Email Address *",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Your Password *",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password *",
      required: true,
    },
  ],
};
