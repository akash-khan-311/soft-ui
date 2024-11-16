import CodeBox from "@/components/Shared/Codebox/CodeBox";
import Image from "next/image";

const Avatar6 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<div className="font-semibold text-white text-base md:text-2xl text-center md:text-left">Trusted by</div>
 <div className="flex space-x-2 items-center flex-col md:flex-row">
  <div className="flex -space-x-2 overflow-hidden p-2">
    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/men/51.jpg" alt />
    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/women/4.jpg" alt />
    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/men/34.jpg" alt />
    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/women/6.jpg" alt />
    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/men/9.jpg" alt />
    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/women/9.jpg" alt />
  </div>
  <div className="text-white">Join 5,000+ other members</div>
</div>`}
      >
        <div className="flex justify-center">
          <div>
            <div className="font-semibold text-white text-base md:text-2xl text-center md:text-left">
              Trusted by
            </div>
            <div className="flex space-x-2 items-center flex-col md:flex-row">
              <div className="flex -space-x-2 overflow-hidden p-2">
                <Image
                  alt="image"
                  width={200}
                  height={200}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                  src="https://randomuser.me/api/portraits/men/51.jpg"
                />
                <Image
                  alt="image"
                  width={200}
                  height={200}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                  src="https://randomuser.me/api/portraits/women/4.jpg"
                />
                <Image
                  alt="image"
                  width={200}
                  height={200}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                />
                <Image
                  alt="image"
                  width={200}
                  height={200}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                />
                <Image
                  alt="image"
                  width={200}
                  height={200}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                  src="https://randomuser.me/api/portraits/men/9.jpg"
                />
                <Image
                  alt="image"
                  width={200}
                  height={200}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                  src="https://randomuser.me/api/portraits/women/9.jpg"
                />
              </div>
              <div className="text-white">Join 5,000+ other members</div>
            </div>
          </div>
        </div>
      </CodeBox>
    </div>
  );
};
export default Avatar6;
