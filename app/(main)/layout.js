import Footer from "../components/footer";
import Navbar from "../components/navbar";

const MainLayout = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </>
      );
}
export default MainLayout;