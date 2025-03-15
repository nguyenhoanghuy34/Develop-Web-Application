import React, { useState } from "react";
import { Button, Col, Row, Container } from "reactstrap";
import SidebarAnimation from "../SidebarAnimation/SidebarAnimation";
import "./CustomersDetail.scss"; // Nhập file SCSS

const CustomersDetail = ({ customer, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [customerData, setCustomerData] = useState({ ...customer });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Logic để lưu thông tin khách hàng ở đây nếu cần
  };

  const handleDelete = () => {
    alert(`Deleted ${customer.name}`);
    // Logic xóa khách hàng
    onClose(); // Đóng chi tiết khách hàng
  };

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  return (
    <Container className="customer-detail">
      <Row>
        <Col xs="12" md="9">
          <h2 className="detail-title">Customer Detail</h2>
          <div className="customer-info">
            {isEditing ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={customerData.name}
                  onChange={handleChange}
                  className="form-control"
                />
                <input
                  type="text"
                  name="email"
                  value={customerData.email}
                  onChange={handleChange}
                  className="form-control"
                />
                <input
                  type="text"
                  name="phone"
                  value={customerData.phone}
                  onChange={handleChange}
                  className="form-control"
                />
                <Button
                  color="success"
                  onClick={handleSave}
                  className="action-button"
                >
                  Save
                </Button>
              </div>
            ) : (
              <div>
                <p>Name: {customer.name}</p>
                <p>Email: {customer.email}</p>
                <p>Phone: {customer.phone}</p>
                <Button
                  color="primary"
                  onClick={handleEdit}
                  className="action-button"
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  onClick={handleDelete}
                  className="action-button"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomersDetail;
