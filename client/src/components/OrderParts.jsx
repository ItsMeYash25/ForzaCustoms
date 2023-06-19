import { useState, useEffect } from "react";
import axios from "axios";
import PartContainer from "./Parts/PartContainer";
// import Parts from "./Parts/Parts";
import BackToHome from "./BackToHome";
import FwdToBilling from "./FwdToBilling";

function OrderParts() {

  // const response = axios.get("/parts/");
  // console.log(response);

  const [parts, setParts] = useState();
  useEffect(() => {
    async function getAllParts() {
      const response = await axios.get("/parts/");
      setParts(response.data.parts);
    }
    getAllParts();
  }, []);

  
  function createPartContainer(part) {
    
    return (
      <PartContainer
        key={part._id}
        id={part._id}
        img={"http://localhost:4000/" + part.imageURL}
        part={part.name}
        price={part.price}
      />
    );
  }

  return (
    <div className="parts-page-style">
      <div className="navbar">
        <BackToHome />
        <FwdToBilling />
      </div>
      <main>
        <section className="parts-head-style py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Pick parts of your choice!!</h1>
              <p className="lead text-body-secondary">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {parts?.map(createPartContainer)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OrderParts;
