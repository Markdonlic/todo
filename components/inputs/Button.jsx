export default function Button(props) {
  return (
    <button
      type={props.type}
      className="bg-sky-800 p-4 text-gray-100 font-semibold uppercase border-transparent border drop-shadow-lg hover:border outline-none hover:border-gray-500 hover:bg-transparent hover:text-neutral-900 transition-all duration-500 focus:bg-sky-700 focus:text-gray-100 focus:transition-none"
    >
      {props.label}
    </button>
  );
}
