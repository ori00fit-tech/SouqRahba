import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppShell } from "../../../packages/ui/src";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ToastProvider } from "./context/ToastContext";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import CheckoutPage from "./pages/CheckoutPage";
import VendorPage from "./pages/VendorPage";

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <FavoritesProvider>
          <CartProvider>
            <AppShell title="Souq MaZellige">
              <div style={{ display: "grid", gap: 32 }}>
                <Navbar />

                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/catalog" element={<CatalogPage />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/vendor/:id" element={<VendorPage />} />
                  <Route path="/favorites" element={<FavoritesPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
              </div>
            </AppShell>
          </CartProvider>
        </FavoritesProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}
