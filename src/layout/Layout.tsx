import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = () => {

  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};