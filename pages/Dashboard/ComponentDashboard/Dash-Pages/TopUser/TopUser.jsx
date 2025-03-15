import React from "react";
import HeaderDash from "../../HeaderDash/HeaderDash";
import FooterDash from "../../FooterDash/FooterDash";
import { Col, Row } from "reactstrap";
import TopUsersTable from "../TopUser/TopUsersTable";

const TopUser = () => {
  return (
    <div style={{ padding: "2px" }}>
      {/* <HeaderDash /> */}
      <Row>
        {" "}
        <h1 className="title">TOP 10 NGƯỜI DÙNG MUA SẮM</h1>
        <TopUsersTable />
      </Row>
      <Row></Row>

      {/* <FooterDash /> */}
    </div>
  );
};

export default TopUser;
