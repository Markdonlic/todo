"use client";
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
import { useState } from "react";

const metadata = {
  title: "Dashboard",
  description: "TODO dashboard",
};

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [openArch, setOpenArch] = useState(false);
  return (
    <div className="w-full">
      <div className="h-[5rem] flex z-50 w-full fixed top-0 items-center justify-between bg-white text-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setOpenArch(!openArch)} className="sm:hidden rounded-lg p-2 border-2 bg-sky-950 text-white border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer font-bold">
            <AiOutlineMenu />
          </button>
          <div className="lg:text-2xl text-xl uppercase font-semibold font-mono">Todo</div>
          <div className="hidden">
            <VscSearch />
          </div>
        </div>
        <div className="px-4 sm:flex sm:w-[32rem] md:w-[50rem] transition-all duration-500 font-mono">
          <SearchInput placeholder="Search..." />
        </div>
        <button onClick={() => setOpen(!open)} className="sm:text-3xl text-2xl rounded-full p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
          <CiUser />
        </button>
        <div className={`${open ? "flex" : "hidden"} bg-white fixed top-16 right-5 p-4 text-sm sm:text-base flex-col gap-2 items-start justify-center drop-shadow-2xl text-sky-950 transition-all duration-500`}>
          <Link href="#" className="hover:text-sky-600 transition-all duration-500">Profile</Link>
          <Link href="#" className="hover:text-sky-600 transition-all duration-500">Settings</Link>
          <Link href="#" className="hover:text-sky-600 transition-all duration-500">Log-out</Link>
        </div>
      </div>
      <div className=" flex gap-4 min-h-screen">
        <div className={`hidden sm:block sm:w-[238px] h-screen`}>
        </div>
        <div className={`${openArch ? "translate-x-0" : "-translate-x-[218px] w-0"} transition-all ease-in-out duration-500 fixed top-0 left-0 h-full z-40 sm:translate-x-0 sm:w-[200px]`}>
          <div className="sticky top-[5rem] pt-[6rem] flex flex-col gap-4 justify-between text-2xl  h-full overflow-auto pb-4 bg-white px-4">
            <div className="flex z-40 flex-col items-start font-mono">
              <Link onClick={() => setOpenArch(false)} href="/dashboard/" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiHome className="" />
                <p className={`text-[15px] sm:text-xl sm:block`}>Tasks</p>
              </Link>
              <Link onClick={() => setOpenArch(false)} href="/dashboard/today" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiBrightnessUp />
                <p className={`text-[15px] sm:text-xl sm:block`}>Today</p>
              </Link>
              <Link onClick={() => setOpenArch(false)} href="/dashboard/important" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <AiOutlineStar />
                <p className={`text-[15px] sm:text-xl sm:block`}>Important</p>
              </Link>
              <Link onClick={() => setOpenArch(false)} href="/dashboard/planned" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiViewList />
                <p className={`text-[15px] sm:text-xl sm:block`}>Planned</p>
              </Link>
              <Link onClick={() => setOpenArch(false)} href="/dashboard/tags" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiFolderOn />
                <p className={`text-[15px] sm:text-xl sm:block`}>Groups</p>
              </Link>
              <Link onClick={() => setOpenArch(false)} href="/dashboard/bin" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <AiOutlineDelete />
                <p className={`text-[15px] sm:text-xl sm:block`}>Trash</p>
              </Link>
            </div>
            <div className="flex flex-col items-start font-mono">
              <Link onClick={() => setOpenArch(false)} href="/dashboard/profile" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiUser />
                <p className={`text-[15px] sm:text-xl sm:block`}>Profile</p>
              </Link>
              <Link onClick={() => setOpenArch(false)} href="/dashboard/settings" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiSettings />
                <p className={`text-[15px] sm:text-xl sm:block`}>Settings</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:dashboard_layout w-full px-2">
          <div className="h-[5rem] w-full bg-white"></div>
          <div className="w-full">{children}</div>
          <div className="h-[3rem] w-full z-20 flex sm:gap-10 items-center fixed bottom-0 left-0 bg-white text-sm flex-wrap sm:flex-none tracking-widest font-mono justify-end px-2 sm:px-0 text-gray-500">
            <div className="">2023&copy; MpcTodo</div>
          </div>
        </div>
      </div>
    </div >
  );
}
