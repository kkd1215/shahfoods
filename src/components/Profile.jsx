import React from "react";
export default function Profile() {
  let profiles = [
    {
      name: "Mr. Parminder Sharma",
      description:
        "Mr. Parminder Sharma, aged 43 years, is a qualified person with about 19 years of experience in the corporate field. He has been a director of the company since November 14, 2003.",
    },
    {
      name: "Bhawani Shankar Goyal",
      description:
        "Mr. Bhawani Shankar Goyal was appointed as Managing Director on February 14, 2020. He is a graduate in Commerce from Maharshi Dayanand University and has vast experience of more than 16 years in the area of Accounts and Business Administration.",
    },
    {
      name: "Mamta Pachauri",
      description:
        "Ms. Mamta Pachauri, aged 45 years, is 12th pass. She is appointed as a Non-executive Independent woman director for another term of five consecutive years commencing from June 29, 2020, to June 28, 2025.",
    },
    {
      name: "Janak Raj Sharma",
      description:
        "Mr. Janak Raj Sharma, aged 64 years, has rich experience in the field of Corporate Management and Advisory. He is a Non-executive Independent Director of the company and reappointed for a second term of five consecutive years commencing from February 13, 2021, to February 12, 2026.",
    },

    {
      name: "Mr. MANAN R. PATEL",
      description:
        "Mr. MANAN R PATEL, aged 35 years,  He has completed Bachelor of Commerce from IEC University in 2018 , Advanced Diploma in Financial Markets from National Institute of Financial Markets and a CFA L-3 candidate . He is having total experience of more than 14 years in field of Food product trading and Ware house, commercial construction related business Operations.",
    },

    {
      name: "Mrs. Hemakshi Manan Patel",
      description:
        "Mrs. Hemakshi Manan Patel,  aged 32 years, She  has completed Master of Pharmacy from Gujarat University in 2015. She is having total experience of 12 years in field of Pharmacy related production and retail businesses.",
    },
  ];
  return (
    <section className="Profile" id="directors">
      <h1>Profile Of Board Of Directors</h1>
      <div className="profileMainSection">
        {profiles.map((e, index) => {
          return (
            <div key={index} className="card">
              <h3>{e.name}</h3>
              <p>{e.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
