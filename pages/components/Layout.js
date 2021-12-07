
import Header from "./Header";
import Footer from "./Footer";

const name = "bruhh";
export const siteTitle = "bruhh.io: Wishing in 3D";

export default function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
