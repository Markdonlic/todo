import { AiFillStar, AiOutlineStar, AiOutlineDelete } from "react-icons/ai";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { CiHome, CiBrightnessUp, CiViewList } from "react-icons/ci";

export default function FolderItems(props) {
  return (
    <div className="bg-white p-4 flex items-center gap-4">
      <div className="flex text-2xl cursor-pointer text-sky-950">
        <RiCheckboxBlankCircleLine />
        <RiCheckboxCircleFill className="hidden" />
      </div>
      <div className="flex-1 flex-col justify-center capitalize">
        <p>{props.data.title}</p>
        <span className="hidden sm:flex items-center gap-1 text-sm text-neutral-400">
          <span>{props.data.tag}</span>|<span>{props.data.date}</span>|
          <span>{props.data.status}</span>
        </span>
      </div>
      <div className="flex gap-2 text-2xl cursor-pointer text-sky-950">
        {props.data.task && (
          <CiHome className="hover:text-sky-700 transition-all duration-500" />
        )}
        {props.data.today && (
          <CiBrightnessUp className="hover:text-sky-700 transition-all duration-500" />
        )}
        {props.data.important && (
          <AiFillStar className="hover:text-sky-700 transition-all duration-500" />
        )}
        {props.data.planned && (
          <CiViewList className="hover:text-sky-700 transition-all duration-500" />
        )}
        {props.data.delete && (
          <AiOutlineDelete className="hover:text-sky-700 transition-all duration-500" />
        )}
      </div>
    </div>
  );
}
