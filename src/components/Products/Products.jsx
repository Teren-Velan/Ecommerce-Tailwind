import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed ",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img5,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div className="container mb-10">
      {/* Header */}
      <Heading title="Our Products" subtitle="Explore Our Products"></Heading>
      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-4">
        {ProductsData.map((product) => {
          return (
            <div key={product.id} className="mt-5 ">
              <ProductCard data={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
