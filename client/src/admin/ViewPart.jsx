import React from "react";
import BackToHome from "../components/BackToHome";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';

const ViewPart = () => {
  const [parts, setParts] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  useEffect(() => {
    async function getAllParts() {
      const response = await axios.get("/parts/");
      setParts(response.data.parts);
    }
    getAllParts();
  }, [parts]);

  async function deletePart(e, id) {
    const response = await axios.delete("/parts/delete/" + id);
    if (response.status === 202) {
      Swal.fire({
        icon: 'success',
        title: '!! ITEM DELETED !!',
        button: "OK"
      });
    }
  }
  async function setPartInfo(part) {
    setId(part._id);
    setName(part.name);
    setPrice(part.price);
  }
  async function updatePart() {
    const response = await axios.put("/parts/update/" + id, { name, price });
    if (response.status === 200) {
      Swal.fire({
        icon: 'success',
        title: '!! ITEM UPDATED !!',
        button: "OK"
      });
    }
  }

  return (
    <main>
      <div className="parts-page-style navbar">
        <BackToHome />
      </div>
      <div className="m-4 table-responsive">
        <table className="table table-bordered">
          <thead className="part-table-head">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody className="part-table-font">
            {parts?.map((part) => (
              <tr key={part._id}>
                <td className="w-25">
                  <img
                    src={"http://localhost:4000/" + part.imageURL}
                    alt=""
                    style={{ width: "10%", height: "10%" }}
                  />
                </td>
                <td>{part.name}</td>
                <td>{part.price}</td>
                <td className="d-flex gap-2">
                  <div>
                    <Link
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => setPartInfo(part)}
                    >
                      <FaEdit className="text-secondary" />
                    </Link>
                  </div>
                  <div>
                    <Link onClick={(e) => deletePart(e, part._id)}>
                      <FaTrash className="text-danger" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Change The Part Information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="Number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={updatePart} className="btn btn-success">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewPart;
