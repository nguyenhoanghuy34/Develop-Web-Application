import React, { useState } from "react";
import { Navbar, NavItem, Nav, Container, Collapse, Button } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import "./SideBarDash.scss";
import logo_web from "../../../Dashboard/img/ToyLogo.avif";

const SideBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    if (isOpen) {
      toggle();
    }
  };

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white navbar-custom "
      expand="md"
    >
      <Container fluid className="">
        {/* Ảnh Logo */}
        <Container>
          <img
            src={logo_web}
            alt="Logo"
            className="img-fluid"
            style={{ width: "100px", height: "auto" }}
          />
        </Container>
        <Button color="link" className="d-md-none" onClick={toggle}>
          <i className="fas fa-bars"></i>
        </Button>
        <hr className="my-3 text-danger" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mb-md-1 flex-column" navbar>
            <NavItem
              className={`active-pro ${
                location.pathname === "/dashboard/overview" ? "active" : ""
              }`}
              style={{ marginBottom: "10px" }}
            >
              <Link
                to="/dashboard/overview"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick}
              >
                <i
                  className="fas fa-tachometer-alt"
                  style={{ marginRight: "8px" }}
                ></i>
                TỔNG QUAN
              </Link>
            </NavItem>
            <NavItem
              className={`active-pro ${
                location.pathname === "/dashboard/bestseller" ? "active" : ""
              }`}
              style={{ marginBottom: "10px" }}
            >
              <Link
                to="/dashboard/bestseller"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick}
              >
                <i className="fas fa-star" style={{ marginRight: "8px" }}></i>
                SẢN PHẨM BÁN CHẠY
              </Link>
            </NavItem>

            <NavItem
              className={`active-pro ${
                location.pathname === "/dashboard/KPIs" ? "active" : ""
              }`}
              style={{ marginBottom: "10px" }}
            >
              <Link
                to="/dashboard/KPIs"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick}
              >
                <i className="fas fa-clock" style={{ marginRight: "8px" }}></i>
                KPI
              </Link>
            </NavItem>

            <NavItem
              className={`active-pro ${
                location.pathname === "/dashboard/top-staff" ? "active" : ""
              }`}
              style={{ marginBottom: "10px" }}
            >
              <Link
                to="/dashboard/top-staff"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick}
              >
                <i className="fas fa-truck" style={{ marginRight: "8px" }}></i>
                XẾP HẠNG NHÂN VIÊN
              </Link>
            </NavItem>

            <NavItem
              className={`active-pro ${
                location.pathname === "/dashboard/top-user" ? "active" : ""
              }`}
              style={{ marginBottom: "10px" }}
            >
              <Link
                to="/dashboard/top-user"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick}
              >
                <i className="fas fa-medal" style={{ marginRight: "8px" }}></i>
                TOP NGƯỜI DÙNG
              </Link>
            </NavItem>
          </Nav>
        </Collapse>

        <hr className="my-3 text-danger" />
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro">
            <Link
              to="/dashboard/overview"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="fas fa-home" style={{ marginRight: "8px" }}></i>
              TRANG CHỦ
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SideBar;
