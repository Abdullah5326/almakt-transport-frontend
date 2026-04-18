function PrimaryButton({ children, onClick }) {
  return (
    <button
      className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-sm text-white px-2 py-1 w-full 
    rounded-full cursor-pointer focus:bg-orange-500"
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
