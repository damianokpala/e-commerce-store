// DataContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Context
const DataContext = createContext();

// Create a Provider component
export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const data = {
    categories: [
      {
        id: 1,
        name: "Men's Clothing",
        products: [
          {
            id: 101,
            name: "Slim Fit Half Turtleneck Pullover",
            description:
              "A stylish and comfortable pullover with a slim fit design.",
            price: 430.0,
            currency: "LE",
            rating: 4.5,
            availability: "In Stock",
            colors: ["Black", "Grey"],
            sizes: ["S", "M", "L", "XL"],
            images: [
              "./products/pullover1.webp",
              "./products/pullover2.webp",
              "./products/pullover3.webp",
              "./products/pullover4.webp",
            ],
            brand: "BrandA",
            material: "Cotton",
            features: ["Breathable", "Soft", "Lightweight"],
          },
          {
            id: 102,
            name: "Standard Fit Pullover",
            description:
              "A classic pullover with a standard fit for everyday wear.",
            price: 360.0,
            currency: "LE",
            rating: 4.0,
            availability: "In Stock",
            colors: ["Blue", "Green"],
            sizes: ["S", "M", "L", "XL"],
            images: [
              "./products/standard1.webp",
              "./products/standard2.webp",
              "./products/standard3.webp",
              "./products/standard4.webp",
            ],
            brand: "BrandB",
            material: "Polyester",
            features: ["Durable", "Warm", "Machine Washable"],
          },
          {
            id: 103,
            name: "Casual Denim Jacket",
            description: "A trendy denim jacket for casual outings.",
            price: 700.0,
            currency: "LE",
            rating: 4.7,
            availability: "In Stock",
            colors: ["Blue", "Black"],
            sizes: ["M", "L", "XL"],
            images: [
              "./products/jacket1.webp",
              "./products/jacket2.webp",
              "./products/jacket3.webp",
              "./products/jacket4.webp",
            ],
            brand: "BrandC",
            material: "Denim",
            features: ["Stylish", "Durable", "Comfortable"],
          },
          {
            id: 104,
            name: "Formal Suit",
            description: "A sleek formal suit for special occasions.",
            price: 1500.0,
            currency: "LE",
            rating: 4.9,
            availability: "In Stock",
            colors: ["Black", "Navy Blue"],
            sizes: ["M", "L", "XL"],
            images: [
              "./products/suit1.webp",
              "./products/suit2.webp",
              "./products/suit3.webp",
              "./products/suit4.webp",
            ],
            brand: "BrandD",
            material: "Wool Blend",
            features: ["Elegant", "Comfortable", "Tailored Fit"],
          },
        ],
      },
      {
        id: 2,
        name: "Women's Clothing",
        products: [
          {
            id: 201,
            name: "Oversized Knit Sweater",
            description:
              "A cozy oversized knit sweater perfect for chilly days.",
            price: 500.0,
            currency: "LE",
            rating: 4.8,
            availability: "In Stock",
            colors: ["Beige", "Pink"],
            sizes: ["S", "M", "L"],
            images: [
              "./products/sweater1.webp",
              "./products/sweater2.webp",
              "./products/sweater3.webp",
              "./products/sweater4.webp",
            ],
            brand: "BrandE",
            material: "Wool",
            features: ["Warm", "Soft", "Stylish"],
          },
          {
            id: 202,
            name: "Casual Long Sleeve Top",
            description:
              "A versatile casual top with long sleeves for everyday comfort.",
            price: 200.0,
            currency: "LE",
            rating: 4.2,
            availability: "In Stock",
            colors: ["White", "Black"],
            sizes: ["S", "M", "L"],
            images: [
              "./products/top1.webp",
              "./products/top2.webp",
              "./products/top3.webp",
              "./products/top4.webp",
            ],
            brand: "BrandF",
            material: "Cotton",
            features: ["Comfortable", "Breathable", "Easy Care"],
          },
          {
            id: 203,
            name: "Floral Print Dress",
            description: "A beautiful floral print dress perfect for summer.",
            price: 400.0,
            currency: "LE",
            rating: 4.5,
            availability: "In Stock",
            colors: ["Red", "Blue"],
            sizes: ["S", "M", "L"],
            images: [
              "./products/dress1.webp",
              "./products/dress2.webp",
              "./products/dress3.webp",
              "./products/dress4.webp",
            ],
            brand: "BrandG",
            material: "Chiffon",
            features: ["Lightweight", "Flowy", "Comfortable"],
          },
          {
            id: 204,
            name: "Athletic Leggings",
            description: "High-performance athletic leggings for workouts.",
            price: 250.0,
            currency: "LE",
            rating: 4.6,
            availability: "In Stock",
            colors: ["Black", "Grey"],
            sizes: ["S", "M", "L"],
            images: [
              "./products/leggings1.webp",
              "./products/leggings2.webp",
              "./products/leggings3.webp",
              "./products/leggings4.webp",
            ],
            brand: "BrandH",
            material: "Spandex",
            features: ["Stretchy", "Breathable", "Moisture-Wicking"],
          },
        ],
      },
    ],
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  return (
    <DataContext.Provider value={{ data, cart, addToCart, removeFromCart }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useData = () => {
  return useContext(DataContext);
};
