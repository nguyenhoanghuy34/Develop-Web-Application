import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import SidebarAnimation from "../SidebarAnimation/SidebarAnimation";
import CustomerTable from "./CustomerTable";
import CustomersDetail from "../CustomersPage/CustomerDetail";
import "./CustomersPage.scss";
import AdminFooter from "../FooterAdmin/FooterAdmin";

const CustomersPage = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const customers = [
    {
      name: "John Doe",
      address: "123 Main St, City, Country",
      phone: "123-456-7890",
      revenue: 5000,
    },
    {
      name: "Jane Smith",
      address: "456 Elm St, City, Country",
      phone: "987-654-3210",
      revenue: 7000,
    },
    {
      name: "Mark Johnson",
      address: "789 Pine St, City, Country",
      phone: "555-123-4567",
      revenue: 4000,
    },
    {
      name: "Emily Davis",
      address: "101 Maple St, City, Country",
      phone: "333-555-7890",
      revenue: 6000,
    },
  ];

  const handleCustomerSelect = (id) => {
    setSelectedCustomerId(id);
  };

  return (
    <Container className="customers-page">
      <Row>
        <Col xs="12" md="3" className="sidebar-col">
          <SidebarAnimation className="sidebar-animation" />
        </Col>
        <Col xs="12" md="9" className="col-content">
          <div className="bg-light">
            <Container
              className="bg-white  pb-3 pt-3"
              style={{ borderRadius: "10px" }}
            >
              <h2 className="title">DANH SÁCH KHÁCH HÀNG</h2>
              <CustomerTable
                customers={customers}
                onCustomerSelect={handleCustomerSelect}
              />
              {selectedCustomerId !== null && (
                <CustomersDetail
                  customer={customers[selectedCustomerId]}
                  onClose={() => setSelectedCustomerId(null)}
                />
              )}
            </Container>
          </div>
        </Col>
      </Row>
      <Row>
        <AdminFooter />
      </Row>
    </Container>
  );
};

export default CustomersPage;
