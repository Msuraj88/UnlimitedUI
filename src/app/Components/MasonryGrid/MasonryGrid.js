import React from "react";
import { Masonry } from "react-plock";

const MasonryGrid = ({
  items,
  columns = [1, 2, 3],
  gap = [24, 12, 6],
  media = [640, 768, 1024],
}) => {
  return (
    <Masonry
      items={items}
      config={{ columns, gap, media }}
      render={(item, idx) => (
        <div key={idx} className="grid-item">
          {item}
        </div>
      )}
    />
  );
};

export default MasonryGrid;
