import Button from "@/components/inputs/Button";
import CheckBox from "@/components/inputs/CheckBox";
import TextField from "@/components/inputs/TextField";
import { BsGoogle, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function NewPassword() {
  return (
    <div className="bg-auth-background bg-no-repeat bg-cover lg:bg-center h-screen px-6 flex items-center justify-center">
      <div className="w-full max-w-[34rem] p-8">
        <div className="w-full flex flex-col gap-8">
          <div className="text-center text-xl font-semibold uppercase">
            create new password
          </div>
          <form className="flex flex-col gap-4">
            <TextField
              name="new-password"
              placeholder="New Password"
              type="password"
            />
            <TextField
              name="confirm-new-password"
              placeholder="Confirm New Password"
              type="password"
            />
            <Button label="submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
