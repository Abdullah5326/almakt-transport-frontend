import SmallSpinner from "./SmallSpinner";

function FormSubmittingSection({ isPending, btnName }) {
  return (
    <div className="text-stone-500">
      <button
        className={`w-full flex items-center justify-center gap-3 text-white mt-8 py-2 cursor-pointer rounded-lg hover:bg-orange-500 transition-all duration-300 ${isPending ? "bg-orange-300" : "bg-orange-400"}`}
        // disabled={isPending}
        type="submit"
      >
        {isPending && <SmallSpinner />}
        <span>{isPending ? btnName.split(" ")[0] + "ing" : btnName}</span>
      </button>
    </div>
  );
}

export default FormSubmittingSection;
