import { useForm } from "react-hook-form";
import FormInputBox from "../ui/FormInputBox";
import Input from "../ui/Input";
import Label from "../ui/Label";
import EmptyFieldErrorMessage from "../ui/EmptyFieldErrorMessage";
import { useLogin } from "../features/authentication/useLogin";
import FormSubmittingSection from "../ui/FormSubmittingSection";
import PrimaryHeading from "../ui/PrimaryHeading";
import { useState } from "react";
import { HiEyeOff } from "react-icons/hi";
import { HiEye } from "react-icons/hi2";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isLoadingUser } = useLogin();
  function onSubmit(data) {
    login(data);
  }
  return (
    <div className="flex flex-col bg-stone-50 items-center justify-center h-screen">
      <div className="flex relative flex-col ">
        <img src="public/images/logo.png" alt="logo" className="w-70  " />
        <div className="absolute bottom-3">
          <h1 className="text-3xl font-bold">Almakt Transport</h1>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-stone-100 p-4 w-100 rounded-lg"
      >
        <div>
          <h2 className="text-2xl mb-2 font-bold">Welcome</h2>
          <p className="text-stone-500">Sign in to your account</p>
        </div>
        <FormInputBox>
          <Label>Email</Label>
          <Input
            name="email"
            type="text"
            placeholder="Enter Email"
            register={register}
          />
          <EmptyFieldErrorMessage message={errors.name?.message} />
        </FormInputBox>
        <FormInputBox>
          <Label>Password</Label>
          <div className="relative">
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              register={register}
            />
            <span
              className="absolute top-[50%] -translate-y-[50%] right-2 "
              onClick={() => setShowPassword((show) => !show)}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </span>
          </div>
          <EmptyFieldErrorMessage message={errors.password?.message} />
        </FormInputBox>
        <FormSubmittingSection isPending={isLoadingUser} btnName="Login" />
      </form>
    </div>
  );
}

export default Login;
