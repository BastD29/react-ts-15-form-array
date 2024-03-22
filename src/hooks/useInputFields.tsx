// import { ChangeEvent, useState } from "react";
// import { generateId } from "../utils/helpers";
// import { InputFieldType } from "../models/InputField";

// const useInputFields = (
//   initialState: InputFieldType[] = [{ id: generateId(), value: "" }]
// ) => {
//   const [inputs, setInputs] = useState<InputFieldType[]>(initialState);

//   const handleInputChange = (
//     id: string,
//     event: ChangeEvent<HTMLInputElement>
//   ) => {
//     const newInputs = inputs.map((input) =>
//       input.id === id ? { ...input, value: event.target.value } : input
//     );
//     setInputs(newInputs);
//   };

//   const handleAddItem = () => {
//     setInputs([...inputs, { id: generateId(), value: "" }]);
//   };

//   const handleDeleteItem = (id: string) => {
//     setInputs(inputs.filter((input) => input.id !== id));
//   };

//   return { inputs, handleInputChange, handleAddItem, handleDeleteItem };
// };

// export default useInputFields;
