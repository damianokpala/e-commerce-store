import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./Pages/Homepage"; // Assuming Homepage is default exported
import { Login } from "./Pages/Login"; // Assuming Login is default exported
import { CartItems } from "./Pages/CartItems"; // Assuming CartItems is default exported
import { Contact } from "./Pages/Contact"; // Assuming Contact is default exported
import { Products } from "./Pages/Products";
import { Product } from "./Pages/Product";
import { Checkout } from "./Pages/CheckoutLayout";
import { CheckoutForm } from "./component/CheckoutForm";
import { CheckoutCheck } from "./component/CheckoutCheck";
import { Payment } from "./component/Payment";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/products" element={<Products />} />

          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<CartItems />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/checkout" element={<Checkout />}>
            <Route index element={<CheckoutForm />} />
            <Route path="confirm-details" element={<CheckoutCheck />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
