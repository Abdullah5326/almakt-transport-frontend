import { useGetItems } from "../../hooks/useGetItems";
import { addItem, getAllItems } from "../../services/apiServices";
import PrimaryHeading from "../../ui/PrimaryHeading";
import DriverListItem from "./DriverListItem";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useState } from "react";
import PrimaryButton from "../../ui/PrimaryButton";
import EmptyListText from "../../ui/EmptyListText";
import { useAddItem } from "../../hooks/useAddItem";
import AddDriverForm from "./AddDriverForm";
import Modal from "../../ui/Modal";

function Driver() {
  const queryKey = "drivers";
  const { data: drivers, isPending } = useGetItems(queryKey, () =>
    getAllItems("drivers"),
  );
  const { addItem: addDriver, isPending: isAddingDriver } = useAddItem(
    addItem,
    queryKey,
  );
  const [showAddDriverForm, setShowAddDriverForm] = useState(false);
  const [showOperationDriverId, setShowOperationDriverId] = useState(null);

  if (isPending) return <LoadingSpinner />;
  return (
    <div>
      <div className="lg:p-8 p-2">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <PrimaryHeading>Drivers</PrimaryHeading>
            <p>Here is your business drivers</p>
          </div>
          <div className="w-44 h-12 flex">
            <PrimaryButton onClick={() => setShowAddDriverForm(true)}>
              Add Driver
            </PrimaryButton>
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
          </div>
        </div>

        <div className="rounded-2xl bg-white h-100 lg:h-screen border-2 border-stone-200">
          <div className="border-b-2 border-stone-200 grid  md:grid-cols-[5rem_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] py-4 rounded-t-lg px-2 bg-orange-400 text-white font-semibold">
            <p className="hidden md:block">S.No</p>
            <p>Name</p>
            <p>Vehicle Flat No</p>
            <p className="hidden md:block">Vehicle Renewal Date</p>
            <p className="hidden md:block">Id Card Expiry Date</p>
            <p className="hidden md:block">Credit</p>
            <p>Status</p>
          </div>
          <ul className="divide-y divide-stone-100 overflow-y-auto h-s lg:h-[90vh] relative">
            {drivers.length === 0 ? (
              <EmptyListText />
            ) : (
              drivers.map((driver, i) => (
                <DriverListItem
                  driver={driver}
                  no={i}
                  key={driver.id}
                  showOperationDriverId={showOperationDriverId}
                  setShowOperationDriverId={setShowOperationDriverId}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Driver;
