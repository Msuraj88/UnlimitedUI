// components/MasonryGrid/MasonryGrid.js
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FigmaCard from "../FigmaCard/FigmaCard";

const MasonryGrid = ({ items }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="16px">
        {items.map((item, index) => (
          <FigmaCard
            key={index}
            image={item.image}
            title={item.title}
            buttonText={item.buttonText}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryGrid;
