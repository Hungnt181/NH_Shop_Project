import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutWebsite from "./pages/(website)/layout";
import HomePage from "./pages/(website)/home/page";
import SignupPage from "./pages/(auth)/signup/page";
import LayoutAdmin from "./pages/(admin)/layout";
import DashboardPage from "./pages/(admin)/dashboard/page";
import NotFoundFage from "./pages/(website)/404/page";
import ShopPage from "./pages/(website)/shop/page";
import ProductDetailPage from "./pages/(website)/productDetail/page";
import CartPage from "./pages/(website)/cart/page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product_detail" element={<ProductDetailPage />} />
          <Route path="/wishlist" element={<CartPage />} />
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
