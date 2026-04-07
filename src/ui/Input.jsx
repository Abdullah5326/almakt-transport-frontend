function Input({ placeholder, type, name, register, labelName }) {
  return (
    <input
      type={type}
      placeholder={`e.g ${placeholder}`}
      className="border-stone-200 w-full bg-white h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
      name={name}
      {...register(name, { required: `The ${labelName} field is required` })}
      id={name}
    />
  );
}

export default Input;
