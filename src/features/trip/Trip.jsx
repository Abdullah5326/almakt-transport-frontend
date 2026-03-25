import PrimaryHeading from "../../ui/PrimaryHeading";
import Trips from "./Trips";
import TripStatusBox from "./TripStatusBox";

function Trip() {
  return (
    <div>
      <PrimaryHeading>Trips</PrimaryHeading>
      <div className="flex gap-2 text-sm items-center mt-6 mb-13">
        <div className="bg-orange-400 text-white py-1 px-3 rounded-sm">
          All Orders
        </div>
        <TripStatusBox name="In progress" quantity={20} />
        <TripStatusBox name="Completed" quantity={10} />
        <TripStatusBox name="Pending" quantity={2} />
        <TripStatusBox name="Cancelled" quantity={3} />
      </div>
      <div className="pr-8">
        <Trips />
      </div>
    </div>
  );
}

export default Trip;
