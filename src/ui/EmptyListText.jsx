import { HiOutlineClipboardList, HiOutlineInbox } from "react-icons/hi";

function EmptyListText() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center flex items-center flex-col justify-center">
      <p>
        <HiOutlineClipboardList className="h-10 w-10 text-orange-500" />
      </p>
      <h2 className="text-2xl font-bold mb-2">No items yet</h2>
      <p className="text-sm text-stone-600">
        You haven’t added anything yet.
        <br />
        Click “Add” to get started.
      </p>
    </div>
  );
}

export default EmptyListText;
