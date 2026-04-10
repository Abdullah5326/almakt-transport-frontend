import { HiMenu, HiSearch, HiX } from "react-icons/hi";
import { HiOutlineMoon, HiPlus } from "react-icons/hi2";
import OperationsTripForm from "../features/trip/addTripForm/OperationsTripForm";
import { useAddTrip } from "../features/trip/useAddTrip";
import { useState } from "react";
import AddMemberButtons from "./AddMemberButtons";
import Modal from "./Modal";
import AddClientForm from "../features/client/AddClientForm";
import AddDriverForm from "../features/driver/AddDriverForm";
import { Link } from "react-router-dom";
import { useAddItem } from "../hooks/useAddItem";
import { addItem } from "../services/apiServices";
import AddVehicleForm from "../features/vehicle/AddVehicleForm";

function Navbar({ showSmallNav = true, setShowSmallNav }) {
  const [showAddTripForm, setShowAddTripForm] = useState(false);
  const [showAddMemberContainer, setAddMemberContainer] = useState(false);
  const [showAddClientForm, setShowAddClientForm] = useState(false);
  const [showAddDriverForm, setShowAddDriverForm] = useState(false);
  const [showAddVehicleForm, setShowAddVehicleForm] = useState(false);
  const { addTrip, isAddingTrip } = useAddTrip();
  const { addItem: addClient, isPending: isAddingClient } = useAddItem(
    addItem,
    "clients",
  );
  const { addItem: addDriver, isPending: isAddingDriver } = useAddItem(
    addItem,
    "drivers",
  );
  const { addItem: addVehicle, isPending: isAddingVehicle } = useAddItem(
    addItem,
    "vehicles",
  );
  return (
    <nav className="bg-white h-14  items-center  flex justify-between pr-4 lg:pr-8 border-b border-stone-300 ">
      <div className="flex items-center justify-center w-14 lg:w-60 mr-4 border-r border-stone-300 h-full ">
        <Link
          to="/"
          className={`uppercase   text-orange-500 hidden  lg:flex text-1xl font-bold  items-center gap-2 `}
        >
          <span className={``}>Al-makt</span>
          <span className="text-2xl flex items-center ">🚛</span>
        </Link>
        <span className="cursor-pointer lg:hidden">
          {!showSmallNav && (
            <HiMenu className="h-6 w-6" onClick={() => setShowSmallNav(true)} />
          )}
          {showSmallNav && (
            <HiX
              className="h-6 w-6 lg:hidden"
              onClick={() => setShowSmallNav(false)}
            />
          )}
        </span>
      </div>
      <div className="relative max-w-80 w-full">
        <input
          type="text"
          className="border  w-full  border-stone-200 pl-2 lg:pl-8 p-1 focus:outline-orange-300 rounded-lg"
          placeholder="Search a trip"
        />
        <span className="absolute top-[50%] transform -translate-y-[50%] right-1">
          <HiSearch className="text-stone-400" />
        </span>
      </div>

      <div className="flex gap-4 items-center divide-x-2 divide-stone-200">
        <div className="flex gap-4 px-3 items-center">
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
                showAddVehicleForm={() => {
                  setShowAddVehicleForm(true);
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
          {showAddDriverForm && (
            <Modal closeForm={() => setShowAddDriverForm(false)}>
              <AddDriverForm
                closeForm={() => setShowAddDriverForm(false)}
                btnText="Add Driver"
                operationFn={addDriver}
                isPending={isAddingDriver}
                name="Add Driver"
                description="Fill the following credentials to add new driver"
              />
            </Modal>
          )}
          {showAddVehicleForm && (
            <Modal closeForm={() => setShowAddVehicleForm(false)}>
              <AddVehicleForm
                btnText="Add Vehicle"
                name="Add Vehicle"
                description="Fill the following details to add new vehicle"
                operationFn={addVehicle}
                isLoading={isAddingVehicle}
                closeForm={() => setShowAddVehicleForm(false)}
              />
            </Modal>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
