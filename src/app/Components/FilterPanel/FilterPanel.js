import React, { useState } from "react";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import KeyboardTabOutlinedIcon from "@mui/icons-material/KeyboardTabOutlined";
import FilterIcon from "@mui/icons-material/FilterList";
import styles from "./FilterPanel.module.css";
import Box from "@mui/joy/Box";

export default function FilterPanel() {
  const [isFilterMainVisible, setIsFilterMainVisible] = useState(true);

  const toggleFilterMainVisibility = () => {
    setIsFilterMainVisible(!isFilterMainVisible);
  };
  return (
    <div className={styles.cssFilter}>
      <div className={styles.FilterHeader}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
          className={styles.filterHeaderText}
        >
          <Button
            sx={{
              gap: 1,
            }}
            variant="plain"
            color="gray"
          >
            <FilterIcon />
            Filter
          </Button>

          <IconButton onClick={toggleFilterMainVisibility}>
            <KeyboardTabOutlinedIcon sx={{ transform: "rotate(180deg)" }} />
          </IconButton>
        </Box>
      </div>
      {isFilterMainVisible && (
        <div className={styles.FilterMain}>
          <h5>Categories</h5>
          <Box sx={{ marginTop: "16px" }}>
            <div className={styles.ComponentLists}>
              <div className={styles.ListItems}>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  <Button variant="outlined" color="neutral">
                    Navigation
                  </Button>
                  <Button variant="outlined" color="neutral">
                    Header
                  </Button>
                  <Button variant="outlined" color="neutral">
                    Hero
                  </Button>
                  <Button variant="outlined" color="neutral">
                    Testimonials
                  </Button>
                  <Button variant="outlined" color="neutral">
                    Pricing
                  </Button>
                  <Button variant="outlined" color="neutral">
                    Filters
                  </Button>
                  <Button variant="outlined" color="neutral">
                    Tables
                  </Button>
                  <Button variant="outlined" color="neutral">
                    Buttons
                  </Button>
                  <Button variant="outlined" color="neutral">
                    Banner
                  </Button>
                </Box>
              </div>
            </div>
          </Box>
        </div>
      )}
    </div>
  );
}
