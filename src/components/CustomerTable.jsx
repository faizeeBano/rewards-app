import PropTypes from "prop-types";
import { useState } from "react";
import CustomerRow from "./CustomerRow";
import Modal from "./Modal";

function CustomerTable({ customers = [] }) {
  return (
    <>
      <table className="tx-table">
        <thead>
          <tr style={{background: "lightsteelblue"}}>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Total Points</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <CustomerRow
              customer={customer}
              key={customer?.customerId}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CustomerTable;
