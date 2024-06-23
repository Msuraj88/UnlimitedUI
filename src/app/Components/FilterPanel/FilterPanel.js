import React from "react";
import ExploreHeader from "../../Components/ExploreHeader/ExploreHeader";
import { Typography } from "@mui/joy";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import KeyboardTabOutlinedIcon from "@mui/icons-material/KeyboardTabOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterIcon from "@mui/icons-material/FilterList";
import styles from "./FilterPanel.module.css";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";

export default function FilterPanel() {
  return (
    <div className={styles.cssFilter}>
      <div className={styles.FilterHeader}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Optional, for vertical alignment
            gap: 2, // Optional, to add space between the buttons
            width: "100%",
          }}
          className={styles.filterHeaderText} // Make sure this class exists in your CSS
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

          <IconButton>
            <KeyboardTabOutlinedIcon sx={{ transform: "rotate(180deg)" }} />
          </IconButton>
        </Box>
      </div>
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
    </div>
  );
}
