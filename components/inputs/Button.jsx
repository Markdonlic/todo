export default function Button(props) {
  return (
    <button
      type={props.type}
      className="bg-sky-800 p-4 text-gray-100 font-semibold uppercase transition-all duration-500 hover:bg-sky-600"
    >
      {props.label}
    </button>
  );
}
