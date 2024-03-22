import React from "react";
import { FaFilePdf } from "react-icons/fa";

export default function Reports() {
  let reports = [
    {
      name: "Annual report 2013-14",
      link: "/reports/2013-14.pdf",
    },
    {
      name: "Annual report 2014-15",
      link: "/reports/2014-15.pdf",
    },
    {
      name: "Annual report 2015-16",
      link: "/reports/2015-16.pdf",
    },
    {
      name: "Annual report 2016-17",
      link: "/reports/2016-17.pdf",
    },
    {
      name: "Annual report 2017-18",
      link: "/reports/2017-18.pdf",
    },
    {
      name: "Annual report 2018-19",
      link: "/reports/2018-19.pdf",
    },
    {
      name: "Annual report 2019-20",
      link: "/reports/2019-20.pdf",
    },
    {
      name: "Annual report 2020-21",
      link: "/reports/2020-21.pdf",
    },
  ];

  const handleDownload = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="reports" id="reports">
      <h1>Annual Reports</h1>
      <div className="mainReportSection">
        {reports.map((e, index) => {
          return (
            <button key={index} onClick={() => handleDownload(e.link)}>
              <FaFilePdf />
              &nbsp;{e.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
