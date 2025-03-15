import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import { Outlet } from "react-router-dom";
import Slider from "../../components/layouts/Slider/slider";

const Home = () => {
  return <div>
    <main className="w-[1200] max-w-full m-auto  ">
       <Header/>
       <Outlet/>
       <Slider/>
    </main>
   
    <main>
      <Footer/>
    </main>
    
  </div>;
};

export default Home;
