import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import FolderItems from "../layouts/FolderItems";

export default function Folder(props) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="p-4 flex items-center gap-4 border-b-2 border-sky-950">
        <div className="flex text-xl cursor-pointer text-sky-950">
          <VscTriangleRight className="hidden" />
          <VscTriangleDown />
        </div>
        <span className="capitalize">
          {props.name} <span className="text-sm pl-2">10</span>
        </span>
      </div>
      <FolderItems data={props.data ? props.data : ""} />
    </div>
  );
}
