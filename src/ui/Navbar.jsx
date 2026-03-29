import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { HiOutlineMoon, HiPlus } from "react-icons/hi2";
import AddTripForm from "../features/trip/AddTripForm";

function Navbar() {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <nav className="bg-white py-3 pl-6 flex justify-between pr-8 border-b border-stone-300">
      <div className="relative">
        <input
          type="text"
          className="border border-stone-200 pl-8 p-1 focus:outline-orange-300 rounded-lg"
          placeholder="Search a trip"
        />
        <span className="absolute top-[50%] transform -translate-y-[50%] left-3">
          <HiSearch className="text-stone-400" />
        </span>
      </div>

      <div className="flex gap-4 items-center divide-x-2 divide-stone-200">
        <div className="flex gap-4 px-3 py-1">
          <span className="cursor-pointer">
            <HiOutlineMoon />
          </span>
          <button
            className="cursor-pointer relative group"
            onClick={(e) => {
              e.preventDefault();
              setShowAddForm(true);
            }}
          >
            <HiPlus />
            <p className="bg-stone-50 hidden group-hover:block absolute text-nowrap -bottom-10 px-2 py-1 rounded-full text-stone-500">
              Add Trip
            </p>
          </button>
          {showAddForm && <AddTripForm setShowAddForm={setShowAddForm} />}
        </div>
        <div className="flex gap-2">
          <img
            src="images/default.jpg"
            alt="user image"
            className="rounded-full h-9 "
          />
          <p className="flex flex-col">
            <span className="text-sm">Atif Khan</span>
            <span className="text-xs text-stone-400">Admin</span>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
