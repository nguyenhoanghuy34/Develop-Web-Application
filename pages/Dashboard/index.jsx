import React from "react";
import { Container, Row, Col } from "reactstrap";
import SideBar from "./ComponentDashboard/SideBarDash/SideBarDash.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import OverViewDash from "./ComponentDashboard/Dash-Pages/OverViewDash/OverViewDash.jsx";
import BestSellers from "./ComponentDashboard/Dash-Pages/BestSellers/BestSellers.jsx";
import KPIs from "./ComponentDashboard/Dash-Pages/KPIs/KPIs.jsx";
import TopStaff from "./ComponentDashboard/Dash-Pages/TopStaff/TopStaff.jsx";
import TopUser from "./ComponentDashboard/Dash-Pages/TopUser/TopUser.jsx";
import AdminFooter from "../Admin-pages/FooterAdmin/FooterAdmin.jsx";
import "./DashBoard.scss";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col xs="12" md="3" className="sidebar-container bg-white">
          <Container className=" bg-light pt-3 pb-3">
            <SideBar />
          </Container>
        </Col>
        {/* Nội dung chính */}
        <Col xs="12" md="9" className="content-container bg-white">
          <Container className=" bg-light">
            <Routes>
              <Route path="overview" element={<OverViewDash />} />
              <Route path="bestseller" element={<BestSellers />} />
              <Route path="KPIs" element={<KPIs />} />
              <Route path="top-staff" element={<TopStaff />} />
              <Route path="top-user" element={<TopUser />} />
              {/* Điều hướng mặc định */}
              <Route path="*" element={<Navigate to="overview" />} />
            </Routes>
          </Container>
        </Col>
      </Row>
      <Row>
        <AdminFooter />
      </Row>
    </Container>
  );
};

export default Dashboard;
