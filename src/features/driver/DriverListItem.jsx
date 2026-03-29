import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function DriverListItem({ driver, no }) {
  const navigate = useNavigate();

  return (
    <li
      className=" capitalize grid grid-cols-[5rem_1fr_1fr_1fr_1fr_1fr] hover:bg-stone-100 transition-all py-4 rounded-t-lg px-2 cursor-pointer"
      onClick={() => navigate(`/drivers/${driver._id}`)}
    >
      <p>{no + 1}</p>
      <p>{driver.name}</p>
      <p>{driver.vehicleName}</p>
      <p>{new Date(driver.vehicleRenewalDate).toLocaleDateString()}</p>
      <p>{new Date(driver.idCardExpiryDate).toLocaleDateString()}</p>
      <div className="flex justify-between items-center">
        <p>{driver.mobileNo}</p>
        <span className="cursor-pointer">
          <HiOutlineDotsHorizontal className="w-6 h-6 text-stone-300" />
        </span>
      </div>
    </li>
  );
}

export default DriverListItem;
