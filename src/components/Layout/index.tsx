import { Footer } from "..";
import { Header } from "../Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-[1px]">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
