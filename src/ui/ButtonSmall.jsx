function ButtonSmall({ disabledValue, onClick, children }) {
  return (
    <button
      disabled={disabledValue}
      className="cursor-pointer hover:bg-white p-2 rounded-full "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonSmall;
