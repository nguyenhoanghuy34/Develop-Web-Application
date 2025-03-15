import { Outlet } from "react-router-dom";
import Footer from "../../components/layouts/footer";
import Header from "../../components/layouts/header";
import Signin from "../../components/Login-logout/Signin";

const SigninPage = () => {
  return (
    <div>
      <main>
        <Header />
        <Outlet />
      </main>
      <Signin />
      <Footer />
    </div>
  );
};

export default SigninPage;
