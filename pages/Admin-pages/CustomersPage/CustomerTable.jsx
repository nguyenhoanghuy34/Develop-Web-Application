import React from "react";
import { Table } from "reactstrap";
import "./CustomerTable.scss"; // Nhập file SCSS

const CustomerTable = ({ customers, onCustomerSelect }) => {
  return (
    <div className="customer-table-wrapper">
      <Table striped className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr
              key={index}
              onClick={() => onCustomerSelect(index)}
              className="customer-row"
            >
              <td>{customer.name}</td>
              <td>{customer.address}</td>
              <td>{customer.phone}</td>
              <td>{customer.revenue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerTable;
