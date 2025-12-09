import React from "react";
import Image from "next/image";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, price, location, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
      {image && (
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-black font-bold mt-2">${price}/night</p>
      </div>
    </div>
  );
};

export default Card;
