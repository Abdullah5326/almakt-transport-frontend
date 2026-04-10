import {
  HiOutlineArrowLeft,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCreditCard,
  HiOutlineCurrencyDollar,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { useTrip } from "./useTrip";
import { parseDate } from "../../utils/utils";
import LoadingSpinner from "../../ui/LoadingSpinner";
import StatusTag from "../../ui/StatusTag";
import TripInvoiceDownloadBtn from "../../ui/TripInvoiceDownloadBtn";

function TripDetails() {
  const { trip, isLoadingTrip } = useTrip();
  const navigate = useNavigate();
  if (isLoadingTrip) return <LoadingSpinner />;
  console.log(trip);
  return (
    <div>
      <div className=" py-4 px-2 lg:pl-12 lg:pr-30 flex justify-between items-center bg-white">
        <div className="flex items-center gap-6 ">
          <button
            onClick={() => navigate(-1)}
            className="hover:bg-orange-500 p-3 rounded-lg hover:text-white"
          >
            <HiOutlineArrowLeft className="font-bold" />
          </button>
          <div>
            <h2 className="lg:text-2xl text-xl font-bold">{trip.name}</h2>
            <p className="lg:text-sm text-xs text-stone-500">
              {trip.origin} to {trip.destination}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <StatusTag
              value={trip.isCompleted}
              options={{ successText: "Completed", failText: "Pending" }}
            />
          </div>
          <p className="bg-orange-500 text-white text-xs py-1 px-3 rounded-full">
            <TripInvoiceDownloadBtn tripData={trip} />
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-55 px-4 py-20 gap-8">
        <div className="bg-white w-full lg:w-110 lg:p-6 p-3 rounded-xl border border-stone-200">
          <div className="mb-3 flex items-center gap-3">
            <span>
              <HiOutlineLocationMarker className="text-orange-400 h-5 w-5" />
            </span>
            <h2 className="lg:text-xl text-lg  font-bold">Route</h2>
          </div>
          <div className=" flex gap-3 ">
            <div className="flex flex-col items-center justify-between py-2 ">
              <span className="justify-self-start self-start grow-0 ">
                <GoDotFill className="text-blue-700 h-5 w-5" />
              </span>
              <span className="bg-stone-300 self-center grow justify-self-stretch flex flex-col text-stone-300 px-[0.5px]"></span>
              <span className="grow-0 self-end ">
                <GoDotFill className="text-green-700 h-5 w-5" />
              </span>
            </div>
            <div className="space-y-2 ">
              <p className="flex flex-col">
                <span className="text-stone-500 text-sm">Origin</span>
                <span className="font-bold">{trip.origin}</span>
              </p>
              <p className="flex flex-col">
                <span className="text-stone-500">Destination</span>
                <span className="font-bold">{trip.destination}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full lg:w-110 p-6 rounded-xl border border-stone-200">
          <div className="flex gap-3 items-center mb-3">
            <span>
              <HiOutlineCalendar className="text-orange-400 h-5 w-5" />
            </span>
            <h2 className="lg:text-1xl text-lg font-bold">Schedule</h2>
          </div>

          <div className="divide-y divide-stone-200">
            <div className="flex items-center gap-3 pb-4">
              <span>
                <HiOutlineCalendar className="text-stone-500 h-5 w-5" />
              </span>
              <div>
                <div>
                  <p className="text-sm text-stone-500">Trip Start Date</p>
                  <p className="font-bold">{parseDate(trip.startDate)}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <span>
                <HiOutlineClock className="text-red-400 h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-stone-500">Deadline Date</p>
                <p className="font-bold">{parseDate(trip.deadlineDate)}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Driver and client information fo trip  */}
        <div className="bg-white lg:w-110 p-6 rounded-xl border border-stone-200">
          <div className="flex gap-3 items-center mb-3">
            <span>
              <HiOutlineUsers className="text-orange-400 h-5 w-5" />
            </span>
            <h2 className="text-xl font-bold">Personal</h2>
          </div>

          <div className="divide-y divide-stone-200">
            <div className="flex items-center gap-3 pb-4">
              <span>
                <HiOutlineUsers className="text-stone-500 h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-stone-500">Driver</p>
                <p
                  className="font-bold underline cursor-pointer"
                  onClick={() => navigate(`/drivers/${trip.driver._id}`)}
                >
                  {trip.driver?.name}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <span>
                <HiOutlineUser className="text-stone-500 h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-stone-500">Client</p>
                <p
                  className="font-bold underline  cursor-pointer"
                  onClick={() => navigate(`/clients/${trip.client._id}`)}
                >
                  {trip.client?.name}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Payment Section of trip  */}
        <div className="bg-white lg:w-110 p-6 rounded-xl border border-stone-200">
          <div className="flex gap-3 items-center mb-3">
            <span>
              <HiOutlineCurrencyDollar className="text-orange-400 h-5 w-5" />
            </span>
            <h2 className="text-xl font-bold">Payment</h2>
          </div>
          <div className="flex flex-col divide-y divide-stone-200 ">
            <div className="pb-8 flex flex-col divide-y divide-stone-200">
              <div className="pb-4">
                <p className="text-sm text-stone-500">Trip Price</p>
                <div className="flex justify-between">
                  <p className="text-xl font-bold text-orange-500">
                    Rs.{trip.tripPrice}
                  </p>
                  <p className="text-sm px-3 font-bold rounded-full border flex items-center gap-1 border-stone-200">
                    <span>
                      <HiOutlineCreditCard />
                    </span>
                    <span>{trip.paymentMethod}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-sm text-stone-500 pt-4">
                <div className="flex justify-between">
                  <p>Received</p>
                  <p className="text-orange-500 font-bold">
                    Rs. {trip.receivedAmount}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Remaining</p>
                  <p className="text-red-600 font-bold">
                    Rs. {trip.tripPrice - trip.receivedAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;
