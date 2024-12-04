import CodeBox from "@/components/Shared/Codebox/CodeBox";
import {
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaLaravel,
  FaVuejs,
} from "react-icons/fa";

const Button21 = () => {
  return (
    <>
      <CodeBox
        stringCode={`{/* Github Button */}
<button className="bg-black flex items-center gap-x-3 rounded-lg text-white text-lg text-center self-center px-8 py-2 my-2 mx-2"><FaGithub /> <span>Github</span></button>
{/* Facebook Button */}
<button className="bg-blue-700 rounded-lg flex items-center gap-x-3 text-white text-lg text-center self-center px-8 py-2 my-2 mx-2"><FaFacebook /> <span>Facebook</span></button>
{/* YouTube Button */}
<button className="bg-red-700 rounded-lg flex items-center gap-x-3 text-white text-lg text-center self-center px-8 py-2 my-2 mx-2"><FaYoutube /> <span>YouTube</span></button>
{/* Laravel Button */}
<button className="bg-red-500 rounded-lg flex items-center gap-x-3 text-white text-lg text-center self-center px-8 py-2 my-2 mx-2"><FaLaravel /> <span>Laravel</span></button>
{/* VueJS Button */}
<button className="bg-green-200 text-green-800 rounded-lg flex items-center gap-x-3 text-lg text-center self-center px-8 py-2 my-2 mx-2"><FaVuejs /> <span>VueJS</span></button>`}
      >
        <div className="flex flex-wrap justify-evenly">
          <button className="bg-black flex items-center gap-x-3 rounded-lg text-white text-lg text-center self-center px-8 py-2 my-2 mx-2">
            <FaGithub /> <span>Github</span>
          </button>
          <button className="bg-blue-700 rounded-lg flex items-center gap-x-3 text-white text-lg text-center self-center px-8 py-2 my-2 mx-2">
            <FaFacebook /> <span>Facebook</span>
          </button>
          <button className="bg-red-700 rounded-lg flex items-center gap-x-3 text-white text-lg text-center self-center px-8 py-2 my-2 mx-2">
            <FaYoutube /> <span>YouTube</span>
          </button>
          <button className="bg-red-500 rounded-lg flex items-center gap-x-3 text-white text-lg text-center self-center px-8 py-2 my-2 mx-2">
            <FaLaravel /> <span>Laravel</span>
          </button>
          <button className="bg-green-200 text-green-800 rounded-lg flex items-center gap-x-3 text-lg text-center self-center px-8 py-2 my-2 mx-2">
            <FaVuejs /> <span>VueJS</span>
          </button>
        </div>
      </CodeBox>
    </>
  );
};
export default Button21;
