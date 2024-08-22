import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import "./shorty.css";

function Shorty() {
  return (
    <>
      <div className="max-width">
        <Navigation />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Shorty;
