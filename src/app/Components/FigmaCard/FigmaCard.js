import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/joy";
import styles from "./FigmaCard.module.css";
import Button from "@mui/joy/Button";
import FigmaIcon from "./FigmaIcon";
import Box from "@mui/joy/Box";

const FigmaCard = ({ image, title, description, buttonText, buttonLink }) => {
  return (
    <Card className={styles.cardFigmaui}>
      <div className={styles.cardCoverSec}>
        <img className={styles.FigmaCardImage} src={image} alt={title} />
      </div>
      <CardContent
        sx={{
          padding: "6px 12px",
          backgroundColor: "#fff",
          borderRadius: "0 0 8px 8px",
          borderTop: "1px solid #e6e8ec",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            level="body1"
            component="p"
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              padding: "0px",
              margin: "0px",
            }}
          >
            {title}
          </Typography>

          <Button
            className="styles.cardButton"
            color="neutral"
            variant="outlined"
            startDecorator={<FigmaIcon />}
            sx={"fontWeight:400;"}
          >
            {buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

FigmaCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default FigmaCard;
