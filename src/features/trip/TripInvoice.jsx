import StatusTag from "../../ui/StatusTag";
import { parseDate } from "../../utils/utils";

function TripInvoice({ trip }) {
  console.log(trip);

  const invoiceNumber = `INV-${new Date().getFullYear()}-${trip._id.slice(-5)}`;
  return (
    <div className=" bg-white">
      <div className="bg-linear-to-br to-orange-400 text-white py-10 px-4 rounded-t-xl from-orange-500 text-primary-foreground">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold ">INVOICE</h1>
            <p className="mt-1  text-sm font-md">Transport Services</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-md text-primary-foreground/70">
              Invoice #
            </p>
            <p className="text-lg font-bold">{invoiceNumber}</p>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Date: {parseDate(trip.startDate)}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 pb-0">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2 text-stone-500">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              From
            </p>
            <p className="text-lg font-bold text-stone-800">
              Almakt Transport Co.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              +91 80 4567 8900
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              42, Industrial Area, Whitefield, Bengaluru, Karnataka - 560066
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Bill To & Trip Status */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs font-semibold  uppercase tracking-widest text-stone-500">
              Bill To
            </p>
            <div className="space-y-2 text-stone-500">
              <p className="text-lg font-bold text-stone-900">
                {trip.client.name}
              </p>
              <div className="flex items-center gap-2 text-sm ">
                {trip.client.mobile}
              </div>
              <div className="flex items-center gap-2 text-sm ">
                {trip.client?.address}
              </div>
            </div>
          </div>
          <div className="space-y-3  flex justify-start items-end flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest ">
              Status
            </p>
            <p className={`text-sm px-3 py-1`}>
              <StatusTag
                value={trip.isCompleted}
                options={{ successText: "Completed", failText: "Pending" }}
              />
            </p>
          </div>
        </div>

        {/* Trip Details */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-stone-500">
            Trip Details
          </p>
          <div className="rounded-xl border border-stone-300 bg-stone-50 p-5">
            <h3 className="mb-4  font-bold text-foreground">
              Trip to {trip.destination}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-xs text-stone-500">Route</p>
                  <p className="text-sm font-md ">
                    {trip.origin} to {trip.destination}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-xs text-stone-500 ">Driver</p>
                  <p className="text-sm font-md ">{trip.driver.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-xs text-stone-500 ">Vehicle</p>
                  <p className="text-sm font-md text-foreground">
                    {trip.driver.vehicleName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-xs text-stone-500 ">Start Date</p>
                  <p className="text-sm font-md text-foreground">
                    {trip.startDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-xs text-stone-500 ">Deadline</p>
                  <p className="text-sm font-md text-foreground">
                    {parseDate(trip.deadlineDate)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charges Table */}
        <div>
          <p className="mb-4 text-xs text-stone-500 font-semibold uppercase ">
            Charges
          </p>
          <div className="rounded-xl border border-stone-300 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-stone-50 text-stone-500">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider ">
                    Description
                  </th>
                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider ">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-stone-300">
                  <td className="px-5 py-4 text-sm text-foreground">
                    Trip Charges
                  </td>
                  <td className="px-5 py-4 text-right text-sm font-md text-foreground">
                    {trip.tripPrice}
                  </td>
                </tr>
                <tr className="border-t border-stone-300 text-green-500">
                  <td className="px-5 py-4 text-sm text-success">Received</td>
                  <td className="px-5 py-4 text-right text-sm font-md text-success">
                    - {trip.receivedAmount}
                  </td>
                </tr>
                <tr className="border-t border-stone-300 text-stone-900">
                  <td className="px-5 py-4 text-sm font-semibold ">
                    Balance Due
                  </td>
                  <td className="px-5 py-4 text-right text-sm font-bold ">
                    {trip.tripPrice - trip.receivedAmount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-stone-100 bg-stone-50 p-4 text-center">
            <p className="text-xs  mb-1">Total</p>
            <p className="text-lg font-bold text-foreground">
              {trip.tripPrice}
            </p>
          </div>
          <div className="rounded-xl border border-green-100 bg-green-50 p-4 text-center">
            <p className="text-xs  mb-1">Paid</p>
            <p className="text-lg font-bold text-green-500">
              {trip.receivedAmount}
            </p>
          </div>
          <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-4 text-center">
            <p className="text-xs  mb-1">Due</p>
            <p className="text-lg font-bold text-yellow-500">
              {trip.tripPrice - trip.receivedAmount}
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="rounded-lg bg-stone-50 text-stone-500 p-4 text-center">
          <p className="text-xs ">
            Thank you for choosing our transport services. Payment is due upon
            delivery unless otherwise agreed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TripInvoice;
