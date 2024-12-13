"use client";
import CodeBox from "@/components/Shared/Codebox/CodeBox";
import Image from "next/image";
import { useState } from "react";
const Input14 = () => {
  const [previewImage, setPreviewImage] = useState(
    "https://avatars.githubusercontent.com/u/83543612?v=4"
  );

  const loadFile = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <CodeBox
        text={"#Upload Preview"}
        stringCode={`import { useState } from "react";
const Input14 = () => {
  const [previewImage, setPreviewImage] = useState(
    "https://avatars.githubusercontent.com/u/83543612?v=4"
  );

    const loadFile = (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        setPreviewImage(URL.createObjectURL(file));
      }
    }
  return (
    <form>
      <div className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            id="preview_img"
            className="h-16 w-16 object-cover rounded-full"
            src={previewImage}
            alt="Current profile photo"
          />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={loadFile}
            className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
          />
        </label>
      </div>
    </form>
  )
};

export default Input14
`}
      >
        <form className="flex justify-center items-center">
          <div className="flex items-center space-x-6">
            <div className="shrink-0">
              <Image
                width={200}
                height={200}
                id="preview_img"
                className="h-16 w-16 object-cover rounded-full"
                src={previewImage}
                alt="Current profile photo"
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={loadFile}
                className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
              />
            </label>
          </div>
        </form>
      </CodeBox>
    </>
  );
};
export default Input14;
