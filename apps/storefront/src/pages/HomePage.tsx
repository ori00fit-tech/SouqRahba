import HeroSection from "../components/HeroSection";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedProducts from "../components/FeaturedProducts";
import TrustSection from "../components/TrustSection";
import SellerCTA from "../components/SellerCTA";

export default function HomePage() {
  return (
    <div style={{ display: "grid", gap: 56 }}>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <TrustSection />
      <SellerCTA />
    </div>
  );
}
