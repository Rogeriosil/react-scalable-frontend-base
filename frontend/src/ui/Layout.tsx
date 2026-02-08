import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <div>
      <Header />
      <main className="container" style={{ padding: "22px 0" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
