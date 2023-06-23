import { VscSearch } from "react-icons/vsc";
export default function SearchInput(props) {
  return (
    <div className="w-full flex py-1 sm:py-2 items-center border-2 outline-none transition-all duration-500">
      <VscSearch className="mx-3 sm:mx-4"/>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className="w-full text-[15px] focus:outline-none"
      />
    </div>
  );
}
