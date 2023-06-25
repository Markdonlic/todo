import { AiOutlineDelete, AiOutlineMenu, AiOutlineStar } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";
import {
  CiSettings,
  CiHome,
  CiBrightnessUp,
  CiUser,
  CiViewList,
  CiFolderOn
} from "react-icons/ci";
import SearchInput from "@/components/inputs/SearchInput";
import Link from "next/link";

export const metadata = {
  title: "Dashboard",
  description: "TODO dashboard",
};
export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="h-[5rem] flex z-40 w-full fixed top-0 items-center justify-between bg-white text-xl p-4">
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
        <div className="flex justify-start z-30">
          <div className="z-30 md:hidden w-[4rem] mx-auto">
            <div className="flex w-fit flex-col justify-between items-center pt-[5rem] pb-4 fixed overflow-auto top-0 left-0 h-screen text-3xl bg-white">
              <div className="flex flex-col items-center">
                <Link href="/dashboard" className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiHome />
                </Link>
                <Link href="/dashboard/today" className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiBrightnessUp />
                </Link>
                <Link href="/dashboard/important" className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <AiOutlineStar />
                </Link>
                <Link href="/dashboard/planned" className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiViewList />
                </Link>
                <Link href="/dashboard/tags" className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiFolderOn />
                </Link>
                <Link href="/dashboard/bin" className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <AiOutlineDelete />
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiUser />
                </div>
                <div className="rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                  <CiSettings />
                </div>
              </div>
            </div>
          </div>
          <div className="z-30 hidden md:flex w-[18rem]">
            <div className="flex flex-col w-fit justify-between pt-[6rem] pb-4 fixed overflow-auto top-0 left-0 h-screen px-2 text-3xl bg-white">
              <div className="flex flex-col items-start">
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
              <div className="flex flex-col items-start">
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
          <div className="w-full">
            <div className="h-[5rem] w-full bg-white"></div>
            <div className="pb-[4rem]">{children}</div>
            <div className="h-[3rem] w-full z-20 flex sm:gap-10 justify-center fixed bottom-0 left-0 bg-white text-sm font-semibold flex-wrap sm:flex-none tracking-tighter items-center px-2 sm:px-0 text-gray-500">
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
