import Header from "./Header";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <NavBar />
      <main style={{ marginLeft: 210 }}>{children}</main>
      <SideBar />
    </div>
  );
}

export default Layout;
