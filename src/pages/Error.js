import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <div
        className="bg-dark p-5 my-5"
        style={{ display: "grid", justifyContent: "center" }}
      >
        <h2>
          OOPs!!
          <br />
          Its a Dead End
        </h2>
        <Link to="/">
          <button className="btn butt btn-primary ">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
