"use client";

import { forwardRef } from "react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

const HamburgerButton = forwardRef<HTMLButtonElement, any>(
  ({ variant = "open", ...props }, ref) => {
    // const style = variant === "open" ? "bg-gray-200 hover:border-gray-200 hover:bg-gray-200/80 border-2 border-gray-200 hover:text-gray-800 text-gray-800" : "bg-white/50 hover:border-gray-400 hover:bg-gray-800 hover:border-gray-800 hover:text-gray-200 text-gray-800";
    // return (
    //   <button
    //     ref={ref}
    //     {...props}
    //     className={`p-2 ${style} rounded-full cursor-pointer w-max self-end transition-all duration-200`}
    //   >
    //     {
    //         variant === "open" ? (
    //             <Bars2Icon className="w-10 h-10" />
    //         ) : (
    //             <XMarkIcon className="w-10 h-10" />
    //         )
    //     }
    //   </button>
    // );
    const styleFirstBar =
      variant === "open" ? "rotate-45" : "-rotate-0 -mt-0";
    const styleSecondBar =
      variant === "open" ? "-rotate-45 -mt-1" : "rotate-0 mt-0";
    const styleButton = variant === "open" ? "gap-0" : "gap-2";

    return (
      <button
        ref={ref}
        {...props}
        className={`rounded-full w-14 h-14 cursor-pointer self-end transition-all duration-200 group bg-amber-600 z-50`}
      >
        <div
          className={`flex flex-col justify-center items-center ${styleButton} transition-all duration-300`}
        >
          <div
            className={`w-8 h-1 group-hover:bg-gray-600 bg-white transition-all duration-300 rounded-full ${styleFirstBar}`}
          ></div>
          <div
            className={`w-8 h-1 group-hover:bg-gray-600 bg-white transition-all duration-300 rounded-full ${styleSecondBar}`}
          ></div>
        </div>
      </button>
    );
  }
);

HamburgerButton.displayName = "HamburgerButton";

export default HamburgerButton;
