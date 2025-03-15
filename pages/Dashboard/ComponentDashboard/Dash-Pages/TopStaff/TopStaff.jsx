import React from "react";
import { Col, Row } from "reactstrap";
import TopStaffTable from "../TopStaff/TopStaffTable.jsx";
import "./TopStaff.scss";

const TopStaff = () => {
  return (
    <div style={{ padding: "2px" }}>
      <Row>
        <div className="scrollable-table-container">
          <TopStaffTable />
        </div>
      </Row>
    </div>
  );
};

export default TopStaff;
