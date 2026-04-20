import { HiMenu, HiSearch, HiX } from "react-icons/hi";
import { HiOutlineMoon, HiPlus } from "react-icons/hi2";
import OperationsTripForm from "../features/trip/addTripForm/OperationsTripForm";
import { useState } from "react";
import AddMemberButtons from "./AddMemberButtons";
import Modal from "./Modal";
import AddClientForm from "../features/client/AddClientForm";
import AddDriverForm from "../features/driver/AddDriverForm";
import { Link } from "react-router-dom";
import { useAddItem } from "../hooks/useAddItem";
import { addItem } from "../services/apiServices";
import AddVehicleForm from "../features/vehicle/AddVehicleForm";
import AddMaintenanceAmountForm from "../features/maintenance/AddMaintenanceAmountForm";

function Navbar({ showSmallNav = true, setShowSmallNav }) {
  const [showAddTripForm, setShowAddTripForm] = useState(false);
  const [showAddMemberContainer, setAddMemberContainer] = useState(false);
  const [showAddClientForm, setShowAddClientForm] = useState(false);
  const [showAddDriverForm, setShowAddDriverForm] = useState(false);
  const [showAddVehicleForm, setShowAddVehicleForm] = useState(false);
  const [showAddMaintenanceForm, setShowAddMaintenanceForm] = useState(false);
  // const { addTrip, isAddingTrip } = useAddTrip();
  const { addItem: addTrip, isPending: isAddingTrip } = useAddItem(
    addItem,
    "trips",
  );
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
  const { addItem: addMaintenance, isPending: isAddingMaintenance } =
    useAddItem(addItem, "maintenances");
  return (
    <nav className="bg-white h-16 w-screen rounded-lg grid grid-cols-[17rem_1fr]   border-stone-300 ">
      <div className="h-full">
        <Link
          to="/"
          className={`uppercase  justify-center border-b border-orange-300 bg-orange-400 hidden h-full text-white  lg:flex text-1xl font-bold  items-center gap-2 `}
        >
          <span className={``}>Al Makt</span>
          <span className="text-2xl flex items-center  ">🚛</span>
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
      <div className="flex items-center px-8 justify-between  rounded-lg ">
        <div className="relative max-w-100 w-full  h-10">
          <input
            type="text"
            className="border  w-full  border-stone-200 pl-2 h-full lg:pl-4 py-2 focus:outline-orange-300 rounded-full"
            placeholder="Search a trip"
          />
          <span className="absolute top-[50%] transform -translate-y-[50%] bg-orange-400 px-3  h-full flex items-center right-0 rounded-r-full">
            <HiSearch className="text-stone-50" />
          </span>
        </div>

        <div className="flex gap-4 items-center divide-x-2  divide-stone-200">
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
                  setAddMemberContainer={setAddMemberContainer}
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
                  showAddMaintenanceForm={() => {
                    setShowAddMaintenanceForm(true);
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
            {showAddMaintenanceForm && (
              <Modal closeForm={() => setShowAddMaintenanceForm(false)}>
                <AddMaintenanceAmountForm
                  btnText="Add Maintenance"
                  name="Add Maintenance Amount"
                  description="Fill the following details about the money spent on vehicle"
                  operationFn={addMaintenance}
                  isLoading={isAddingMaintenance}
                  closeForm={() => setShowAddMaintenanceForm(false)}
                />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
