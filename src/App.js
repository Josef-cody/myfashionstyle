import { React, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./viewComponents/Footer"
import Index from "./viewComponents/Index"

const WomensDressesApp = lazy(() => import("./viewComponents/products/womensDressesApp"));
const WomensShoes = lazy(() => import("./viewComponents/products/woman/womenShoes"));
const MensShirts = lazy(() => import("./viewComponents/products/man/mensshirts"));
const MensShoes = lazy(() => import("./viewComponents/products/man/mensShoes"));

function App() {



  return (
    <>
      <Suspense>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Index />}
            />
            <Route
              path="/products/woman-dresses"
              element={<WomensDressesApp />}
            />
            <Route
              path="/products/woman-shoes"
              element={<WomensShoes />}
            />
            <Route
              path="/products/man-shirts"
              element={<MensShirts />}
            />
            <Route
              path="/products/man-shoes"
              element={<MensShoes />}
            />
          </Routes>
        </Router>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
