function StatusTag({ value, options }) {
  return (
    <p
      className={`${value ? "bg-green-500" : `bg-${options.failTextBgColor || "yellow"}-500`}  text-white text-sm rounded-full  px-2 sm:px-3  justify-self-start flex`}
    >
      <span>{value ? options.successText : options.failText}</span>
    </p>
  );
}

export default StatusTag;
