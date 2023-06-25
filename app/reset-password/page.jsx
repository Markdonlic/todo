import Button from "@/components/inputs/Button";
import CheckBox from "@/components/inputs/CheckBox";
import TextField from "@/components/inputs/TextField";
import { BsGoogle, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="bg-auth-background bg-no-repeat bg-cover lg:bg-center h-screen px-6 flex items-center justify-center">
      <div className="w-full max-w-[34rem] p-8">
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex lg:justify-end text-sm sm:text-base">
            <p className="text-neutral-600 font-semibold capitalize">
              Already a user?{" "}
              <span className="text-sky-700 font-semibold hover:underline hover:underline-offset-4 hover:text-neutral-800 transition-all duration-500">
                <Link href="/">Login</Link>
              </span>
            </p>
          </div>
          <div className="text-center text-xl font-semibold uppercase">
            reset password
          </div>
          <form className="flex flex-col gap-4">
            <TextField name="email" placeholder="Email" type="email" />
            <TextField name="otp" placeholder="OTP" type="text" />
            <Button label="submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
