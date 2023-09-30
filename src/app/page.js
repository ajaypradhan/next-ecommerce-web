import Deals from "./components/Deals";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductFeed from "./components/ProductFeed";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroBanner />
      <Deals />
      <ProductFeed />
    </main>
  );
}
