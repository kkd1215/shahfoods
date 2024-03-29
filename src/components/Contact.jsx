import React from "react";
import { FaAddressBook } from "react-icons/fa6";
import { MdContacts, MdEmail, MdRealEstateAgent } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { VscActivateBreakpoints } from "react-icons/vsc";
export default function Contact() {
  return (
    <>
      <section className="Committees">
        <h1>Composition of Various Committees</h1>
        <h2>
          The composition of different committees of Board of Directors is as
          under
        </h2>
        <div className="mainCommitteesSection">
          <div className="cardCom">
            <h3>Audit Committee</h3>
            <p>
              
            </p>
          </div>
          <div className="cardCom">
            <h3>Nomination & Remuneration Committees Composition</h3>
            <p>
              
            </p>
          </div>

          <div className="cardCom">
            <h3>Stake holders Relationship Committees Composition</h3>
            <p>
              
            </p>
          </div>

          <div className="cardCom">
            <h3>CSR Committees composition</h3>
            <p>
              No such committee as the same is not applicable to the Company
            </p>
          </div>
        </div>
      </section>
      <section className="Officer">
        <h1>KMP Compliance Officer and RTA</h1>
        <div className="mainOfficerDetailSection">
          <ul>
            <h3>
              <IoPerson />
              &nbsp;Key Managerial Personnel of the Company are as under
            </h3>
            <li>
              <span>
                <VscActivateBreakpoints />
              </span>
              Bhawani Shankar Goyal, Managing Director, DIN-03255804, Address:H
              No.77,Nangal Chaudhary Teh. Narnaul,Dist- Mahindergarh,
              Haryana-123023
            </li>
            <li>
              <span>
                <VscActivateBreakpoints />
              </span>{" "}
              Gaurav Kathuria, Chief Financial Officer Address:S-59,Gali No- 2,
              Block S, South Anarkalikrishna Nagar Delhi 110051,Resigned from
              31-August-2022
            </li>
            <li>
              <span>
                <VscActivateBreakpoints />
              </span>
              Pankaj Singh, Company Secretary and Compliance Officer Address:
              A-136, Vivek Vihar, Phase-1, East Delhi, New Delhi-110095
            </li>
          </ul>
          <ul>
            <h3>
              <MdRealEstateAgent />
              &nbsp;Registrar & Share Transfer Agents:
            </h3>
            <li>
              <span>
                <VscActivateBreakpoints />
              </span>
              Alankit Assignments Limited 205-208, Anarkali Complex, Jhandewalan
              Extention, New Delhi – 110055
            </li>
            <li>
              <span>
                <VscActivateBreakpoints />
              </span>
              Email ID: lalitap@alankit.com ,Contact Nos.:011-42541958/1234/
              ,Website:www.alankit.com
            </li>
            <li>
              {" "}
              <span>
                <VscActivateBreakpoints />
              </span>
              Bigshare Services Pvt. Ltd, 1st Floor, Bharat Tin Works Building,
              Opp. Vasant Oasis, Makwana Road,Marol, Andheri
              (East),Mumbai,Maharashtra,400059
            </li>
            <li>
              <span>
                <VscActivateBreakpoints />
              </span>
              Email ID: info@bigshareonline.com ,Contact Nos.:022 - 40430200 /
              62638200, Fax: 022 - 28475207 / 62638299 ,www.bigshareonline.com
            </li>
          </ul>
        </div>
      </section>
      <section className="contact" id="contact">
        <h1>Contact us</h1>
        <div className="mainContactBox">
          <div className="imageBox">
            <img src="./contact.png" alt="contact" />
          </div>
          <div className="descriptionContact">
            <div className="address items">
              <h3>
                <FaAddressBook />
                &nbsp;Company’s Registered Office Address
              </h3>
              <address>
                <p>301, Sarthik Square,</p>
                <p>Near Shapath - 3, S.G. Highway, Bodakdev,</p>
                <p>Ahmedabad - 380054, Gujarat, India.</p>
            </address>

            </div>
            <div className="person items">
              <h3>
                <MdContacts />
                &nbsp;Contact Person Name and Numbers for Grievances redressal
              </h3>
              <p>
                <span>Company Secretary:</span>Pankaj Mahadeo Singh
                +91-9155012094
              </p>
            </div>
            <div className="email items">
              <h3>
                <MdEmail />
                &nbsp;Email
              </h3>
              <p>team@shahfoods.co.in</p>
              <p>shahfoods.ahmedabad@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
