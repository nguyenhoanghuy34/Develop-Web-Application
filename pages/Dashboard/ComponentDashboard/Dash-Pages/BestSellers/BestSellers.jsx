import React from "react";
import { Col, Row, Container } from "reactstrap";
import HeaderDash from "../../HeaderDash/HeaderDash";
import FooterDash from "../../FooterDash/FooterDash";
import "../BestSellers/styleBestSellers.scss";
import TableBestSellers from "./tableBestSellers";

const BestSellers = () => {
  return (
    <div style={{ padding: "2px" }}>
      {/* <HeaderDash /> */}
      <Container>
        <Row>
          <TableBestSellers />
        </Row>
      </Container>
      {/* <FooterDash /> */}
    </div>
  );
};
export default BestSellers;
