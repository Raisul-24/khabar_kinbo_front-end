import Footer from "../components/footer";
import Navbar from "../components/navbar";

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