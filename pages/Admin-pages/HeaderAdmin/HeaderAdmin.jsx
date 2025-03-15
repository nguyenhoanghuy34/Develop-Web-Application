import React, { useState } from "react"; // Import React và useState hook từ thư viện React
import { Link, useLocation } from "react-router-dom"; // Import Link và useLocation từ React Router
import {
  Navbar,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  Collapse,
} from "reactstrap"; // Import các thành phần của Reactstrap để xây dựng Navbar
import admin_pic from "../../Dashboard/img/Shin.jfif"; // Import hình ảnh admin
import logo from "../img/image.png"; // Import logo
import "./HeaderAdmin.scss"; // Import stylesheet SCSS cho Header

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Trạng thái mở/đóng của dropdown
  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng của Navbar
  const location = useLocation(); // Lấy thông tin về URL hiện tại

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Hàm để chuyển trạng thái của dropdown
  const toggleNavbar = () => setIsOpen(!isOpen); // Hàm để chuyển trạng thái của Navbar

  const handleLinkClick = () => {
    if (isOpen) {
      toggleNavbar(); // Đóng Navbar khi nhấn vào link nếu Navbar đang mở
    }
  };

  const isActive = (path) =>
    location.pathname === path ? "text-dark" : "text-black"; // Kiểm tra nếu đường dẫn hiện tại trùng với path, áp dụng class 'text-dark'

  return (
    <Navbar
      expand="md"
      className="border-bottom shadow-sm px-3 rounded bg-white"
    >
      <div className="d-flex align-items-center">
        <img
          src={logo} // Hiển thị logo
          alt="Logo"
          className="logo"
          style={{ height: "50px", marginRight: "10px" }} // Thiết lập kích thước logo
        />
        <NavbarToggler onClick={toggleNavbar} className="navbar-toggler">
          <span className="fas fa-bars"></span>{" "}
          {/* Biểu tượng hamburger cho Navbar */}
        </NavbarToggler>
      </div>

      <Collapse isOpen={isOpen} navbar>
        {" "}
        {/* Collapse Navbar khi di chuyển xuống trên màn hình nhỏ */}
        <Nav className="me-auto" navbar>
          {/* Các NavItem là các đường link trong navbar */}
          <NavItem>
            <Link
              to="/home" // Đường dẫn đến trang home
              className={`nav-link nav-text ${isActive("/home")}`} // Áp dụng class tùy theo active path
              onClick={handleLinkClick} // Đóng Navbar khi nhấn vào link
            >
              TRANG CHỦ
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/dashboard" // Đường dẫn đến trang dashboard
              className={`nav-link nav-text ${isActive("/dashboard")}`} // Áp dụng class tùy theo active path
              onClick={handleLinkClick}
            >
              DASHBOARD
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/employees" // Đường dẫn đến trang nhân viên
              className={`nav-link nav-text ${isActive("/employees")}`} // Áp dụng class tùy theo active path
              onClick={handleLinkClick}
            >
              NHÂN VIÊN
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/customers" // Đường dẫn đến trang khách hàng
              className={`nav-link nav-text ${isActive("/customers")}`} // Áp dụng class tùy theo active path
              onClick={handleLinkClick}
            >
              KHÁCH HÀNG
            </Link>
          </NavItem>
        </Nav>
      </Collapse>

      <Nav navbar className="ms-3">
        <NavItem className="d-flex align-items-center">
          <span className="me-2 employee-name">NGUYỄN HOÀNG HUY</span>{" "}
          {/* Tên người dùng */}
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              tag="span"
              onClick={toggleDropdown}
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}
              className="nav-link"
            >
              <img
                src={admin_pic} // Hiển thị ảnh avatar của admin
                alt="Admin Avatar"
                className="rounded-circle"
                width="40" // Kích thước ảnh avatar
                height="40"
                style={{ cursor: "pointer" }} // Con trỏ chuột chuyển thành pointer khi hover
              />
            </DropdownToggle>
          </Dropdown>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AdminHeader; // Export component AdminHeader để sử dụng ở nơi khác
