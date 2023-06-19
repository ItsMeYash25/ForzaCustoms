import React, { useState } from "react";
import BackToHome from "../components/BackToHome";
import Swal from 'sweetalert2';
import axios from "axios";

const AddPart = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState();

  async function parts(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("name", name);
    data.set("price", price);
    data.set("file", files[0]);
    const response = await axios.post("/parts/add", data);
    if (response.status === 201) {
      setName("");
      setPrice("");
      setFiles("");
      Swal.fire({
        icon: 'success',
        title: '!! NEW ITEM ADDED !!',
        button: "OK"
      });
    }
  }

  return (
    <main>
      <div className="parts-page-style navbar">
        <BackToHome />
      </div>
      <form className="container card shadow-sm w-75" onSubmit={parts}>
        <h3 className="card-title text-center mt-4 hide-overflow add-part">Add Parts Detail</h3>
        <hr />
        <div className="mb-3 input-font">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 input-font">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3 input-font">
          <label htmlFor="" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFiles(e.target.files)}
          />
        </div>
        <button className="btn btn-outline-danger mb-3 input-font">Add Part</button>
      </form>
    </main>
  );
};

export default AddPart;
