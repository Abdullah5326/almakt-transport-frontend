function Input({
  placeholder,
  type,
  name,
  register,
  labelName,
  disabledValue,
}) {
  return (
    <input
      type={type}
      placeholder={`e.g ${placeholder}`}
      className="border-stone-200 w-full bg-white border disabled:text-stone-700 disabled:bg-stone-50 text-sm disabled:border-stone-200 h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
      name={name}
      {...register(name, {
        required: labelName ? `The ${labelName} field is required` : false,
      })}
      id={name}
      disabled={disabledValue}
    />
  );
}

export default Input;
