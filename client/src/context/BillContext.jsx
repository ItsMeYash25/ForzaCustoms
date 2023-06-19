import React, { createContext, useContext, useEffect, useState } from "react";

const userBill = {
  name: "",
  email: "",
  contact: "",
  addr: "",
  cart: [],
};

function getInitialState() {
  const userCart = localStorage.getItem("Bill");
  return userCart ? JSON.parse(userCart) : userBill;
}

export const BillContext = createContext();

function BillContextProvider({ children }) {
  const [bill, setBill] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("Bill", JSON.stringify(bill));
  }, [bill]);

  function addPart(part) {
    setBill((prevValue) => ({
      ...prevValue,
      cart: [...prevValue.cart, part],
    }));
  }

  function removePart(event) {
    const part_id = event.target.value;
    setBill((prevValue) => ({
      ...prevValue,
      cart: prevValue.cart.filter((item) => item.id !== part_id),
    }));
  }

  return (
    <BillContext.Provider value={{ addPart, removePart, ...userBill }}>
      {children}
    </BillContext.Provider>
  );
}

export default BillContextProvider;
