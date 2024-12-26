import CodeBox from "@/components/Shared/Codebox/CodeBox";
import React from "react";

const Alert5 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<h1 className="text-5xl text-white border border-red-400 bg-red-300 p-4"> This is Alert from Soft ui</h1>`}
      >
        <h1 className="text-5xl text-white border border-red-400 bg-red-300 p-4">
          This is Alert from Soft ui
        </h1>
      </CodeBox>
    </div>
  );
};

export default Alert5;
