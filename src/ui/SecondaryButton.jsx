function SecondaryButton({ children, onClick, disabledValue }) {
  return (
    <button
      className="py-2 px-4 border border-orange-300 rounded-full cursor-pointer hover:bg-orange-100 transition-all duration-300"
      onClick={onClick}
      disabled={disabledValue}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
