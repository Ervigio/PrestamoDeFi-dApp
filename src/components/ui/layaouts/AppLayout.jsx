import { Footer, Header, Navbar } from "../../../components";
import { PropTypes } from "prop-types";

export default function AppLayout({ children }) {
  return (
    <>
    
      <Header />
      <main className="min-h-[82vh] sm:min-h-[85vh] bg-teal-50" >{children}</main>
      <div className="bg-gradient-to-r from-sky-600 to-cyan-200 py-2 px-3 content-end border-b shadow-md sm:hidden"><Navbar/></div>
      <Footer />
      
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
