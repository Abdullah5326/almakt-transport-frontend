import { Controller } from "react-hook-form";
import { DatePicker as DatePickerUI } from "antd";

function DatePicker({ control, errMsg, name }) {
  return (
    <Controller
      control={control}
      rules={{ required: errMsg }}
      name={name}
      render={({ field }) => (
        <DatePickerUI
          value={field.value || null}
          onChange={(date) => field.onChange(date ?? undefined)}
          onBlur={field.onBlur}
          style={{
            height: 40,
          }}
        />
      )}
    ></Controller>
  );
}

export default DatePicker;
