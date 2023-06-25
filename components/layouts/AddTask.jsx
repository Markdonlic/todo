import { SlCalender } from "react-icons/sl";
import { GoSync } from "react-icons/go";
import { MdOutlineNotificationsNone } from "react-icons/md";
import AddTaskInput from "@/components/inputs/AddTaskInput";
import AddTaskButton from "../inputs/AddTaskButton";

export default function AddTask() {
  return (
    <>
      <div className="bg-white px-4 flex flex-col">
        <div className="py-2">
          <AddTaskInput placeholder="Add a task" />
        </div>
        <div className="border-t-2 py-3 flex items-center justify-between text-neutral-500">
          <div className="flex items-center gap-2">
            <div className="text-xl hover:text-sky-700 transition-all duration-500 cursor-pointer">
              <SlCalender />
            </div>
            <div className="text-2xl hover:text-sky-700 transition-all duration-500 cursor-pointer">
              <MdOutlineNotificationsNone />
            </div>
            <div className="text-xl hover:text-sky-700 transition-all duration-500 cursor-pointer">
              <GoSync />
            </div>
          </div>
          <AddTaskButton label="add" />
        </div>
      </div>
    </>
  );
}
