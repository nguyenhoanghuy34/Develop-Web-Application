import React from "react";
import { Col, Row, Container, Table } from "reactstrap";
import SidebarAnimation from "../SidebarAnimation/SidebarAnimation";
import AdminFooter from "../FooterAdmin/FooterAdmin";
import "./Employees.scss";

const employees = [
  {
    name: "Nguyễn Văn A",
    address: "123 Đường Lê Lợi, Quận 1",
    phone: "0123 456 789",
    position: "Quản lý",
    product: "Điện thoại",
  },
  {
    name: "Trần Thị B",
    address: "456 Đường Trần Hưng Đạo, Quận 5",
    phone: "0987 654 321",
    position: "Nhân viên",
    product: "Laptop",
  },
  {
    name: "Lê Văn C",
    address: "789 Đường Phạm Ngũ Lão, Quận 3",
    phone: "0933 567 890",
    position: "Kỹ thuật viên",
    product: "Máy tính bảng",
  },
  {
    name: "Phạm Thị D",
    address: "101 Đường Nguyễn Trãi, Quận 7",
    phone: "0901 234 567",
    position: "Nhân viên",
    product: "Phụ kiện",
  },
  {
    name: "Hoàng Văn E",
    address: "202 Đường Nguyễn Huệ, Quận 1",
    phone: "0966 888 999",
    position: "Quản lý",
    product: "TV",
  },
  {
    name: "Nguyễn Thị F",
    address: "303 Đường Điện Biên Phủ, Quận Bình Thạnh",
    phone: "0944 555 666",
    position: "Nhân viên",
    product: "Máy lạnh",
  },
  {
    name: "Trần Văn G",
    address: "404 Đường Cách Mạng Tháng Tám, Quận 10",
    phone: "0932 111 222",
    position: "Nhân viên",
    product: "Máy giặt",
  },
  {
    name: "Lê Thị H",
    address: "505 Đường Lạc Long Quân, Quận Tân Bình",
    phone: "0912 333 444",
    position: "Kỹ thuật viên",
    product: "Điều hòa",
  },
  {
    name: "Phạm Văn I",
    address: "606 Đường Võ Văn Kiệt, Quận 6",
    phone: "0922 777 888",
    position: "Quản lý",
    product: "Lò vi sóng",
  },
  {
    name: "Hoàng Thị J",
    address: "707 Đường Hòa Hảo, Quận 11",
    phone: "0955 999 000",
    position: "Nhân viên",
    product: "Tủ lạnh",
  },
];

const EmployeeTable = () => {
  return (
    <Container>
      <Row>
        <Col xs="12" md="3" className="sidebar-animation bg-light pt-3 pb-3">
          <SidebarAnimation />
        </Col>
        <Col xs="12" md="9" className="col-content bg-light">
          <Container
            className="bg-white (pl-0 !important)"
            style={{ borderRadius: "10px" }}
          >
            <Row className="pt-3">
              <h1 className="title">Danh sách Nhân Viên</h1>
            </Row>
            <Row>
              <Col xs="12">
                <div className="table-responsive">
                  {/* Áp dụng class table-responsive */}
                  {employees.length > 0 ? (
                    <Table striped className="table">
                      <thead>
                        <tr>
                          <th>Tên</th>
                          <th>Địa chỉ</th>
                          <th>Số điện thoại</th>
                          <th>Chức Vụ</th>
                          <th>Sản phẩm phụ trách</th>
                        </tr>
                      </thead>
                      <tbody>
                        {employees.map((employee, index) => (
                          <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.address}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.position}</td>
                            <td>{employee.product}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    <p>Không có dữ liệu để hiển thị.</p>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <AdminFooter />
      </Row>
    </Container>
  );
};

export default EmployeeTable;
