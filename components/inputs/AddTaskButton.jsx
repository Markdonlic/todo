export default function AddTaskButton(props) {
  return (
    <button
      type={props.type}
      className="bg-sky-950 p-2 text-sm text-gray-100 font-semibold capitalize border-transparent border drop-shadow-lg hover:border outline-none hover:border-gray-500 hover:bg-transparent hover:text-sky-950 transition-all duration-500 focus:bg-sky-700 focus:text-gray-100 focus:transition-none"
    >
      {props.label}
    </button>
  );
}
