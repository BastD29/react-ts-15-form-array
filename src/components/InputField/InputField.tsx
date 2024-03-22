import { ChangeEvent, FC } from "react";
import style from "./InputField.module.scss";

type InputFieldProps = {
  id: string;
  value: string;
  onInputChange: (id: string, event: ChangeEvent<HTMLInputElement>) => void;
  onDeleteItem: (id: string) => void;
};

const InputField: FC<InputFieldProps> = ({
  id,
  value,
  onInputChange,
  onDeleteItem,
}) => (
  <div className={style["input-field"]}>
    <input
      placeholder="Enter some text"
      type="text"
      value={value}
      onChange={(e) => onInputChange(id, e)}
    />
    <button type="button" onClick={() => onDeleteItem(id)}>
      X
    </button>
  </div>
);

export default InputField;
