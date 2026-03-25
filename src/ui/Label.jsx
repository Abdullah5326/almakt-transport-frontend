import { HiOutlineDocumentChartBar } from "react-icons/hi2";

function Label({ children, labelName }) {
  return (
    <label htmlFor="name" className="flex items-center gap-2">
      <span>{children}</span>
      <span className="text-stone-800 text-md">{labelName}</span>
    </label>
  );
}

export default Label;
