import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../HeaderDash/HeaderDash.scss";
import profileImage from "../../img/Shin.jfif";

const Profile = () => {
  return (
    <Container>
      <Row className="justify-content-end">
        {" "}
        {/* Căn hàng về bên phải */}
        <Col xs="12" md="6" className="text-end">
          {" "}
          {/* Căn text về bên phải */}
          <div className="profile-content">
            {" "}
            {/* Div để căn giữa nội dung */}
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image rounded-circle"
            />
            <h3 className="profile-name">Nguyễn Hoàng Huy</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
