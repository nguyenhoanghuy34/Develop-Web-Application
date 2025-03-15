import React, { useState, useEffect } from "react";
import { Col, Row, Table } from "reactstrap";
import getUserAdminOwner from "../../../../Api/getUserAdminOwner";
import "./TopStaff.scss";

const TopStaffTable = () => {
  const [topEmployees, setTopEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getUserAdminOwner();
        console.log("Response:", response);

        if (Array.isArray(response)) {
          setTopEmployees(response); // Gán toàn bộ mảng sản phẩm vào topEmployees
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin người dùng:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="top-staff">
      <Row>
        <h1 className="title">TOP 5 NHÂN VIÊN CÓ DOANH SỐ CAO NHẤT</h1>
        <div className="scrollable-table-container">
          <Table striped>
            <thead>
              <tr>
                <th>Tên Nhân Viên</th>
                <th>Doanh Số</th>
              </tr>
            </thead>
            <tbody>
              {topEmployees.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee.fullName}</td>
                  <td>{employee.sales || "Chưa cập nhật"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </div>
  );
};

export default TopStaffTable;
