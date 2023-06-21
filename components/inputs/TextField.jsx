export default function TextField(props) {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      className="w-full border-2 px-3 py-2 focus:border-sky-300 outline-none transition-all duration-500"
    />
  );
}
