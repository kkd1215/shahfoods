import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
export default function Investors() {
  const disclosures20 = [];
  const disclosures21 = [];
  const disclosures22 = [];
  for (let i = 1; i <= 22; i++) {
    disclosures20.push({
      name: `Disclosures ${i}`,
      pdf: `/Disclosures/2020-21/${i}.pdf`,
    });
  }
  for (let i = 1; i <= 23; i++) {
    disclosures21.push({
      name: `Disclosures ${i}`,
      pdf: `/Disclosures/2021-22/${i}.pdf`,
    });
  }
  for (let i = 1; i <= 24; i++) {
    disclosures22.push({
      name: `Disclosures ${i}`,
      pdf: `/Disclosures/2021-22/${i}.pdf`,
    });
  }
  const handleClickOne = (link) => {
    window.open(link, "_blank");
  };
  const patternOne = (num) => {
    window.open(`/sharegoldingPattern/2019-20/${num}.xml`, "_blank");
  };
  const patternTwo = (num) => {
    window.open(`/sharegoldingPattern/2020-21/${num}.xml`, "_blank");
  };
  const patternThree = (num) => {
    window.open(`/sharegoldingPattern/2021-22/${num}.xml`, "_blank");
  };
  const patternFour = (num) => {
    window.open(`/sharegoldingPattern/2022-23/${num}.xml`, "_blank");
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
  const miscellaneous = (num)=>{
    window.open(`/miscellaneous/${num}.pdf`, "_blank");
  }
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
          <summary>
            <a>Important Dates</a>
          </summary>
        </details>

        <details>
          <summary>
            <a>BSE Code - 532167, ASE Code- 42227</a>
          </summary>
        </details>

        <details>
          <summary>
            <a>Commencement Certificate</a>
          </summary>
        </details>

        <details>
          <summary>
            <a>Certificate of Incorporation</a>
          </summary>
        </details>

        <details>
          <summary>
            {" "}
            <a>Policies</a>
          </summary>
        </details>
        <details>
          <summary>Investors Grievances</summary>
        </details>
        <details>
          <summary>Investor Correspondence</summary>
        </details>
        <details>
          <summary>Annual Return</summary>
        </details>
        <details>
          <summary>Annual Secretarial Compliance Report</summary>
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
              Pattern one
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
              Pattern two
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
              Pattern three
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
              Pattern one
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
              Pattern two
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
              Pattern three
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
              Pattern four
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
              Pattern one
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
              Pattern Two
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
              Pattern three
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
              Pattern four
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
              Pattern one
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
              Pattern two
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
              Pattern three
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
              Pattern four
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
              Pattern five
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
        </details>
      </div>
    </section>
  );
}
