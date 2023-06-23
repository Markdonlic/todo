import { BiSortAlt2 } from "react-icons/bi";
import { CiBrightnessUp } from "react-icons/ci";
import { AiOutlineBulb, AiOutlineGroup } from "react-icons/ai";

const PageMenu = (props) => {
  return (
    <div className="sticky top-[5rem] flex flex-col gap-4">
      <div className="w-full flex items-start justify-between bg-white p-4">
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center gap-2 text-neutral-800 text-2xl font-semibold">
            <div className="text-3xl">
              {props.icon ? props.icon : <CiBrightnessUp />}
            </div>
            <div className="capitalize">{props.title}</div>
          </div>
          <p className="text-sm capitalize tracking-tight text-gray-500">
            Thursday, June 22
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          {props.sort && (
            <div className="flex gap-[2px] items-center cursor-pointer border-2 border-transparent hover:text-sky-950 hover:border-sky-900 p-1 transition-all duration-500">
              <BiSortAlt2 className="text-xl" />
              <span className="hidden sm:block text-sm">Sort</span>
            </div>
          )}
          {props.group && (
            <div className="flex gap-[2px] items-center cursor-pointer border-2 border-transparent hover:text-sky-950 hover:border-sky-900 p-1 transition-all duration-500">
              <AiOutlineGroup className="text-xl" />
              <span className="hidden sm:block text-sm">Group</span>
            </div>
          )}
          {props.suggestion && (
            <div className="flex gap-[2px] items-center cursor-pointer border-2 border-transparent hover:text-sky-950 hover:border-sky-900 p-1 transition-all duration-500">
              <AiOutlineBulb className="text-xl" />
              <span className="hidden sm:block text-sm">Suggestion</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageMenu;
