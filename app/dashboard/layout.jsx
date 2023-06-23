import TextField from "@/components/inputs/TextField";
import { AiOutlineDelete, AiOutlineMenu, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { RiTodoLine } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";
import {
  CiSettings,
  CiHome,
  CiMenuBurger,
  CiBrightnessUp,
  CiMemoPad,
  CiUser,
  CiViewList,
  CiFolderOn,
  CiFlag1,
} from "react-icons/ci";
import {
  MdOutlineFavorite,
  MdOutlineHolidayVillage,
  MdOutlineHome,
  MdOutlineImportantDevices,
  MdOutlineDeleteOutline,
  MdOutlineStar,
  MdOutlineWbSunny,
} from "react-icons/md";
import SearchInput from "@/components/inputs/SearchInput";
import Link from "next/link";

export const metadata = {
  title: "Dashboard",
  description: "TODO dashboard",
};
export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="h-[5rem] flex z-20 w-full fixed top-0 items-center justify-between bg-white text-xl p-4">
          <div className="flex items-center gap-4">
            <div className="rounded-lg p-2 border-2 bg-sky-950 text-white border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer font-bold">
              <AiOutlineMenu />
            </div>
            <div className="lg:text-2xl text-xl uppercase font-semibold">Todo</div>
            <div className="hidden">
              <VscSearch />
            </div>
          </div>
          <div className="px-4 sm:flex sm:w-[32rem] md:w-[50rem] transition-all duration-500">
            <SearchInput placeholder="Search..." />
          </div>
          <div className="sm:text-3xl text-2xl rounded-full p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
            <CiUser />
          </div>
        </div>
        <div className="flex">
          <div className="bg-white md:hidden w-[4rem] z-10 flex justify-center">
            <div className="flex flex-col justify-between items-center pt-[5rem] pb-4 fixed top-0 h-screen px-6 text-3xl">
              <div className="flex flex-col gap-2 items-center">
                <div className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiHome />
                </div>
                <div className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiBrightnessUp />
                </div>
                <div className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <AiOutlineStar />
                </div>
                <div className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiViewList />
                </div>
                <div className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiFolderOn />
                </div>
                <div className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <AiOutlineDelete />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiUser />
                </div>
                <div className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiSettings />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white hidden md:flex w-[18rem] z-10">
            <div className="flex flex-col w-fit justify-between pt-[6rem] pb-4 fixed top-0 h-screen px-2 text-3xl">
              <div className="flex flex-col gap-2 items-start">
                <div className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiHome className=""/>
                  <p className="text-2xl">Tasks</p>
                </div>
                <div className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiBrightnessUp />
                  <p className="text-2xl">Today</p>
                </div>
                <div className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <AiOutlineStar />
                  <p className="text-2xl">Important</p>
                </div>
                <div className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiViewList />
                  <p className="text-2xl">Planned</p>
                </div>
                <div className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiFolderOn />
                  <p className="text-2xl">Groups</p>
                </div>
                <div className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <AiOutlineDelete />
                  <p className="text-2xl">Bin</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiUser />
                  <p className="text-2xl">Profile</p>
                </div>
                <div className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiSettings />
                  <p className="text-2xl">Settings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100">
            <div className="h-[5rem] bg-white"></div>
            <div className="mb-[4rem]">{children}</div>
            <div className="h-[3rem] w-full flex sm:gap-10 justify-center fixed bottom-0 left-0 bg-white text-sm font-semibold flex-wrap sm:flex-none tracking-tighter items-center px-2 sm:px-0 text-gray-500">
                <div className="sm:hidden w-[4rem]"></div>
                <div className="flex flex-1 sm:flex-none gap-2">
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Use</Link>
                </div>
                <div className="">2023&copy; MpcTodo</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
