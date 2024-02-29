import { Fragment } from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-gray-400 border-solid rounded-full animate-spin">
        <div className="w-5 h-5 border-3 border-gray-100 border-solid rounded-full absolute top-1 left-1 animate-spin-inner"></div>
      </div>
    </div>
  );
}
