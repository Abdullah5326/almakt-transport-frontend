import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 11,
    backgroundColor: "#ffffff",
  },

  // HEADER (simulate gradient with strong color)
  header: {
    backgroundColor: "#f97316", // Tailwind orange-500
    color: "#ffffff",
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },

  headerRight: {
    textAlign: "right",
  },

  label: {
    fontSize: 9,
    color: "#e5e7eb",
  },

  // SECTION
  section: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  muted: {
    color: "#78716c", // stone-500
    fontSize: 10,
  },

  bold: {
    fontWeight: "bold",
  },

  heading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1c1917",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  // TRIP BOX
  tripBox: {
    borderWidth: 1,
    borderColor: "#d6d3d1",
    backgroundColor: "#f5f5f4",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },

  gridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  gridItem: {
    width: "50%",
    marginBottom: 8,
  },

  // TABLE
  table: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#d6d3d1",
    borderRadius: 10,
    overflow: "hidden",
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f5f5f4",
  },

  tableRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#d6d3d1",
  },

  cellLeft: {
    flex: 1,
    padding: 10,
  },

  cellRight: {
    flex: 1,
    padding: 10,
    textAlign: "right",
  },

  // SUMMARY
  summaryRow: {
    flexDirection: "row",
    marginTop: 16,
    gap: 10,
  },

  summaryBox: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    textAlign: "center",
  },

  totalBox: {
    backgroundColor: "#f5f5f4",
    borderWidth: 1,
    borderColor: "#e7e5e4",
  },

  paidBox: {
    backgroundColor: "#dcfce7",
    borderWidth: 1,
    borderColor: "#bbf7d0",
  },

  dueBox: {
    backgroundColor: "#fef9c3",
    borderWidth: 1,
    borderColor: "#fde68a",
  },

  footer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#f5f5f4",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 9,
    color: "#78716c",
  },
});

const TripInvoicePDF = ({ trip }) => {
  const invoiceNumber = `INV-${new Date().getFullYear()}-${trip._id.slice(-5)}`;
  const invoiceDate = new Date().toLocaleDateString();
  const balance = trip.tripPrice - trip.receivedAmount;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>INVOICE</Text>
            <Text>Transport Services</Text>
          </View>

          <View style={styles.headerRight}>
            <Text style={styles.label}>Invoice #</Text>
            <Text style={styles.bold}>{invoiceNumber}</Text>
            <Text style={styles.label}>Date: {invoiceDate}</Text>
          </View>
        </View>

        {/* FROM */}
        <View style={styles.section}>
          <Text style={styles.muted}>FROM</Text>
          <Text style={styles.heading}>Almakt Transport Co.</Text>
          <Text style={styles.muted}>+91 80 4567 8900</Text>
          <Text style={styles.muted}>Industrial Area, Whitefield</Text>
        </View>

        {/* BILL + STATUS */}
        <View style={[styles.section, styles.rowBetween]}>
          <View>
            <Text style={styles.muted}>BILL TO</Text>
            <Text style={styles.heading}>{trip.client.name}</Text>
            <Text style={styles.muted}>{trip.client.mobile}</Text>
            <Text style={styles.muted}>{trip.client.address}</Text>
          </View>

          <View>
            <Text style={styles.muted}>STATUS</Text>
            <Text style={styles.heading}>
              {trip.isCompleted ? "Completed" : "Pending"}
            </Text>
          </View>
        </View>

        {/* TRIP DETAILS */}
        <View style={styles.section}>
          <Text style={styles.muted}>TRIP DETAILS</Text>

          <View style={styles.tripBox}>
            <Text style={styles.heading}>Trip to {trip.destination}</Text>

            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Text style={styles.muted}>Route</Text>
                <Text>
                  {trip.origin} → {trip.destination}
                </Text>
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.muted}>Driver</Text>
                <Text>{trip.driver.name}</Text>
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.muted}>Vehicle</Text>
                <Text>{trip.driver.vehicleName}</Text>
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.muted}>Start</Text>
                <Text>{trip.startDate}</Text>
              </View>

              <View style={styles.gridItem}>
                <Text style={styles.muted}>Deadline</Text>
                <Text>{trip.deadlineDate}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* TABLE */}
        <View style={styles.section}>
          <Text style={styles.muted}>CHARGES</Text>

          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.cellLeft}>Description</Text>
              <Text style={styles.cellRight}>Amount</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.cellLeft}>Trip Charges</Text>
              <Text style={styles.cellRight}>{trip.tripPrice}</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.cellLeft}>Received</Text>
              <Text style={styles.cellRight}>- {trip.receivedAmount}</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={[styles.cellLeft, styles.bold]}>Balance Due</Text>
              <Text style={[styles.cellRight, styles.bold]}>{balance}</Text>
            </View>
          </View>
        </View>

        {/* SUMMARY */}
        <View style={styles.section}>
          <View style={styles.summaryRow}>
            <View style={[styles.summaryBox, styles.totalBox]}>
              <Text>Total</Text>
              <Text style={styles.bold}>{trip.tripPrice}</Text>
            </View>

            <View style={[styles.summaryBox, styles.paidBox]}>
              <Text>Paid</Text>
              <Text style={styles.bold}>{trip.receivedAmount}</Text>
            </View>

            <View style={[styles.summaryBox, styles.dueBox]}>
              <Text>Due</Text>
              <Text style={styles.bold}>{balance}</Text>
            </View>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text>Thank you for choosing our transport services.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default TripInvoicePDF;
