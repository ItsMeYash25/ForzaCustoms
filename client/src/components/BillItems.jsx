import React from "react";

function BillItems(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>${props.price}</td>
      <td>{props.qty}</td>
      <td>${props.total}</td>
    </tr>
  );
}

export default BillItems;
