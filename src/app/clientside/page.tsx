"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "./Loading";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Page: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const fetchedData: Products[] = await response.json();
        setProducts(fetchedData);
      } catch {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen pt-14">
      <h1 className="text-5xl text-white mb-8 font-bold text-center">
        Fetched Products Of Client-Side 
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Loading />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 font-semibold">
          {error}
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col h-[450px] bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500"
            >
              <div className="w-full h-48 flex-shrink-0 overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={`Image of ${product.title}`}
                  width={400}
                  height={400}
                  unoptimized
                  className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-center h-14 line-clamp-2">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-400 text-center h-16 line-clamp-3">
                    {product.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="text-lg font-bold text-blue-400 text-center mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                    aria-label={`Add ${product.title} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
