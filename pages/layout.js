// components/Layout.js
import Footer from "@/components/footer";
import Navbar from "@/components/nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
        </main>
      <Footer/>
    </div>
  );
};

export default Layout;
