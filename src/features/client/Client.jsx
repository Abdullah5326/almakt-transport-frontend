import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems } from "../../services/apiServices";
import LoadingSpinner from "../../ui/LoadingSpinner";
import PrimaryHeading from "../../ui/PrimaryHeading";
import ClientListItem from "./ClientListItem";

function Client() {
  const { data: clients, isPending } = useGetItems("clients", () =>
    getAllItems("clients"),
  );
  if (isPending) return <LoadingSpinner />;
  return (
    <div className="lg:p-8 p-4 w-full">
      <div className="lg:px-8">
        <div className="mb-10">
          <PrimaryHeading>Clients</PrimaryHeading>
          <p>Here is your business client</p>
        </div>
        <div className="rounded-2xl bg-white h-screen border-2 border-stone-200 text-xs md:text-[15px]">
          <div className="border-b-2 border-stone-200 grid grid-cols-[1.5fr_1fr_2fr] md:grid-cols-[5rem_1fr_1fr_1fr_1fr] py-4 rounded-t-lg px-1 bg-orange-400 text-white">
            <p className="hidden md:block">S.No</p>
            <p>Name</p>
            <p className="">Trips</p>
            <p className="hidden md:block">Mobile No</p>
            <p>Status</p>
          </div>
          <ul className="divide-y divide-stone-100 overflow-y-auto h-[90vh]">
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
