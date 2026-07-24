import { useLocalStorage } from "../hooks/useLocalStorage";

function CustomComponent() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      CustomComponent
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

export default CustomComponent;
