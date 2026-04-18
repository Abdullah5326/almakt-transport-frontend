import { Select } from "antd";
import { Controller } from "react-hook-form";

function SelectInput({
  control,
  errMsg,
  placeholder,
  options,
  optionName,
  name,
  value,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: errMsg }}
      render={({ field }) => (
        <Select
          {...field}
          showSearch={{ optionFilterProp: "label" }}
          placeholder={placeholder}
          style={{ height: 41, color: "black" }}
          options={options.map((option) => {
            return {
              label: option[optionName],
              value: value ? option[value] : option["value"],
            };
          })}
          name={name}
        />
      )}
    />
  );
}

export default SelectInput;
