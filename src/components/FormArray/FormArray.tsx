import { ChangeEvent, FC, FormEvent, useState } from "react";
import InputField from "../InputField/InputField";
import { InputFieldType } from "../../models/InputField";
import { generateId } from "../../utils/helpers";
import style from "./FormArray.module.scss";

const initialValues = [{ id: generateId(), value: "" }];

const FormArray: FC = () => {
  const [inputs, setInputs] = useState<InputFieldType[]>(initialValues);

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

  const handleDeleteItem = (id: string) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  return (
    <form className={style["form-array"]} onSubmit={handleSubmit}>
      <div className={style["form-array__inputs"]}>
        Items
        {inputs.map((input) => (
          <InputField
            key={input.id}
            id={input.id}
            value={input.value}
            onInputChange={handleInputChange}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
      <button type="button" onClick={handleAddItem}>
        Add Item
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormArray;
