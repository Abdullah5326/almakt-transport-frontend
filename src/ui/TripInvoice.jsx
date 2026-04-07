import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function TripInvoice({ data }) {
  const invoiceRef = useRef();

  const {
    _id,
    name,
    origin,
    destination,
    startDate,
    deadlineDate,
    driver,
    client,
    tripPrice,
    receivedAmount,
  } = data;

  const balance = tripPrice - receivedAmount;

  const invoiceDate = new Date().toLocaleDateString();

  const downloadPDF = async () => {
    const element = invoiceRef.current;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    // const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`${invoiceNumber}.pdf`);
  };

  return (
    <div className="p-6 h-180">
      {/* Download Button */}
      <button
        onClick={downloadPDF}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download PDF
      </button>

      {/* Invoice */}
      <div
        ref={invoiceRef}
        className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl"
      >
        {/* Header */}
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Almakt Transport</h1>
            <p>Pakistan</p>
            <p>0300-0000000</p>
          </div>

          <div className="text-right">
            <h2 className="text-xl font-semibold">Invoice</h2>
            <p>Invoice #: {invoiceNumber}</p>
            <p>Date: {invoiceDate}</p>
          </div>
        </div>

        {/* Client */}
        <div className="mb-6">
          <h3 className="font-semibold">Bill To:</h3>
          <p>{client.name}</p>
          <p>{client.address}</p>
          <p>{client.mobileNo}</p>
        </div>

        {/* Trip */}
        <div className="mb-6">
          <h3 className="font-semibold">Trip Details:</h3>
          <p>
            <strong>{name}</strong>
          </p>
          <p>
            {origin} → {destination}
          </p>
          <p>Start: {new Date(startDate).toLocaleDateString()}</p>
          <p>Deadline: {new Date(deadlineDate).toLocaleDateString()}</p>
          <p>Driver: {driver.name}</p>
          <p>Vehicle: {driver.vehicleName}</p>
        </div>

        {/* Table */}
        <table className="w-full border mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Description</th>
              <th className="border p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Trip Charges</td>
              <td className="border p-2">{tripPrice} PKR</td>
            </tr>
            <tr>
              <td className="border p-2">Received</td>
              <td className="border p-2">- {receivedAmount} PKR</td>
            </tr>
            <tr>
              <td className="border p-2 font-bold">Balance</td>
              <td className="border p-2 font-bold">{balance} PKR</td>
            </tr>
          </tbody>
        </table>

        {/* Summary */}
        <div className="text-right">
          <p>Total: {tripPrice} PKR</p>
          <p>Paid: {receivedAmount} PKR</p>
          <p className="text-red-500">Due: {balance} PKR</p>
        </div>
      </div>
    </div>
  );
}

export default TripInvoice;
