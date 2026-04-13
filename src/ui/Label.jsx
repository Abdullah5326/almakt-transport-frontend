function Label({ children, labelName }) {
  return (
    <label htmlFor={labelName} className="flex items-center gap-2">
      <span>{children}</span>
      <p>{labelName}</p>
    </label>
  );
}

export default Label;
