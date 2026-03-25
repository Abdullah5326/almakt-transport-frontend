import { HiOutlineDotsHorizontal } from "react-icons/hi";

function ClientListItem({ client, no }) {
  return (
    <li className="grid grid-cols-[5rem_1fr_1fr_1fr] py-4 rounded-t-lg px-2 cursor-pointer">
      <p>{no + 1})</p>
      <p>{client.name}</p>
      <p>{client.trips.length > 0 ? client.trips.length : "New client"}</p>
      <p className="flex justify-between items-center">
        <span
          className={`${client.isActive ? "bg-green-200  border-green-400 text-green-900 " : "bg-red-300 border-red-500 text-red-900"} border rounded-full py-1 px-3`}
        >
          {client.isActive ? "Active" : "Not active"}
        </span>
        <span className="cursor-pointer">
          <HiOutlineDotsHorizontal className="w-6 h-6 text-stone-300" />
        </span>
      </p>
    </li>
  );
}

export default ClientListItem;
