import React from "react";
import Image from "../assets/images/image-qr-code.png";
const QRcomponent = () => {
  return (
    <div className="container">
      <div className="card">
        <div>
          <img src={Image} alt="qr-code-image" />
        </div>
        <div className="card-info">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};
export default QRcomponent;
