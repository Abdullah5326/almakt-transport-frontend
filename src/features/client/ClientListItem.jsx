import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import OperationMenu from "../../ui/OperationMenu";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import { deleteItem } from "../../services/apiServices";

function ClientListItem({ client, no }) {
  const navigate = useNavigate();
  const { deleteItem: deleteClient, isDeletingItem: isDeletingClient } =
    useDeleteItem(deleteItem, "clients", "clients");
  return (
    <li
      className="grid grid-cols-[5rem_1fr_1fr_1fr] py-4 hover:bg-stone-100 rounded-t-lg px-2 cursor-pointer"
      onClick={() => navigate(`/clients/${client._id}`)}
    >
      <p>{no + 1})</p>
      <p>{client.name}</p>
      <p>{client.trips.length > 0 ? client.trips.length : "New client"}</p>
      <div className="flex justify-between items-center">
        {client.mobileNo}
        <OperationMenu
          disabledValue={isDeletingClient}
          itemId={client._id}
          operationDeleteFn={deleteClient}
        />
      </div>
    </li>
  );
}

export default ClientListItem;
