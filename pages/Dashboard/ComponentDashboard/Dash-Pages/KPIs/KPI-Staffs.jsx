import React from "react";
import { Table, Progress } from "reactstrap";
import "../KPIs/styleKPI.scss";

const employeesData = [
  { id: 1, name: "Nguyễn Hoàng Huy", sales: 4000000, target: 20000000 },
  { id: 2, name: "Nguyễn Văn Tú", sales: 2000000, target: 20000000 },
  { id: 3, name: "Mai Xuân Nhân", sales: 35000000, target: 80000000 },
  { id: 4, name: "Trần Hải Dương", sales: 25000000, target: 60000000 },
  { id: 7, name: "Nhân viên G", sales: 4500000, target: 10000000 },
];

const TopBadEmployees = () => {
  const under50Employees = employeesData
    .map((employee) => ({
      ...employee,
      progress: (employee.sales / employee.target) * 100,
    }))
    .filter((employee) => employee.progress < 50)
    .sort((a, b) => a.progress - b.progress)
    .slice(0, 5); // Lấy top 5

  return (
    <div className="table-container">
      <Table bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Nhân Viên</th>
            <th>Doanh Số</th>
            <th>Mục Tiêu</th>
            <th>Tiến Độ</th>
          </tr>
        </thead>
        <tbody>
          {under50Employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.sales.toLocaleString("vi-VN")} VNĐ</td>
              <td>{employee.target.toLocaleString("vi-VN")} VNĐ</td>
              <td>
                <Progress
                  value={employee.progress}
                  color={employee.progress < 50 ? "danger" : "warning"}
                >
                  {`${Math.round(employee.progress)}%`}
                </Progress>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TopBadEmployees;
