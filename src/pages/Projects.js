import React from "react";
import { data } from "../data";
import Card from "../comp/Card";

const Projects = () => {
  return (
    <>
      <h2 className="text-center text-dark bg-light page-title display-3 text-decoration-underline">
        MY PROJECTS{" "}
      </h2>
      <div className="container-fluid mb-5 bg-dark pt-5" id="bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-2 pb-5">
              {data.map((items) => {
                const { id, title, img, desc, glink, plink } = items;
                return <Card key={id} {...items} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
