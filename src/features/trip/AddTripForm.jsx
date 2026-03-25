import {
  HiCurrencyDollar,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCreditCard,
  HiOutlineCurrencyDollar,
  HiOutlineDocument,
  HiOutlineLocationMarker,
  HiOutlineUser,
  HiOutlineUsers,
  HiX,
} from "react-icons/hi";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import SecondaryHeading from "../../ui/SecondaryHeading";
import FormInputBox from "../../ui/FormInputBox";

function AddTripForm({ setShowAddForm }) {
  return (
    <>
      <div
        className="absolute left-0 right-0 bottom-0 top-0 bg-black/50"
        onClick={() => setShowAddForm(false)}
      ></div>
      <form className="p-8 border border-stone-200 rounded-2xl absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-stone-200  w-[50%] text-stone-800">
        <button
          className="absolute top-3 right-3 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setShowAddForm(false);
          }}
        >
          <HiX />
        </button>
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">Add a new Trip</h1>
          <p className="text-sm text-stone-500">
            Fill in the details below to schedule a new trip.
          </p>
        </div>

        <FormInputBox>
          <Label labelName={"Trip Name"}>
            <span>
              <HiOutlineDocumentChartBar className="text-orange-400" />
            </span>
          </Label>
          <Input placeholder="Trip to Lahore" type="text" />
        </FormInputBox>

        <div className="text-stone-500">
          <div className="mt-4 flex flex-col gap-3">
            <SecondaryHeading>Route Details</SecondaryHeading>
            <div className="flex justify-between gap-6">
              <FormInputBox>
                <Label labelName={"Location (Origin)"}>
                  <HiOutlineLocationMarker className="text-orange-400" />
                </Label>
                <Input placeholder="Karachi Warehouse" type="text" />
              </FormInputBox>
              <FormInputBox>
                <Label labelName={"Destination"}>
                  <HiOutlineLocationMarker className="text-green-400" />
                </Label>
                <Input placeholder="Lahore City Center" type="text" />
              </FormInputBox>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <SecondaryHeading>Schedule</SecondaryHeading>
            <div className="flex justify-between gap-6">
              <FormInputBox>
                <Label labelName={"Trip Date)"}>
                  <HiOutlineCalendar className="text-orange-400" />
                </Label>
                <Input type="date" />
              </FormInputBox>
              <FormInputBox>
                <Label labelName={"Deadline Date"}>
                  <HiOutlineClock className="text-red-500" />
                </Label>
                <Input type="date" />
              </FormInputBox>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <SecondaryHeading>Driver & Client</SecondaryHeading>
            <div className="flex justify-between gap-6">
              <FormInputBox>
                <Label labelName={"Driver "}>
                  <HiOutlineUser className="text-orange-400" />
                </Label>
                <Input placeholder="Ahmad Khan" />
              </FormInputBox>
              <FormInputBox>
                <Label labelName={"Client"}>
                  <HiOutlineUsers className="text-green-400" />
                </Label>
                <Input placeholder="Junaid Khan" />
              </FormInputBox>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <SecondaryHeading>Payment Details</SecondaryHeading>
            <div className="flex justify-between gap-6">
              <FormInputBox>
                <Label labelName={"Trip Price"}>
                  <HiOutlineCurrencyDollar className="text-orange-400 h-5 w-5" />
                </Label>
                <Input placeholder="50000" />
              </FormInputBox>
              <FormInputBox>
                <Label labelName={"Received Amount"}>
                  <HiOutlineCurrencyDollar className="text-green-400 h-5 w-5" />
                </Label>
                <Input placeholder="Lahore City Center" />
              </FormInputBox>
              <FormInputBox>
                <Label labelName={"Payment Method"}>
                  <HiOutlineCreditCard className="text-orange-400 h-5 w-5" />
                </Label>
                <select className="outline-none bg-white h-full rounded-lg text-stone-900">
                  <option value="cash">Cash</option>
                  <option value="online payment">Online Payment</option>
                </select>
              </FormInputBox>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTripForm;
