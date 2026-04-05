import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems } from "../../services/apiServices";
import PrimaryHeading from "../../ui/PrimaryHeading";
import ClientListItem from "./ClientListItem";

function Client() {
  const { data: clients, isPending } = useGetItems("clients", () =>
    getAllItems("clients"),
  );
  if (isPending) return <div>Loading...</div>;
  return (
    <div className="p-8">
      <div className="px-8">
        <div className="mb-10">
          <PrimaryHeading>Clients</PrimaryHeading>
          <p>Here is your business client</p>
        </div>
        <div className="rounded-2xl bg-white h-screen border-2 border-stone-200">
          <div className="border-b-2 border-stone-200 grid grid-cols-[5rem_1fr_1fr_1fr] py-4 rounded-t-lg px-2">
            <p>S.No</p>
            <p>Name</p>
            <p>Trips</p>
            <p>Mobile No</p>
          </div>
          <ul className="divide-y divide-stone-100 overflow-y-auto h-110">
            {clients.map((client, i) => (
              <ClientListItem client={client} no={i} key={client.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Client;
