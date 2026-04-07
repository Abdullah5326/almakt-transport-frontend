function StatusTag({ value, options }) {
  return (
    <p
      className={`${value ? "bg-green-500" : `bg-${options.failTextBgColor || "yellow"}-500`}  text-white text-sm rounded-full  px-3 self-start justify-self-start flex`}
    >
      {value ? options.successText : options.failText}
    </p>
  );
}

export default StatusTag;
