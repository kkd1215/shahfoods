import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
export default function Investors() {
  const disclosures20 = [
    {
      name: `74(5)`,
      pdf: `/Disclosures/2020-21/${1}.pdf`,
    },
    {
      name: `REGULATION 74(5)`,
      pdf: `/Disclosures/2020-21/${2}.pdf`,
    },
    {
      name: `Certificate of Bigshare UR 74(5) on 31-12-20-merged (1)`,
      pdf: `/Disclosures/2020-21/${3}.pdf`,
    },
    {
      name: `40(9)`,
      pdf: `/Disclosures/2020-21/${4}.pdf`,
    },
    {
      name: `Intimation to BSE for BM for Q-3`,
      pdf: `/Disclosures/2020-21/${5}.pdf`,
    },
    {
      name: `Compliance Certificate Regulation 7(3) of SEBI (1)_recognized (1)`,
      pdf: `/Disclosures/2020-21/${6}.pdf`,
    },
    {
      name: `Outcome with result and review report on 31-12-20 (1)`,
      pdf: `/Disclosures/2020-21/${7}.pdf`,
    },
    {
      name: `Result for 30-6-20 alongwith Review Report`,
      pdf: `/Disclosures/2020-21/${8}.pdf`,
    },
    {
      name: `Non Applicability compliance report for 31-3-21_24A`,
      pdf: `/Disclosures/2020-21/${9}.pdf`,
    },
    {
      name: `Outcome with result and review report for 30-9-20`,
      pdf: `/Disclosures/2020-21/${10}.pdf`,
    },
    {
      name: `Compliance Certificate U R 7-3 of SEBI (1)`,
      pdf: `/Disclosures/2020-21/${11}.pdf`,
    },
    {
      name: `Disclosure of Related Party for 31-3-20 (1)`,
      pdf: `/Disclosures/2020-21/${12}.pdf`,
    },
    {
      name: `Non applicability of Regu.27(2) of SEBI_recognized`,
      pdf: `/Disclosures/2020-21/${13}.pdf`,
    },
    {
      name: `intimation for BM on 29-6-21 (1) ocr`,
      pdf: `/Disclosures/2020-21/${14}.pdf`,
    },
    {
      name: `Outcome Letter on 29-6-21 and audited result`,
      pdf: `/Disclosures/2020-21/${15}.pdf`,
    },
    {
      name: `Disclosure of Related Party Transactions (1)`,
      pdf: `/Disclosures/2020-21/${16}.pdf`,
    },
  ];
  const disclosures21 = [
    { name: "74(5)", pdf: "/Disclosures/2021-22/1.pdf" },
    {
      name: "CLOSURE OF TRADING WINDOW_31.03.2022",
      pdf: "/Disclosures/2021-22/2.pdf",
    },
    { name: "CLOSURE OF TRADING WINDOW", pdf: "/Disclosures/2021-22/3.pdf" },
    { name: "UPLOAD_30.09.2021", pdf: "/Disclosures/2021-22/4.pdf" },
    { name: "Reg74(5)_shah foods", pdf: "/Disclosures/2021-22/5.pdf" },
    {
      name: "BOARD MEETING INTIMATION 30.06.21",
      pdf: "/Disclosures/2021-22/6.pdf",
    },
    {
      name: "Shah Foods_reg 74(5)_31032022_upload",
      pdf: "/Disclosures/2021-22/7.pdf",
    },
    {
      name: "Board meeting intimation_december2021",
      pdf: "/Disclosures/2021-22/8.pdf",
    },
    {
      name: "Outcome letter dated 10-08-2021",
      pdf: "/Disclosures/2021-22/9.pdf",
    },
    {
      name: "REG 40(9)_SHAH FOODS_MARCH 2022",
      pdf: "/Disclosures/2021-22/10.pdf",
    },
    { name: "31.12.2021", pdf: "/Disclosures/2021-22/11.pdf" },
    { name: "NON APPLICABILITY OF 24A", pdf: "/Disclosures/2021-22/12.pdf" },
    {
      name: "outcome with result for 30-09-2021",
      pdf: "/Disclosures/2021-22/13.pdf",
    },
    {
      name: "Declaration Non Applicability as Large Entity",
      pdf: "/Disclosures/2021-22/14.pdf",
    },
    {
      name: "0244092a-0903-4852-b950-ec77f01c6bea",
      pdf: "/Disclosures/2021-22/15.pdf",
    },
    {
      name: "Board  Meeting Intimation_31.03.2022",
      pdf: "/Disclosures/2021-22/16.pdf",
    },
  ];
  const disclosures22 = [
    {
      name: "Closing of Trading Window_30.09.2022",
      pdf: "/Disclosures/2021-22/1.pdf",
    },
    {
      name: "closing of trading window_31.03.2023",
      pdf: "/Disclosures/2021-22/2.pdf",
    },
    {
      name: "Closure of Trdaing Window_31122022",
      pdf: "/Disclosures/2021-22/3.pdf",
    },
    {
      name: "non applicability of large corporate entity",
      pdf: "/Disclosures/2021-22/4.pdf",
    },
    { name: "Reg 74(5)_Upload", pdf: "/Disclosures/2021-22/5.pdf" },
    { name: "REg74(5)_march 2023", pdf: "/Disclosures/2021-22/6.pdf" },
    { name: "Upload_Reg 74(5)", pdf: "/Disclosures/2021-22/7.pdf" },
    { name: "Upload_Shah Foods 74(5)", pdf: "/Disclosures/2021-22/8.pdf" },
    { name: "7(3)_Upload", pdf: "/Disclosures/2021-22/9.pdf" },
    { name: "Board Meeting_31.12.2022", pdf: "/Disclosures/2021-22/10.pdf" },
    { name: "Intimation_30092022", pdf: "/Disclosures/2021-22/11.pdf" },
    {
      name: "Outcome with financials_02112022",
      pdf: "/Disclosures/2021-22/12.pdf",
    },
    { name: "Outcome31122022", pdf: "/Disclosures/2021-22/13.pdf" },
    { name: "Reg 40(9)_31.03.2023", pdf: "/Disclosures/2021-22/14.pdf" },
    {
      name: "Upload Outcome with result for Q-1 with review reports_30.06.2022",
      pdf: "/Disclosures/2021-22/15.pdf",
    },
    {
      name: "Upload Results in News Papers for 30-6-22",
      pdf: "/Disclosures/2021-22/16.pdf",
    },
    {
      name: "Upload_Newspaper Advertisement",
      pdf: "/Disclosures/2021-22/17.pdf",
    },
    {
      name: "Upload_Non applicability 24A",
      pdf: "/Disclosures/2021-22/18.pdf",
    },
    {
      name: "Outcome with audited results",
      pdf: "/Disclosures/2021-22/19.pdf",
    },
    {
      name: "Upload_Related Party Transactions",
      pdf: "/Disclosures/2021-22/20.pdf",
    },
  ];
  const disclosures24 = [
    {
      name: "Q2 Results",
      pdf: "/Disclosures/2024-25/Q2.pdf",
    },
    {
      name: "Q3 Results",
      pdf: "/Disclosures/2024-25/Q3.pdf",
    }
  ];


  const handleClickOne = (link) => {
    window.open(link, "_blank");
  };
  const patternOne = (num) => {
    window.open(`/SHAREHOLDING PATTERN/2019-20/${num}.xml`, "_blank");
  };
  const patternTwo = (num) => {
    window.open(`/SHAREHOLDING PATTERN/2020-21/${num}.xml`, "_blank");
  };
  const patternThree = (num) => {
    window.open(`/SHAREHOLDING PATTERN/2021-22/${num}.xml`, "_blank");
  };
  const patternFour = (num) => {
    window.open(`/SHAREHOLDING PATTERN/2022-23/${num}.xml`, "_blank");
  };
  const financialResults = (num) => {
    window.open(`/financialResults/2019-20/${num}.pdf`, "_blank");
  };

  const financialResultsTwo = (num) => {
    window.open(`/financialResults/2020-21/${num}.pdf`, "_blank");
  };

  const financialResultsThree = (num) => {
    window.open(`/financialResults/2021-22/${num}.pdf`, "_blank");
  };

  const financialResultsFour = (num) => {
    window.open(`/financialResults/2022-23/${num}.pdf`, "_blank");
  };

  const financialResultsFive = (num) => {
    window.open(`/financialResults/2023-24/${num}.pdf`, "_blank");
  };

  const miscellaneous = (num) => {
    window.open(`/miscellaneous/${num}.pdf`, "_blank");
  };
  return (
    <section className="investors" id="investors">
      <h1>Investors</h1>
      <div className="mainInverstorsSection">
        <details className="Ballot">
          <summary>Ballot Forms</summary>
        </details>
        <details className="Shareholders">
          <summary>Attention of Physical Shareholders</summary>
        </details>
        <details className="Postal">
          <summary>Postal Ballot Result</summary>
        </details>

        <details className="Scrutinizer">
          <summary>Scrutinizer Report</summary>
        </details>
        <details>
          <summary>Notices</summary>
        </details>
        <details>
          <summary> Policies</summary>
        </details>
        <details>
          <summary>Code of Conduct of BOD & Senior Management</summary>
        </details>
        <details>
          <summary>
            Terms and Conditions of appointment of Independent Director
          </summary>
        </details>
        <details>
          <summary>Familiarization Programme For Independent Director</summary>
        </details>

        <details>
          <summary>Important Dates</summary>
        </details>

        <details>
          <summary>BSE Code - 532167, ASE Code- 42227</summary>
        </details>

        <details>
          <summary>Commencement Certificate</summary>
        </details>

        <details>
          <summary>Certificate of Incorporation</summary>
        </details>

        <details>
          <summary> Policies</summary>
        </details>
        <details>
          <summary>Investors Grievances</summary>
        </details>
        <details>
          <summary>Investor Correspondence</summary>
        </details>

        <details>
          <summary>Annual Return</summary>
          <details className="subItem">
            <summary>2019-20</summary>
            <summary
              onClick={() => {
                financialResults(1);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              Outcome with audited results_31.03.2020
            </summary>
          </details>

          <details className="subItem">
            <summary>2020-21</summary>
            <summary
              onClick={() => {
                financialResultsTwo(1);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              upload Outcome Letter_31.03.2021
            </summary>
            <summary
              onClick={() => {
                financialResultsTwo(2);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              upload Outcome with result and review report for 30-9-20
            </summary>

            <summary
              onClick={() => {
                financialResultsTwo(3);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              upload Outcome with result and review report on 31-12-20 (1)
            </summary>

            <summary
              onClick={() => {
                financialResultsTwo(4);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              upload Result for 30-6-20 alongwith Review Report
            </summary>
          </details>

          <details className="subItem">
            <summary>2021-22</summary>
            <summary
              onClick={() => {
                financialResultsThree(1);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              Upload Outcome letter_30.06.2021
            </summary>
            <summary
              onClick={() => {
                financialResultsThree(2);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              Upload outcome with result for 30-09-2021
            </summary>
            <summary
              onClick={() => {
                financialResultsThree(3);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              Upload_31.12.2021
            </summary>
            <summary
              onClick={() => {
                financialResultsThree(4);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              Upload_Outcome_31.03.2022
            </summary>
          </details>
          <details className="subItem">
            <summary>2022-23</summary>

            <summary
              onClick={() => {
                financialResultsFour(1);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              Upload Outcome with result for Q-1 with review reports_30.06.2022
            </summary>
          </details>
          <details className="subItem">
            <summary>2023-24</summary>

            <summary
              onClick={() => {
                financialResultsFive(1);
              }}
              className="summeryItems"
            >
              <span>
                <FaFilePdf />
              </span>
              Annual Report
            </summary>
          </details>
        </details>
        <details>
          <summary>Disclosure under regulation 30 of SEBI LODR</summary>
          <details className="subItem">
            <summary>2020-21</summary>
            {disclosures20.map((e, index) => {
              return (
                <summary
                  key={index}
                  className="summeryItems"
                  onClick={() => {
                    handleClickOne(e.pdf);
                  }}
                >
                  <span>
                    <FaFilePdf />
                  </span>
                  {e.name}
                </summary>
              );
            })}
          </details>
          <details className="subItem">
            <summary>2021-22</summary>
            {disclosures21.map((e, index) => {
              return (
                <summary
                  key={index}
                  className="summeryItems"
                  onClick={() => {
                    handleClickOne(e.pdf);
                  }}
                >
                  <span>
                    <FaFilePdf />
                  </span>
                  {e.name}
                </summary>
              );
            })}
          </details>
          <details className="subItem">
            <summary>2022-23</summary>
            {disclosures22.map((e, index) => {
              return (
                <summary
                  key={index}
                  className="summeryItems"
                  onClick={() => {
                    handleClickOne(e.pdf);
                  }}
                >
                  <span>
                    <FaFilePdf />
                  </span>
                  {e.name}
                </summary>
              );
            })}
          </details>
        </details>
        <details>
          <summary>Disclosure under regulation 33 of SEBI LODR</summary>
          <details className="subItem">
            <summary>2024-25</summary>
            {disclosures24.map((e, index) => {
              return (
                <summary
                  key={index}
                  className="summeryItems"
                  onClick={() => {
                    handleClickOne(e.pdf);
                  }}
                >
                  <span>
                    <FaFilePdf />
                  </span>
                  {e.name}
                </summary>
              );
            })}
          </details>
        </details>
        <details>
          <summary>Shareholding pattern</summary>
          <details className="subItem">
            <summary>2019-20</summary>
            <summary
              onClick={() => {
                patternOne(1);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              519031_17012020 Shah Foods - 31.12.2019 xml file to upload
            </summary>
            <summary
              onClick={() => {
                patternOne(2);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              Shahfoods Shareholding Pattern 30 09 2019 upload
            </summary>
            <summary
              onClick={() => {
                patternOne(3);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              SHP_REVISED_SHAH FOODS_310319
            </summary>
          </details>

          <details className="subItem">
            <summary>2020-21</summary>
            <summary
              onClick={() => {
                patternOne(1);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              SHP_31.03.2021
            </summary>
            <summary
              onClick={() => {
                patternOne(2);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              UPLOAD SHP SHAHFOODS 30092020
            </summary>
            <summary
              onClick={() => {
                patternOne(3);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              upload xml_30.06.2020
            </summary>
            <summary
              onClick={() => {
                patternTwo(4);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              upload519031_31.12.2020r
            </summary>
          </details>
          <details className="subItem">
            <summary>2021-22</summary>
            <summary
              onClick={() => {
                patternThree(1);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              upload xml_30.06.2021
            </summary>
            <summary
              onClick={() => {
                patternThree(2);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              upload xml_30.09.2021
            </summary>
            <summary
              onClick={() => {
                patternThree(3);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              UPLOAD_519031_31032022
            </summary>
            <summary
              onClick={() => {
                patternThree(4);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              XML_UPLOAD_31.12.2021
            </summary>
          </details>
          <details className="subItem">
            <summary>2022-23</summary>
            <summary
              onClick={() => {
                patternFour(1);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              Upload_xml_30.06.2022
            </summary>

            <summary
              onClick={() => {
                patternFour(2);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              UPLOAD_519031_30.09.2022
            </summary>

            <summary
              onClick={() => {
                patternFour(3);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              Upload_519031_31.03.2023
            </summary>

            <summary
              onClick={() => {
                patternFour(4);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              UPLOAD_SHP_31122022
            </summary>

            <summary
              onClick={() => {
                patternFour(5);
              }}
              className="summeryItems"
            >
              <span>
                <BsFiletypeXml />
              </span>
              Upload_xml_30.06.2022
            </summary>
          </details>
        </details>
        <details>
          <summary>Miscellaneous</summary>
          <summary
            onClick={() => {
              miscellaneous(1);
            }}
            className="summeryItems"
          >
            <span>
              <FaFilePdf />
            </span>
            Upload BM Inimation_03.09.2022
          </summary>
          <summary
            onClick={() => {
              miscellaneous(2);
            }}
            className="summeryItems"
          >
            <span>
              <FaFilePdf />
            </span>
            Upload_AGM Disclosure_Book Closure_BSE
          </summary>
          <summary
            onClick={() => {
              miscellaneous(3);
            }}
            className="summeryItems"
          >
            <span>
              <FaFilePdf />
            </span>
            Upload_Annual Report_2021-22_SFL_ocr
          </summary>
          <summary
            onClick={() => {
              miscellaneous(4);
            }}
            className="summeryItems"
          >
            <span>
              <FaFilePdf />
            </span>
            Upload_Outcome_03.09.2022
          </summary>
          <summary
            onClick={() => {
              miscellaneous(5);
            }}
            className="summeryItems"
          >
            <span>
              <FaFilePdf />
            </span>
            Upload_BM Intimation
          </summary>
        </details>
      </div>
    </section>
  );
}
