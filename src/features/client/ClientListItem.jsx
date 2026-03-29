import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function ClientListItem({ client, no }) {
  const navigate = useNavigate();
  return (
    <li
      className="grid grid-cols-[5rem_1fr_1fr_1fr] py-4 hover:bg-stone-100 rounded-t-lg px-2 cursor-pointer"
      onClick={() => navigate(`/clients/${client._id}`)}
    >
      <p>{no + 1})</p>
      <p>{client.name}</p>
      <p>{client.trips.length > 0 ? client.trips.length : "New client"}</p>
      <p className="flex justify-between items-center">
        {client.mobileNo}
        <span className="cursor-pointer">
          <HiOutlineDotsHorizontal className="w-6 h-6 text-stone-300" />
        </span>
      </p>
    </li>
  );
}

export default ClientListItem;
