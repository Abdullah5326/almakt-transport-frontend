function FormSubmittingSection({ isPending, btnName }) {
  return (
    <div className="text-stone-500">
      <button
        className={`w-full text-white mt-8 py-2 cursor-pointer rounded-lg hover:bg-orange-500 transition-all duration-300 ${isPending ? "bg-orange-300" : "bg-orange-400"}`}
        disabled={isPending}
      >
        {isPending ? btnName.split(" ")[0] + "ing" : btnName}
      </button>
    </div>
  );
}

export default FormSubmittingSection;
