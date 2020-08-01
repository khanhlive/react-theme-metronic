import React from "react";

export default function Loading() {
  return (
    <i
      className="fa fa-gear fa-spin fadeInOut"
      style={{
        fontSize: "32px",
        opacity: 0.8,
        top: "5rem",
        left: "1rem",
        position: "absolute"
      }}
    />
  );
}
