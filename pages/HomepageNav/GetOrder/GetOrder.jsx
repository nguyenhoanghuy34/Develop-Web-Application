import React, { useState, useEffect } from "react";
import "./GetOrder.scss"; // Đảm bảo đã import SCSS
import { Container, Row, Col } from "reactstrap";
import { getUserInformation } from "../../Api/getUser"; // Import hàm lấy thông tin người dùng
import OrderCard from "./OrderCard/OrderCard"; // Import OrderCard

const OrderManagement = () => {
  const [users, setUsers] = useState([]); // State lưu trữ danh sách người dùng

  // Hàm gọi API và cập nhật danh sách người dùng
  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUserInformation(); // Gọi API lấy người dùng
      setUsers(usersData); // Cập nhật danh sách người dùng vào state
    };
    fetchUsers(); // Gọi hàm khi component được render
  }, []);

  return (
    <Container className="order-management">
      <Row>
        {users.map((user) => (
          <Col key={user._id} sm="12">
            {" "}
            {/* Mỗi card chiếm 12 cột (full width) */}
            <OrderCard user={user} />{" "}
            {/* Truyền thông tin người dùng vào card */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OrderManagement;
