import { Outlet } from "react-router-dom";
import Footer from "../../components/layouts/footer";
import Header from "../../components/layouts/header";

import Signup from "../../components/Login-logout/Signup";
const SignupPage = () => {
  return <div>
    <main>
      <Header/>
      <Outlet/>
    </main>
    <Signup/>
    <Footer/>
  </div>;
};

export default SignupPage;
