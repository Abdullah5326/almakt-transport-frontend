function ButtonSmall({ disabledValue, onClick, children }) {
  return (
    <button
      disabled={disabledValue}
      className="cursor-pointer hover:bg-stone-200 w-full flex justify-between p-2 first:rounded-t-lg last:rounded-b-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonSmall;
