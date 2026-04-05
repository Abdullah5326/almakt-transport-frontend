function ButtonAddMember({ children, onClick }) {
  return (
    <span
      onClick={onClick}
      className="py-2 w-full cursor-pointer flex items-start px-2 hover:bg-stone-100 text-stone-900 font-medium"
    >
      {children}
    </span>
  );
}

export default ButtonAddMember;
