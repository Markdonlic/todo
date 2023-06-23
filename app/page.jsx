import Button from "@/components/inputs/Button";
import CheckBox from "@/components/inputs/CheckBox";
import TextField from "@/components/inputs/TextField";
import { BsGoogle, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const onChange = (value) => console.log("Captcha value:", value);
  return (
    <div className="bg-auth-background bg-no-repeat bg-cover lg:bg-center h-screen px-6 flex items-center justify-center">
      <div className="w-full max-w-[34rem] p-8">
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex lg:justify-end">
            <p className="text-neutral-600 font-semibold capitalize">
              new user?{" "}
              <span className="text-sky-700 hover:underline hover:underline-offset-4 hover:text-neutral-800 transition-all duration-500">
                <Link href="/sign-up">Sign Up</Link>
              </span>
            </p>
          </div>
          <div className="text-center text-xl font-semibold uppercase">
            Login
          </div>
          <div className="flex flex-col items-center justify-center gap-8 drop-shadow-lg">
            <div className="flex gap-4">
              <button className="px-5 py-4 border-transparent border bg-red-600 text-white drop-shadow-lg text-2xl hover:border outline-none hover:border-gray-500 hover:bg-transparent hover:text-neutral-900 transition-all duration-500">
                <BsGoogle />
              </button>
              <button className="px-5 py-4 border-transparent border bg-blue-600 text-white drop-shadow-lg text-2xl hover:border outline-none hover:border-gray-500 hover:bg-transparent hover:text-neutral-900 transition-all duration-500">
                <BsFacebook />
              </button>
              <button className="px-5 py-4 border-transparent border bg-sky-500 text-white drop-shadow-lg text-2xl hover:border outline-none hover:border-gray-500 hover:bg-transparent hover:text-neutral-900 transition-all duration-500">
                <BsTwitter />
              </button>
              <button className="px-5 py-4 border-transparent border bg-sky-700 text-white drop-shadow-lg text-2xl hover:border outline-none hover:border-gray-500 hover:bg-transparent hover:text-neutral-900 transition-all duration-500">
                <BsLinkedin />
              </button>
            </div>
          </div>
          <form className="flex flex-col gap-4">
            <TextField name="email" placeholder="Email" type="email" />
            <TextField name="password" placeholder="Password" type="password" />
            <div className="flex justify-between items-center">
              <CheckBox
                id="stay-signed-in"
                label="Keep me signed in"
                type="checkbox"
              />
              <Link
                className="text-neutral-800 transition-all duration-500 hover:text-neutral-900 hover:underline hover:underline-offset-4"
                href="/reset-password"
              >
                Forgot Password?
              </Link>
            </div>
            <Button label="submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
