import { VscSearch } from "react-icons/vsc";
import { MdAdd } from "react-icons/md";
export default function AddTaskInput(props) {
  return (
    <div className="w-full flex items-center outline-none transition-all duration-500">
      <div className="py-2 pr-2 cursor-pointer hover:text-sky-700 transition-all duration-500">
        <MdAdd className="text-2xl" />
      </div>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className="w-full py-2 text-[15px] focus:outline-none"
      />
    </div>
  );
}
