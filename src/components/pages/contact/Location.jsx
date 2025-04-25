import React from "react";

const Location = () => {
  return (
    <div style={{fontFamily:'Segoe UI'}} className="py-10 pb-20 " >
      <h2 className="md:text-[2.5rem] text-2xl font-semibold text-[#5CD301] pb-8 text-center">
        WHERE WE ARE LOCATED?
      </h2>
      {/*Google Maps embed API*/}
      <div className="py-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5932.653072078281!2d-87.73608292524585!3d41.971793220590214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcdd48a4b7813%3A0xeffd6b86ea132479!2s5028%20N%20Tripp%20Ave%205028%20n%2C%20Chicago%2C%20IL%2060630%2C%20USA!5e0!3m2!1sen!2sin!4v1745305116513!5m2!1sen!2sin"
          height="350"
          width={"100%"}
          style={{ border: "0", loading: "lazy" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
