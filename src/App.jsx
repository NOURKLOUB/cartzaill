import Recipes from "./components/Recipes/Recipes";
import Shop from "./components/Shop/Shop";
import Special from "./components/Special/Special";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/products/Product";
import Section from "./components/section/Section";

export default function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <Product />
      <div className="mb-5" />
      <Shop />
      <Special />
      <Recipes />
      <div className="mb-5" />
      <Footer/>
    </div>
  );
}
