import React, { useState, useEffect } from "react";
import { Table, Card, CardBody, CardTitle, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import getUserInformation from "../../../../Api/getTopUser";
import FakeUserData from "./DataF";

const TopUsersTable = () => {
  const [expandedUser, setExpandedUser] = useState(null); // Chỉ giữ thông tin của người dùng đã chọn
  const [users, setUsers] = useState([]); // State để lưu danh sách người dùng

  // Dùng useEffect để gọi API khi component được render
  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUserInformation(); // Gọi API lấy dữ liệu người dùng
      console.log("Dữ liệu lấy được:", usersData); // In dữ liệu người dùng
      setUsers(usersData); // Cập nhật danh sách người dùng vào state
    };

    fetchUsers(); // Gọi hàm fetchUsers
  }, []); // Chỉ chạy 1 lần khi component được mount

  // Theo dõi sự thay đổi của state users
  useEffect(() => {
    console.log("Dữ liệu người dùng sau khi cập nhật:", users.length); // In ra khi state users thay đổi
  }, [users]); // Chạy mỗi khi state users thay đổi

  const handleUserClick = (user) => {
    setExpandedUser((prevUser) => (prevUser === user ? null : user)); // Chỉ hiển thị sản phẩm của người dùng đã chọn
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Tên</th>
            <th>Doanh Số Mang Lại</th>
            <th className="d-none d-md-table-cell">ID</th>
            <th className="d-none d-md-table-cell">Tổng Số Lần Mua</th>
            <th className="d-none d-md-table-cell">Sản Phẩm Đã Mua</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <React.Fragment key={user._id}>
              <tr
                onClick={() => handleUserClick(user)}
                style={{ cursor: "pointer" }}
              >
                <td>{user.fullName || "Chưa cập nhật"}</td>
                <td>
                  {user.revenue && typeof user.revenue === "number"
                    ? user.revenue.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })
                    : "Chưa cập nhật"}
                </td>
                <td className="d-none d-md-table-cell">
                  {user._id?.substring(0, 5) || "Chưa cập nhật"}
                </td>
                <td className="d-none d-md-table-cell">
                  {user.totalPurchases || "Chưa cập nhật"}
                </td>
                <td className="d-none d-md-table-cell">
                  {user.products && user.products.length > 0
                    ? user.products.map((product) => (
                        <span key={product.name} style={{ marginRight: "5px" }}>
                          {product.name}
                        </span>
                      ))
                    : "Chưa cập nhật"}
                </td>
              </tr>
              {expandedUser && expandedUser._id === user._id && (
                <tr>
                  <td colSpan={5}>
                    <Card className="mt-2">
                      <CardBody>
                        <CardTitle tag="h5">
                          Thông tin sản phẩm đã mua của {user.fullName}
                        </CardTitle>
                        {expandedUser.products &&
                        expandedUser.products.length > 0
                          ? expandedUser.products.map((product) => (
                              <CardText key={product.name}>
                                <strong>Tên sản phẩm:</strong> {product.name}{" "}
                                <br />
                                <strong>Số lượng:</strong> {product.quantity}
                              </CardText>
                            ))
                          : "Chưa cập nhật"}
                      </CardBody>
                    </Card>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TopUsersTable;
