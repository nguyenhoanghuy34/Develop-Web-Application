import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./HeaderDash.scss";
import Profile from "../HeaderDash/ProfilePicture";

const HeaderDash = () => {
  return (
    <Container
      className="header-container bg-info"
      style={{
        borderRadius: "10px",
        position: "sticky", // Giữ header ở trên cùng khi cuộn
        top: 0, // Vị trí cố định
        zIndex: 1000, // Đảm bảo nằm trên các phần khác
        marginBottom: "20px", // Thêm khoảng cách phía dưới header
      }}
    >
      <Row className="align-items-center justify-content-between">
        <Col xs="12" md="6" className="text-left header-text">
          <p className="logo">NUTRI WEB TOYS</p>
          <p className="dashboard-text">Dashboard</p>
        </Col>
        <Col xs="12" md="6" className="text-end">
          <Profile />
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderDash;
