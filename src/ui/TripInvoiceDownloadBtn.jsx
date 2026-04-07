import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoiceDocument from "./TripInvoiceDocument";

function TripInvoiceDownloadBtn({ tripData }) {
  const fileName = `INV-${tripData._id.slice(-5)}.pdf`;

  return (
    <PDFDownloadLink
      document={<InvoiceDocument trip={tripData} />}
      fileName={fileName}
    >
      {({ loading }) => (loading ? "Generating PDF..." : "Download Invoice")}
    </PDFDownloadLink>
  );
}

export default TripInvoiceDownloadBtn;
