function OperationsForm({ children, handleSubmit, onSubmit, onError }) {
  return (
    <form
      className="p-8 border border-stone-200 rounded-2xl absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-stone-200  w-[50%] text-stone-800 h-180 overflow-auto z-10"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {children}
    </form>
  );
}

export default OperationsForm;
