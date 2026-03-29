import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCreditCard,
  HiOutlineCurrencyDollar,
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
import { useClients } from "../client/useClients";
import { useDrivers } from "../driver/useDrivers";
import { useForm } from "react-hook-form";
import EmptyFieldErrorMessage from "../../ui/EmptyFieldErrorMessage";
import { useAddTrip } from "./useAddTrip";

function AddTripForm({ setShowAddForm }) {
  const { clients, isPending: isLoadingClients } = useClients();
  const { drivers, isPending: isLoadingDrivers } = useDrivers();
  const { addTrip, isAddingTrip } = useAddTrip();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Trip to Karachi",
      origin: "Lahore Multan",
      destination: "Karachi Landa Bazar",
      startDate: new Date(),
      deadlineDate: new Date(),
      tripPrice: 50000,
      receivedAmount: 25000,
    },
  });

  function onSubmit(data) {
    console.log(errors);
    console.log(data);
    if (data && !isAddingTrip) addTrip(data);
    if (!isAddingTrip) setShowAddForm(false);
  }

  function onError() {
    console.log(errors);
  }
  return (
    <>
      <div
        className="absolute left-0 right-0 bottom-0 top-0 bg-black/50 z-9"
        onClick={() => setShowAddForm(false)}
      ></div>
      <form
        className="p-8 border border-stone-200 rounded-2xl absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-stone-200  w-[50%] text-stone-800 h-180 overflow-auto z-10"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
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
          <Input
            placeholder="Trip to Lahore"
            type="text"
            name="name"
            register={register}
            required={"required"}
            labelName="trip name"
          />
          {errors?.name && (
            <EmptyFieldErrorMessage message={errors.name.message} />
          )}
        </FormInputBox>

        <div className="text-stone-500">
          <div className="mt-4 flex flex-col gap-3">
            <SecondaryHeading>Route Details</SecondaryHeading>
            <div className="flex justify-between gap-6">
              <FormInputBox>
                <Label labelName={"Location (Origin)"}>
                  <HiOutlineLocationMarker className="text-orange-400" />
                </Label>
                <Input
                  placeholder="Karachi Warehouse"
                  type="text"
                  name="origin"
                  register={register}
                  labelName="origin"
                />
                {errors?.origin && (
                  <EmptyFieldErrorMessage message={errors.origin.message} />
                )}
              </FormInputBox>
              <FormInputBox>
                <Label labelName={"Destination"}>
                  <HiOutlineLocationMarker className="text-green-400" />
                </Label>
                <Input
                  placeholder="Lahore City Center"
                  type="text"
                  name="destination"
                  register={register}
                  labelName="destination"
                />
                {errors?.destination && (
                  <EmptyFieldErrorMessage
                    message={errors.destination.message}
                  />
                )}
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
                <Input
                  type="date"
                  placeholder="2026/03/25"
                  name="startDate"
                  register={register}
                  labelName="start date"
                />
                {errors?.startDate && (
                  <EmptyFieldErrorMessage message={errors.startDate.message} />
                )}
              </FormInputBox>
              <FormInputBox>
                <Label labelName={"deadline date"}>
                  <HiOutlineClock className="text-red-500" />
                </Label>
                <input
                  type="date"
                  placeholder={"2026/05/02"}
                  name="deadlineDate"
                  className="border-stone-200 w-full bg-white h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
                  {...register("deadlineDate", {
                    required: "The deadline date is required",
                    validate: (deadlineDate, trip) =>
                      new Date(trip.startDate).getTime() <
                        new Date(trip.deadlineDate).getTime() ||
                      "The deadline date is always come after the start date",
                  })}
                />
                {errors?.deadlineDate && (
                  <EmptyFieldErrorMessage
                    message={errors.deadlineDate.message}
                  />
                )}
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
                {!isLoadingDrivers && (
                  <select
                    className="border-stone-200 w-full bg-white h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
                    name="driver"
                    {...register("driver", {
                      required: "Please select driver",
                    })}
                  >
                    {drivers.map((driver) => (
                      <option value={driver.id} key={driver.id}>
                        {driver.name}
                      </option>
                    ))}
                    {errors?.driver && (
                      <EmptyFieldErrorMessage message={errors.driver.message} />
                    )}
                  </select>
                )}
              </FormInputBox>
              <FormInputBox>
                <Label labelName={"Client"}>
                  <HiOutlineUsers className="text-green-400" />
                </Label>
                {!isLoadingClients && (
                  <select
                    className="border-stone-200 w-full bg-white h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
                    name="client"
                    {...register("client", {
                      required: "Please select client",
                    })}
                  >
                    {clients.map((client) => (
                      <option value={client.id} key={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                )}
                {errors?.client && (
                  <EmptyFieldErrorMessage message={errors.client.message} />
                )}
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
                <Input
                  placeholder="50000"
                  type="number"
                  name="tripPrice"
                  labelName="trip price"
                  register={register}
                />
                {errors?.price && (
                  <EmptyFieldErrorMessage message={errors.price.message} />
                )}
              </FormInputBox>
              <FormInputBox>
                <Label labelName={"Received Amount"}>
                  <HiOutlineCurrencyDollar className="text-green-400 h-5 w-5" />
                </Label>
                <input
                  placeholder="32000"
                  type="number"
                  name="receivedAmount"
                  register={register}
                  className="border-stone-200 w-full bg-white h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
                  {...register("receivedAmount", {
                    required: "The trip price is required",

                    validate: (value, trip) =>
                      trip.tripPrice > value ||
                      "The received amount is always less than trip price.",
                  })}
                />
                {errors?.receivedAmount && (
                  <EmptyFieldErrorMessage
                    message={errors.receivedAmount.message}
                  />
                )}
              </FormInputBox>
              <FormInputBox>
                <Label labelName={"Payment Method"}>
                  <HiOutlineCreditCard className="text-orange-400 h-5 w-5" />
                </Label>
                <select
                  className="outline-none bg-white  rounded-lg text-stone-900 h-10"
                  name="paymentMethod"
                  {...register("paymentMethod", {
                    required: "Please select any payment method",
                  })}
                >
                  <option value="cash">Cash</option>
                  <option value="online payment">Online Payment</option>
                </select>
                {errors?.paymentMethod && (
                  <EmptyFieldErrorMessage
                    message={errors.paymentMethod.message}
                  />
                )}
              </FormInputBox>
            </div>
          </div>
          <button
            className={`w-full text-white mt-8 py-2 rounded-lg hover:bg-orange-500 transition-all duration-300 ${isAddingTrip ? "bg-orange-300" : "bg-orange-400"}`}
            disabled={isAddingTrip}
          >
            {isAddingTrip ? "Adding" : "Add New Trip"}
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTripForm;
