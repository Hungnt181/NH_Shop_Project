import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutWebsite from "./pages/(website)/layout";
import HomePage from "./pages/(website)/home/page";
import SignupPage from "./pages/(auth)/signup/page";
import LayoutAdmin from "./pages/(admin)/layout";
import DashboardPage from "./pages/(admin)/dashboard/page";
import NotFoundFage from "./pages/(website)/404/page";
import ShopPage from "./pages/(website)/shop/page";
import DetailPage from "./pages/(website)/detail/page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Route>

        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="DashboardPage" />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>

        <Route path="*" element={<NotFoundFage />} />
      </Routes>
    </>
  );
}

export default App;
