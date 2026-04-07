import { HiSearch } from "react-icons/hi";
import { HiOutlineMoon, HiPlus } from "react-icons/hi2";
import OperationsTripForm from "../features/trip/addTripForm/OperationsTripForm";
import { useAddTrip } from "../features/trip/useAddTrip";
import { useState } from "react";
import AddMemberButtons from "./AddMemberButtons";
import Modal from "./Modal";
import AddClientForm from "../features/client/AddClientForm";
import AddDriverForm from "../features/driver/AddDriverForm";

function Navbar() {
  const [showAddTripForm, setShowAddTripForm] = useState(false);
  const [showAddMemberContainer, setAddMemberContainer] = useState(false);
  const [showAddClientForm, setShowAddClientForm] = useState(false);
  const [showAddDriverForm, setShowAddDriverForm] = useState(false);
  const { addTrip, isAddingTrip } = useAddTrip();
  return (
    <nav className="bg-white py-3 pl-6 flex justify-between pr-8 border-b border-stone-300 ">
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
        <div className="flex gap-4 px-3 py-1 items-center">
          <span className="cursor-pointer">
            <HiOutlineMoon />
          </span>
          <div className="relative">
            <button
              className="cursor-pointer relative group bg-orange-500 text-white p-1 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                setAddMemberContainer((show) => !show);
              }}
            >
              <span>
                <HiPlus className="h-5 w-5" />
              </span>
            </button>
            {showAddMemberContainer && (
              <AddMemberButtons
                showAddTripForm={() => {
                  setShowAddTripForm(true);
                  setAddMemberContainer((show) => !show);
                }}
                showAddClientForm={() => {
                  setShowAddClientForm(true);
                  setAddMemberContainer(false);
                }}
                showAddDriverForm={() => {
                  setShowAddDriverForm(true);
                  setAddMemberContainer(false);
                }}
              />
            )}
          </div>
          {showAddTripForm && (
            <Modal closeForm={() => setShowAddTripForm(false)}>
              <OperationsTripForm
                operationFn={addTrip}
                isPending={isAddingTrip}
                name="Add New Trip"
                description={
                  "Fill in the details below to schedule a new trip."
                }
                closeForm={() => setShowAddTripForm(false)}
                submitBtnName="Add New Trip"
              />
            </Modal>
          )}
          {showAddClientForm && (
            <Modal closeForm={() => setShowAddClientForm(false)}>
              <AddClientForm closeForm={() => setShowAddClientForm(false)} />
            </Modal>
          )}
          {showAddDriverForm && (
            <Modal closeForm={() => setShowAddDriverForm(false)}>
              <AddDriverForm closeForm={() => setShowAddDriverForm(false)} />
            </Modal>
          )}
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
