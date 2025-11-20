import { useState } from "react";
import CustomerRow from "./CustomerRow";
import Modal from "./Modal";

function CustomerTable({ customers = [] }) {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

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
              onView={(c) => setSelectedCustomer(c)}
            />
          ))}
        </tbody>
      </table>

      {selectedCustomer && (
        <Modal
          customer={selectedCustomer}
          close={() => setSelectedCustomer(null)}
        />
      )}
    </>
  );
}

export default CustomerTable;
