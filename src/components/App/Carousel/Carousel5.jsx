"use client";
import CodeBox from "@/components/Shared/Codebox/CodeBox";
import { FaCamera } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
const data = [
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
const Carousel5 = () => {
  const [active, setActive] = useState(0);
  const handleToggle = (index) => setActive(index);
  return (
    <div>
      <CodeBox
        text={"# Image Accordion Carousel"}
        stringCode={`import { FaCamera } from "react-icons/fa";
import { useState } from "react";

const data = [
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
const Accordion = () => {
  const [active, setActive] = useState(0);
  const handleToggle = (index) => setActive(index);

  return (
    <>
      <div className="flex gap-2.5 cursor-pointer">
        {data.map((image) => {
          const isActive = active == image.id && "w-[450px]";
          return (
            <div
              key={image.id}
              className={\`relative overflow-hidden rounded-md bg-white w-16 h-[500px]  opacity-90 transition-all duration-500 \${isActive}\`}
              onClick={() => handleToggle(image.id)}
            >
              <img
                alt={image.title}
                src={image.image}
                className={\`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] filter grayscale-0 \${
                  !isActive && "filter grayscale-[0.1]"
                }\`}
              />
              <div
                className={\`absolute bottom-0 left-0 w-[450px] z-30  p-5 flex items-center gap-3 bg-gradient-to-b from-transparent to-black transition-opacity duration-300 \${
                  !isActive && "opacity-0 invisible"
                }\`}
              >
                <span className="grid place-items-center w-12 h-12 bg-white/80 rounded-full text-3xl">
                  <FaCamera />
                </span>
                <div>
                  <h2 className="text-2xl font-normal text-white/90">
                    {image.title}
                  </h2>
                  <p className="text-sm text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Accordion;

`}
      >
        <div className="flex justify-center items-center gap-2.5 cursor-pointer">
          {data.map((image) => {
            const isActive = active == image.id && "w-[450px]";
            return (
              <div
                key={image.id}
                className={`relative  overflow-hidden rounded-md bg-white w-16 h-[500px]  opacity-90 transition-all duration-500 ${isActive}`}
                onClick={() => handleToggle(image.id)}
              >
                <Image
                  width={500}
                  height={500}
                  placeholder="blur"
                  quality={100}
                  blurDataURL="https://images.unsplash.com/photo-1707219210872-d4bb01393cae"
                  alt={image.title}
                  src={image.image}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] filter grayscale-0 ${
                    !isActive && "filter grayscale-[0.1]"
                  } `}
                />
                <div
                  className={`absolute bottom-0 left-0 w-[450px] z-30  p-5 flex items-center gap-3 bg-gradient-to-b from-transparent to-black transition-opacity duration-300 ${
                    !isActive && "opacity-0 invisible"
                  }`}
                >
                  <span className="grid place-items-center w-12 h-12 bg-white/80 rounded-full text-3xl">
                    <FaCamera />
                  </span>
                  <div>
                    <h2 className="text-2xl font-normal text-white/90">
                      {image.title}
                    </h2>
                    <p className="text-sm text-gray-300">{image.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CodeBox>
    </div>
  );
};
export default Carousel5;
