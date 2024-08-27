"use client"
import Footer from "../../footer";
import Navbar from "../../navbar";

const MainLayout = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        <div className="mx-auto">
        {children}
        </div>
        <Footer></Footer>
        </>
      );
}
export default MainLayout;