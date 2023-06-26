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
    <>
      <div className="h-[5rem] flex z-40 w-full fixed top-0 items-center justify-between bg-white text-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setOpenArch(!openArch)} className="rounded-lg p-2 border-2 bg-sky-950 text-white border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer font-bold">
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
      <div className="flex justify-start z-30">
       {/*  <div className="hidden z-30 w-[4rem] mx-auto">
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
        </div> */}
        <div className={`${openArch ? "w-[212px]" : "w-[66px]"} flex z-30 sticky bottom-0`}>
          <div className="flex flex-col w-fit justify-between pt-[6rem] pb-4 fixed overflow-auto top-0 left-0 h-screen px-2 text-2xl bg-white">
            <div className="flex flex-col items-start font-mono">
              <Link href="/dashboard/" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiHome className="" />
                <p className={`${openArch ? "block" : "hidden"} text-[15px] sm:text-xl`}>Tasks</p>
              </Link>
              <Link href="/dashboard/today" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiBrightnessUp />
                <p className={`${openArch ? "block" : "hidden"} text-[15px] sm:text-xl`}>Today</p>
              </Link>
              <Link href="/dashboard/important" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <AiOutlineStar />
                <p className={`${openArch ? "block" : "hidden"} text-[15px] sm:text-xl`}>Important</p>
              </Link>
              <Link href="/dashboard/planned" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiViewList />
                <p className={`${openArch ? "block" : "hidden"} text-[15px] sm:text-xl`}>Planned</p>
              </Link>
              <Link href="/dashboard/tags" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiFolderOn />
                <p className={`${openArch ? "block" : "hidden"} text-[15px] sm:text-xl`}>Groups</p>
              </Link>
              <Link href="/dashboard/bin" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <AiOutlineDelete />
                <p className={`${openArch ? "block" : "hidden"} text-[15px] sm:text-xl`}>Trash</p>
              </Link>
            </div>
            <div className="flex flex-col items-start font-mono">
              <Link href="/dashboard/profile" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiUser />
                <p className={`${openArch ? "block" : "hidden"} text-[15px] sm:text-xl`}>Profile</p>
              </Link>
              <Link href="/dashboard/settings" className="flex w-full gap-4 items-center rounded-lg p-2 border-2 border-transparent hover:border-2 hover:border-sky-700 hover:bg-transparent hover:text-sky-700 hover:font-bold transition-all duration-500 cursor-pointer">
                <CiSettings />
                <p className={`${openArch ? "block" : "hidden"} text-[15px] sm:text-xl`}>Settings</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="h-[5rem] w-full bg-white"></div>
          <div className="pb-[4rem]">{children}</div>
          <div className="h-[3rem] w-full z-20 flex sm:gap-10 items-center fixed bottom-0 left-0 bg-white text-sm flex-wrap sm:flex-none tracking-widest font-mono justify-end px-2 sm:px-0 text-gray-500">
            <div className="">2023&copy; MpcTodo</div>
          </div>
        </div>
      </div>
    </>
  );
}
