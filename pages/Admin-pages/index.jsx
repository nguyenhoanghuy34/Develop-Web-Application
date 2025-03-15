import { Col, Row, Container } from "reactstrap";
import AdminHeader from "../Admin-pages/HeaderAdmin/HeaderAdmin";
import { Routes, Route, Navigate } from "react-router-dom";
import HomepageAdmin from "../Admin-pages/Homepage/HomepageAdmin";
import Dashboard from "../Dashboard/index";
import EmployeeTable from "../Admin-pages/EmployeesPage/Employees";
import CustomersPage from "../Admin-pages/CustomersPage/CustomersPage";

function AdminLayout() {
  return (
    <Container fluid style={{ height: "100vh" }} className="bg-light">
      <Row>
        <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
          <AdminHeader />
        </div>
      </Row>
      <Row
        style={{
          marginTop: "80px",
          height: "calc(100vh - 80px)",
          overflowY: "auto",
        }}
      >
        <Routes>
          <Route path="/home/*" element={<HomepageAdmin />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeTable />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Row>
    </Container>
  );
}

export default AdminLayout;
