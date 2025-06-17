// components/ArrowWithLabel.tsx

import React from "react";

const ArrowWithLabel = () => {
  return (
    <div className="absolute -top-16 left-0 w-full overflow-hidden leading-[0] z-10">
      {/* ▼ 逆三角形 */}
      <svg
        className="w-full h-16 text-white"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0,0 50,100 100,0" />
      </svg>

      {/* ▼ ラベル */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-[#FFF9DB] px-4 py-1 rounded-md shadow text-sm font-semibold text-red-500 border border-yellow-300 tracking-wide text-center">
          そんなご担当者様に<br />朗報です！
        </div>
      </div>
    </div>
  );
};

export default ArrowWithLabel;
