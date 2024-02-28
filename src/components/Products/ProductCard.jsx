import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className=" relative flex flex-col space-y-2">
        <div>
          <img
            className="h-[180px] w-[260px] object-cover rounded-md group"
            src={data.img}
            alt="product-image"
          />
          <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
            <Button
              text={"Add to cart"}
              bgColor={"bg-primary"}
              textColor={"text-white"}
            />
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg">{data.title}</h2>
          <h2 className="font-bold text-md">${data.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
