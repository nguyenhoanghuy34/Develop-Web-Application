import React from "react";
import { Row, Col, Progress, Table } from "reactstrap";

const KPIData = [
  { id: 1, name: "Sản phẩm A", quantitySold: 100, target: 100 },
  { id: 2, name: "Sản phẩm B", quantitySold: 50, target: 80 },
  { id: 3, name: "Sản phẩm C", quantitySold: 120, target: 150 },
];

const KPIProduct = () => {
  return (
    <Row>
      <Col style={{ width: "100%" }}>
        {" "}
        <Table bordered hover style={{ width: "100%" }}>
          {" "}
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Sản Phẩm</th>
              <th>Số Lượng Bán Ra</th>
              <th>Mục Tiêu Bán Ra</th>
              <th>Tiến Độ</th>
            </tr>
          </thead>
          <tbody>
            {KPIData.map((product, index) => {
              const progress = (product.quantitySold / product.target) * 100;
              return (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.quantitySold}</td>
                  <td>{product.target}</td>
                  <td>
                    <Progress
                      value={progress}
                      color={progress >= 100 ? "success" : "warning"}
                    >
                      {`${Math.round(progress)}%`}
                    </Progress>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default KPIProduct;
