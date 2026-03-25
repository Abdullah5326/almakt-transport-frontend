import { HiOutlineDotsHorizontal } from "react-icons/hi";

function DriverListItem({ driver, no }) {
  return (
    <li className="grid grid-cols-[5rem_1fr_1fr_1fr_1fr_1fr] py-4 rounded-t-lg px-2 cursor-pointer">
      <p>{no + 1}</p>
      <p>{driver.name}</p>
      <p>{driver.vehicleName}</p>
      <p>{new Date(driver.vehicleRenewalDate).toLocaleDateString()}</p>
      <p>{new Date(driver.idCardExpiryDate).toLocaleDateString()}</p>
      <p className="flex justify-between items-center">
        <p>{driver.mobileNo}</p>
        <span className="cursor-pointer">
          <HiOutlineDotsHorizontal className="w-6 h-6 text-stone-300" />
        </span>
      </p>
    </li>
  );
}

export default DriverListItem;
