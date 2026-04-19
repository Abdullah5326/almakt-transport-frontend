import { useState } from "react";
import { useGetItems } from "../../hooks/useGetItems";
import { addItem, getAllItems } from "../../services/apiServices";
import LoadingSpinner from "../../ui/LoadingSpinner";
import PrimaryHeading from "../../ui/PrimaryHeading";
import ClientListItem from "./ClientListItem";
import EmptyListText from "../../ui/EmptyListText";
import PrimaryButton from "../../ui/PrimaryButton";
import { useAddItem } from "../../hooks/useAddItem";
import AddClientForm from "./AddClientForm";
import Modal from "../../ui/Modal";

function Client() {
  const queryKey = "clients";
  const [showAddClientForm, setShowAddClientForm] = useState(false);
  const [showOperationsMenuClientId, setShowOperationMenuClientId] =
    useState(null);
  const { addItem: addClient, isPending: isAddingClient } = useAddItem(
    addItem,
    queryKey,
  );
  const { data: clients, isPending } = useGetItems(queryKey, () =>
    getAllItems("clients"),
  );
  if (isPending) return <LoadingSpinner />;
  return (
    <div className="lg:p-8 p-4 w-full">
      <div className="lg:px-8">
        <div className="mb-10 flex justify-between items-center">
          <div>
            <PrimaryHeading>Clients</PrimaryHeading>
            <p>Here is your business client</p>
          </div>
          <div className="h-10 w-32 flex">
            <PrimaryButton onClick={() => setShowAddClientForm(true)}>
              Add Client
            </PrimaryButton>
            {showAddClientForm && (
              <Modal closeForm={() => setShowAddClientForm(false)}>
                <AddClientForm
                  closeForm={() => setShowAddClientForm(false)}
                  btnText="Add Client"
                  operationFn={addClient}
                  isLoading={isAddingClient}
                  name="Add Client"
                  description="Fill the details to add new client in your business"
                />
              </Modal>
            )}
          </div>
        </div>
        <div className="rounded-2xl bg-white h-screen border-2 border-stone-200 text-xs md:text-[15px]">
          <div className="border-b-2 border-stone-200 grid grid-cols-[1.5fr_1fr_2fr] md:grid-cols-[5rem_1fr_1fr_1fr_1fr] py-4 rounded-t-lg px-1 bg-orange-400 text-white font-semibold">
            <p className="hidden md:block">S.No</p>
            <p>Name</p>
            <p className="">Trips</p>
            <p className="hidden md:block">Mobile No</p>
            <p>Status</p>
          </div>
          <ul className="divide-y divide-stone-100 overflow-y-auto h-[90vh] relative">
            {clients.length === 0 ? (
              <EmptyListText />
            ) : (
              clients.map((client, i) => (
                <ClientListItem
                  client={client}
                  no={i}
                  key={client.id}
                  showOperationsMenuClientId={showOperationsMenuClientId}
                  setShowOperationMenuClientId={setShowOperationMenuClientId}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Client;
