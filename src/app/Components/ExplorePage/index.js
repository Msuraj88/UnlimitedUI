import React from "react";
import ExploreHeader from "../../Components/ExploreHeader/ExploreHeader";
import Button from "@mui/joy/Button";
import FilterIcon from "@mui/icons-material/FilterList";
import FigmaCard from "../../Components/FigmaCard/FigmaCard";
import FilterPanel from "../../Components/FilterPanel/FilterPanel";
import Box from "@mui/joy/Box";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.exploreHeader}>
        <ExploreHeader />
      </div>

      <div className={styles.explorePageWrapper}>
        <div className={styles.exploreFullWrapper}>
          <FilterPanel />

          <div className={styles.exploreWrapper}>
            <div className={styles.ExploreLinkWrapper}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center", // Optional, for vertical alignment
                  gap: 2, // Optional, to add space between the buttons
                  width: "100%",
                }}
              >
                <div className={styles.explorelinkgroup}>
                  <div className={styles.ccfilterbuttonwrap}>
                    <Button
                      variant="outlined"
                      startIcon={<FilterIcon />}
                      sx={{ color: "#1E88E5", borderColor: "#1E88E5", gap: 1 }}
                    >
                      {" "}
                      <FilterIcon />
                      Show Filter
                    </Button>
                    <div className={styles.Baseline}></div>
                  </div>
                  <Button>Components</Button>
                </div>
              </Box>
            </div>
            <div className={styles.componentMain}>
              <FigmaCard
                image="https://landingfoliocom.imgix.net/figmacomponents/1662693665160-631ab121ef237c64eac55a1f.png?lossless=true&auto=format&fit=max&q=75&w=400" // Replace with your image URL
                title="Figma Design"
                buttonText="Copy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
