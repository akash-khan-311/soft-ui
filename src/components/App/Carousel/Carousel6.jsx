"use client";
import CodeBox from "@/components/Shared/Codebox/CodeBox";
import Image from "next/image";
import { useState } from "react";

const Carousel6 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const images = [
    {
      id: 1,
      title: "Sajek Valley",
      description: "pleaes copy the title and paste on the google",
      image: "https://images.unsplash.com/photo-1707219210872-d4bb01393cae",
    },
    {
      id: 2,
      title: "Cox's Bazar",
      description: "pleaes copy the title and paste on the google",
      image: "https://images.unsplash.com/photo-1720180434910-50c97e34e20c",
    },
    {
      id: 3,
      title: "Dhaka",
      description: "pleaes copy the title and paste on the google",
      image: "https://images.unsplash.com/photo-1605776988089-105148e14767",
    },
    {
      id: 4,
      title: "Barishal",
      description: "আইতে নদী , যাইতে খাল , মোগো বাড়ি বরিশাল",
      image: "https://images.unsplash.com/photo-1713718654419-6a0bbd09bce1",
    },
    {
      id: 5,
      title: "Rangamati",
      description: "pleaes copy the title and paste on the google",
      image: "https://images.unsplash.com/photo-1701160798846-3ea306241954",
    },
  ];
  return (
    <>
      <CodeBox>
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-auto md:h-[400px] overflow-hidden">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative w-full md:flex-1 overflow-hidden transition-all duration-500 ${
                activeIndex === index ? "md:flex-[3]" : "md:flex-[1]"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Image
                height={500}
                width={500}
                unoptimized={false}
                src={image.image}
                alt={image.title}
                className="w-full h-56 md:h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-4 transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-sm md:text-lg font-bold">{image.title}</h3>
                <p className="text-xs md:text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CodeBox>
    </>
  );
};
export default Carousel6;
