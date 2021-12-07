import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";

const name = "bruhh";
export const siteTitle = "bruhh.io: Wishing in 3D";

export default function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      {/* <Menu></Menu> */}
      {children}
      <Footer></Footer>
      {/* <Navbar></Navbar>
      // {children}
      // <Footer></Footer> */}
    </div>
  );
}
