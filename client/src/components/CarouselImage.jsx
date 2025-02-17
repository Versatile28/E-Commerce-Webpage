import React from "react";

export default function CarouselImage({ text,alt }) {
  return (
    <img
      className="d-block w-100"
      src={text}
      alt={alt}
      style={{ height: "37.5rem", objectFit: "fill" }}
    />   
  );
}
