import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
