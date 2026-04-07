import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import OperationMenu from "../../ui/OperationMenu";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import { deleteItem } from "../../services/apiServices";
import StatusTag from "../../ui/StatusTag";

function ClientListItem({ client, no }) {
  const navigate = useNavigate();
  const { deleteItem: deleteClient, isDeletingItem: isDeletingClient } =
    useDeleteItem(deleteItem, "clients", "clients");
  return (
    <li
      className="grid grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[5rem_1fr_1fr_1fr_1fr] py-4 hover:bg-stone-100 rounded-t-lg px-1 cursor-pointer"
      onClick={() => navigate(`/clients/${client._id}`)}
    >
      <p className="hidden md:block">{no + 1})</p>
      <p className="line-clamp-1">{client.name}</p>
      <p className="justify-self-center">
        {client.trips.length > 0 ? client.trips.length : "New"}
      </p>
      <p className="hidden md:block"> {client.mobileNo}</p>
      <div className="flex justify-between items-center ">
        <StatusTag
          value={false}
          options={{
            successText: "Permanent",
            successColor: "green",
            failText: "Onetime",
            failColor: "yellow",
          }}
        />
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
