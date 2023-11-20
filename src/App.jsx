import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HorizontalDevider from "./components/HorizontalDevider";
import NavigationBar from "./components/NavigationBar";
import ScrollToTop from "./components/ScrollToTop";
import TopHeader from "./components/TopHeader";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";

import { Provider } from "react-redux";
import Shop from "./pages/Shop";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ScrollToTop />
      <div className="bg-primary">
        <TopHeader />

        <NavigationBar />
        <HorizontalDevider />
        <div className="max-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
