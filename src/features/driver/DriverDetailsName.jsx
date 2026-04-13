import { HiDotsVertical, HiOutlinePhone } from "react-icons/hi";
import { HiEnvelope, HiOutlineEnvelope } from "react-icons/hi2";

function DriverDetailsName({ driver }) {
  return (
    <div className="flex items-center gap-4 border-b border-stone-200 w-full pb-7">
      <div>
        <p className="uppercase bg-orange-100 text-orange-700 text-4xl w-18 flex items-center justify-center h-18 rounded-full">
          {driver.name[0]}
        </p>
      </div>
      <div>
        <h1 className="capitalize text-2xl font-bold mb-2">{driver?.name}</h1>
        <div className="flex gap-4">
          <p className="text-sm text-stone-500 flex items-center gap-1">
            <span>
              <HiOutlinePhone />
            </span>
            <span>{driver.mobileNo} </span>
          </p>
          <p className="text-sm text-stone-500  items-center flex gap-1">
            <span>
              <HiOutlineEnvelope />
            </span>
            <span>{driver.email} </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DriverDetailsName;
