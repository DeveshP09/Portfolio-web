import Home from "../Pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./layout.css";
import { useState } from "react";
import Menus from "./Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //to change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          {/*As we pass the two class for the true condition, so all the properties of clas one we be applied frist and then reamining from class two*/}
          <div className="sidebar-toggle-icons">
            <Menus toggle={toggle}/>
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
        </div>
        <div className="container">
          <Home></Home>
        </div>
      </div>
    </>
  );
};

export default Layout;
