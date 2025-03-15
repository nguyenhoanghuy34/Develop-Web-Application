import React from "react";
import { Container, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const FooterDash = () => {
  return (
    <Container
      className="bg-info"
      style={{ borderRadius: "10px", padding: "10px" }}
    >
      <Nav className="justify-content-start" style={{ display: "flex" }}>
        <NavItem className="nav-item" style={{ marginRight: "20px" }}>
          <Link to="/" className="nav-link" style={{ color: "#fff" }}>
            <i
              className="fa-regular fa-copyright"
              style={{ fontSize: "24px", marginRight: "5px" }}
            ></i>{" "}
            <span style={{ fontSize: "14px" }}>Copyright: </span>
            NUTRI WEB TOYS
          </Link>
        </NavItem>
        <NavItem className="nav-item" style={{ marginRight: "20px" }}>
          <Link to="/" className="nav-link" style={{ color: "#fff" }}>
            <i
              className="fas fa-lock"
              style={{ fontSize: "24px", marginRight: "5px" }}
            ></i>{" "}
            DỮ LIỆU BẢO MẬT
          </Link>
        </NavItem>
      </Nav>
    </Container>
  );
};

export default FooterDash;
