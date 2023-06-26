import Button from "@/components/inputs/Button";
import TextField from "@/components/inputs/TextField";
import PageMenu from "@/components/layouts/PageMenu";
import ProfilePicture from "@/components/layouts/ProfilePicture";
import { CiSettings } from "react-icons/ci";

export default function page() {
  return (
    <div className="w-full mx-auto font-mono">
      <div className="pt-2 flex w-full flex-col gap-4">
        <PageMenu title="Settings" icon={<CiSettings />} />
        <div className="grid xl:grid-cols-7 gap-4">
          <div className="grid col-span-12 sm:col-span-6 xl:col-span-2">
            <ProfilePicture />
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 p-4 bg-white">
            <div className="flex flex-col gap-6">
              <div className="w-full font-semibold">Update Information</div>
              <div className="w-full">
                <form className="flex flex-col gap-4">
                  <TextField
                    name="full_name"
                    label="Full Name"
                    placeholder="Full Name"
                    type="text"
                  />
                  <TextField
                    name="phone_no"
                    label="Phone Number"
                    placeholder="Phone No"
                    type="number"
                  />
                  <TextField
                    name="email"
                    label="Email Address"
                    placeholder="Email"
                    type="email"
                  />
                  <Button label="update" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-2 w-full flex flex-col gap-6 p-4 bg-white">
            <p className="font-semibold capitalize">Change Password</p>
            <form className="flex flex-col gap-4">
              <TextField
                name="new_password"
                label="New Password"
                placeholder="New Password"
                type="password"
              />
              <TextField
                name="confirm_new_password"
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
              />
              <Button label="update password" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
