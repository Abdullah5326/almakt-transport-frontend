import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems } from "../../services/apiServices";
import PrimaryHeading from "../../ui/PrimaryHeading";
import DriverListItem from "./DriverListItem";
import LoadingSpinner from "../../ui/LoadingSpinner";

function Driver() {
  const { data: drivers, isPending } = useGetItems("drivers", () =>
    getAllItems("drivers"),
  );
  if (isPending) return <LoadingSpinner />;
  return (
    <div>
      <div className="p-8">
        <div className="mb-10">
          <PrimaryHeading>Drivers</PrimaryHeading>
          <p>Here is your business drivers</p>
        </div>
        <div className="rounded-2xl bg-white h-screen border-2 border-stone-200">
          <div className="border-b-2 border-stone-200 grid grid-cols-[5rem_1fr_1fr_1fr_1fr_1fr_1fr] py-4 rounded-t-lg px-2">
            <p>S.No</p>
            <p>Name</p>
            <p>Vehicle Flat No</p>
            <p>Vehicle Renewal Date</p>
            <p>Id Card Expiry Date</p>
            <p>Status</p>
            <p>Mobile No</p>
          </div>
          <ul className="divide-y divide-stone-100 overflow-y-auto h-110">
            {drivers.map((driver, i) => (
              <DriverListItem driver={driver} no={i} key={driver.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Driver;
