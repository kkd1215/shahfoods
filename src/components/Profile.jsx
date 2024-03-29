import React from "react";
export default function Profile() {
  let profiles = [
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
