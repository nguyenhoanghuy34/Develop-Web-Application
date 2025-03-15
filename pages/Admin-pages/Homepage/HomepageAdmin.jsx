import { Col, Row, Container } from "reactstrap";
import SidebarHomepage from "../../HomepageNav/SidebarHomepage/SidebarHomepage";
import HomepageNav from "../../HomepageNav/HomepageNav";
import AdminFooter from "../FooterAdmin/FooterAdmin";

function HomepageAdmin() {
  return (
    <Container>
      <Row>
        <HomepageNav />
      </Row>
      <Row>
        <AdminFooter />
      </Row>
    </Container>
  );
}

export default HomepageAdmin;
