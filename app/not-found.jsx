import Link from "next/link";
import {TbError404} from "react-icons/tb"

export default function NotFound() {
  return (
    <div className="w-full h-[100vh] dark:bg-neutral-900 dark:text-white flex flex-col items-center justify-center gap-4">
      <TbError404 className="text-[200px] text-gray-300 my-0 mx-0 py-0"/>
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 via-orange-400 to-red-500">
        Not Found...!
      </h1>
      <p className="font-satoshi font-semibold">
        Could not find requested resource
      </p>
      <p clasName="font-satoshi font-semibold">
        Go back to <Link href="/" className="px-3 mx-2 py-1 font-bold text-md border-[1px] border-gray-500 rounded-lg hover:rounded-none text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 via-orange-400 to-red-500">Home</Link> Page
      </p>
    </div>
  );
}
