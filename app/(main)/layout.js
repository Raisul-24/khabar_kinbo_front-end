import Footer from "../components/footer";
import Navbar from "../components/navbar";

const MainLayout = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        <div className="mx-auto max-w-screen-2xl">
        {children}
        </div>
        <Footer></Footer>
        </>
      );
}
export default MainLayout;