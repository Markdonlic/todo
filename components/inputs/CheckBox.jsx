export default function CheckBox(props) {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
        className="border-2 px-3 py-2 cursor-pointer"
      />
      <label for={props.id} className="cursor-pointer">{props.label}</label>
    </div>
  );
}
