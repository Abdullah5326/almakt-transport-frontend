import SmallSpinner from "./SmallSpinner";

function PrimaryButton({ children, onClick, disabledValue }) {
  return (
    <button
      className="bg-orange-400 hover:bg-orange-500 transition-all duration-300 text-sm text-white px-2 py-1 w-full 
    rounded-full cursor-pointer focus:bg-orange-500 flex items-center justify-center gap-4"
      onClick={() => {
        onClick();
      }}
    >
      {children}
      {disabledValue && <SmallSpinner />}
    </button>
  );
}

export default PrimaryButton;
