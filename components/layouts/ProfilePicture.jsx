import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";

export default function ProfilePicture() {
  return (
    <div className="flex flex-col w-full gap-4 items-center justify-center bg-white p-4">
      <div className="flex justify-end w-full">
        <span className="border p-2 hover:text-sky-700 hover:bg-gray-50 cursor-pointer drop-shadow-lg">
          <AiOutlineEdit />
        </span>
      </div>
      <div className="border border-green-500 p-1 rounded-full cursor-pointer">
        <Image
          alt="profile picture"
          src="/images/logo.svg"
          width={140}
          height={140}
          className="object-contain object-center"
        />
      </div>
      <div className="capitalize font-semibold">ken miles webber</div>
      <hr className="w-full" />
      <div className="flex flex-col gap-2 justify-start w-full">
        <p>
          <span className="font-semibold">Email: </span>
          <span>mail@mail.com</span>
        </p>
        <p>
          <span className="font-semibold">Registered date: </span>
          <span>2023-06-26</span>
        </p>
        <p>
          <span className="font-semibold">Status: </span>
          <span>Active</span>
        </p>
      </div>
    </div>
  );
}
