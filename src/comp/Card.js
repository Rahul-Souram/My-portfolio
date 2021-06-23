import React from "react";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
const Card = (item) => {
  const { id, img, title, glink, plink, desc } = item;
  return (
    <>
      <div className="col-md-4 col-12 mx-auto ">
        <div className="card bg-dark m-3" key={id} id="cardef">
          <img src={img} className="card-img-top img-thumbnail" alt={img} />
          <div className="card-body text-primary">
            <h5 className="card-title font-weight-bold text-success">
              {title}
            </h5>
            <p className="card-text">{desc}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a href={plink} target="blank">
                <button className="btn btn-lg btn-success butt">
                  Check now
                </button>
              </a>
            </div>
            <div className="links mt-3">
              <a href={glink}>
                <SiGithub id="a" className="link" />
              </a>
              <a href={plink} target="blank">
                <BiLinkExternal id="a" className="link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
