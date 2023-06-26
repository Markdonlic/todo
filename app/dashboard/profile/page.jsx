import PageMenu from "@/components/layouts/PageMenu";
import ProfilePicture from "@/components/layouts/ProfilePicture";
import { CiUser } from "react-icons/ci";

export default function page() {
  return (
    <div className="w-full mx-auto font-mono">
      <div className="pt-2 flex w-full flex-col gap-4">
        <PageMenu title="Profile" icon={<CiUser />} />
        <div className="grid xl:grid-cols-7 gap-4">
          <div className="grid col-span-12 sm:col-span-6 xl:col-span-2">
            <ProfilePicture />
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 p-4 bg-white">
            <div className="flex flex-col gap-2">
              <div className="w-full font-semibold">General Information</div>
              <div className="w-full">
                <table>
                  <tr>
                    <td>total tasks</td>
                    <td>1200</td>
                  </tr>
                  <tr>
                    <td>Today tasks</td>
                    <td>1200</td>
                  </tr>
                  <tr>
                    <td>Important tasks</td>
                    <td>1200</td>
                  </tr>
                  <tr>
                    <td>Planned tasks</td>
                    <td>1200</td>
                  </tr>
                  <tr>
                    <td>Deleted tasks</td>
                    <td>1200</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-2 w-full flex flex-col gap-4 p-4 bg-white">
            <p className="font-semibold capitalize">Other Informations</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              quidem molestias quos eligendi vel, expedita et perferendis
              maiores saepe hic?
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              quidem molestias quos eligendi vel, expedita et perferendis
              maiores saepe hic?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
