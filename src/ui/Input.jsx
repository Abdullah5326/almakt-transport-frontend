function Input({ placeholder, type }) {
  return (
    <input
      type={type}
      placeholder={`e.g ${placeholder}`}
      className="border-stone-200 w-full bg-white h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
    />
  );
}

export default Input;
