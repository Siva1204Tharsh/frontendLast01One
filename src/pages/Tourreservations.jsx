import React from "react";
import Datatable from "../components/datatable/Datatable";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import jspdf from "jspdf";
import "jspdf-autotable";
import moment from "moment";

const Tourreservations = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data } = useFetch(`${path}`);

  function generatePDF(tickets) {
    const doc = new jspdf();
    const tableColumn = [
      "No",
      "Name Of Package",
      "Tour Category",
      "Duration",
      "Price",
      "Maximum Group Count",
      "Added By",
    ];
    const tableRows = [];

    tickets
      .slice(0)
      .reverse()
      .map((tour, index) => {
        const ticketData = [
          index + 1,
          tour.name,
          tour.category,
          tour.duration,
          tour.price,
          tour.groupCount,
          tour.currentUser,

          moment(tour.createdAt).format("MM/DD/YYYY h:mm A"), // format createdAt using moment
          moment(tour.updatedAt).format("MM/DD/YYYY h:mm A"), // format updatedAt using moment
        ];
        tableRows.push(ticketData);
      });

    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    doc.text("IntorNetExplorer", 14, 15).setFontSize(16); // add heading
    doc.text("Tour Details Report", 14, 23).setFontSize(10);
    doc.text(`Report Generated Date: ${dateStr}`, 14, 30).setFontSize(10);
    doc
      .text("IntorNetExplorers,Jaffna,Sri lanka", 14, 37)
      .setFontSize(10);

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 7 },
      startY: 42,
    });

    doc.save(`Tour-Details-Report_${dateStr}.pdf`);
  }

  return (
    <div className="bg-[#F5F5F5]">
      

      <div>
        <Datatable columns={columns} />
      </div>
    </div>
  );
};

export default Tourreservations;
