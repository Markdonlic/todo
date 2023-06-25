import {
  AiOutlineMenu,
  AiOutlineBulb,
  AiOutlineGroup,
  AiOutlineUser,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { GoSync } from "react-icons/go";
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
  MdOutlineHome,
  MdOutlineImportantDevices,
  MdOutlineSettings,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import SearchInput from "@/components/inputs/SearchInput";
import AddTaskInput from "@/components/inputs/AddTaskInput";
import Button from "../inputs/Button";
import AddTaskButton from "../inputs/AddTaskButton";

export default function TaskNotification(props) {
  return (
    <div className="bg-white p-4 flex items-center gap-4">
      <div className="flex text-2xl cursor-pointer text-sky-950">
        <RiCheckboxBlankCircleLine  className="hover:text-sky-700 transition-all duration-500" />
        <RiCheckboxCircleFill  className="hover:text-sky-700 hidden transition-all duration-500" />
      </div>
      <div className="flex-1 flex-col justify-center">
        <p>Notification</p>
        <span className="flex items-center gap-1 text-sm text-neutral-400 capitalize">
          <span>Important</span>|<span>2023-12-30</span>|<span>Active</span>
        </span>
      </div>
      <div className="flex text-2xl cursor-pointer text-sky-950">
        {props.important ? <AiFillStar  className="hover:text-sky-700 transition-all duration-500" />
        : <AiOutlineStar  className="hover:text-sky-700 transition-all duration-500" />}
      </div>
    </div>
  );
}
