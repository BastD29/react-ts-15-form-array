import { ChangeEvent, FormEvent, useState } from "react";

interface InputField {
  id: string;
  value: string;
}

export default function Test1() {
  const [inputs, setInputs] = useState<InputField[]>([
    { id: generateId(), value: "" },
  ]);

  function generateId(): string {
    return Math.random().toString(36).substring(2, 11);
  }

  const handleInputChange = (
    id: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputs = inputs.map((input) =>
      input.id === id ? { ...input, value: event.target.value } : input
    );
    setInputs(newInputs);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted Values:", inputs);
  };

  const handleAddItem = () => {
    setInputs([...inputs, { id: generateId(), value: "" }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <div key={input.id}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChange(input.id, e)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddItem}>
        Add Item
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
