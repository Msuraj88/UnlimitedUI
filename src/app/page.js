"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/header/header";
import "./globals.css";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { Container, Grid } from "@mui/joy";
import FigmaCard from "./Components/FigmaCard/FigmaCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };
  const router = useRouter();
  return (
    <div>
      <Header />

      <div className="hero-section">
        <Container>
          <div className="hero-content">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "130px 20px 20px",
              }}
            >
              <Typography
                className="hero-title-gradient"
                level="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  mb: 2,
                  maxWidth: "800px",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, blue, purple)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Design Beyond Limits
              </Typography>
              <Typography
                level="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  mb: 2,
                  maxWidth: "800px",
                }}
              >
                The world’s destination for design
              </Typography>
              <Typography
                level="body1"
                component="p"
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  mb: 3,
                  maxWidth: "600px",
                }}
              >
                Beyond UI is a premium slot UI kit and design system for Figma.
                Great starting point for any design project, made for true
                designers.
              </Typography>
              <Button
                variant="solid"
                color="primary"
                size="lg"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                onClick={() => router.push("/login")}
              >
                Get Started
              </Button>
              <div className=""></div>
            </Box>
          </div>
        </Container>
      </div>

      <div className={styles.demoSection}>
        <Container>
          <Typography
            level="body1"
            component="p"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              mb: 3,
              textAlign: "center",
            }}
          >
            Here's a quick video to show off the power of Unlimited UI.
          </Typography>

          <div className={styles.demoVideo}>
            {" "}
            <video width="100%" height="auto" controls>
              <source
                src="https://assets-global.website-files.com/655740d4e61407b6b8a9551a/65fb2d93023fbeafb2091b2d_202403201412%20(3)-transcode.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </Container>
      </div>

      <div className={styles.demoSection}>
        <Container>
          <div className={styles.SectionTitle}>
            <Typography
              level="h1"
              component="h1"
              sx={{
                fontSize: { xs: "1rem", md: "2rem" },
                mb: 2,
                textAlign: "center",
              }}
            >
              Design websites in minutes, not weeks
            </Typography>
          </div>

          <div class="masonry">
            <div class="item">
              <FigmaCard
                image="https://landingfoliocom.imgix.net/figmacomponents/1662693665160-631ab121ef237c64eac55a1f.png?lossless=true&auto=format&fit=max&q=75&w=400" // Replace with your image URL
                title="Figma Design"
                buttonText="Learn More"
              />
            </div>

            <div class="item">
              <FigmaCard
                image="https://landingfoliocom.imgix.net/figmacomponents/1657771115727-62cf946b12847cc9ecafe6b2.png?lossless=true&auto=format&fit=max&q=75&w=400" // Replace with your image URL
                title="Figma dfsdf"
                buttonText="dfsdf"
              />
            </div>
            <div class="item">
              <FigmaCard
                image="https://landingfoliocom.imgix.net/figmacomponents/1653465715140-628de273b379df22b5a664cf.png?lossless=true&auto=format&fit=max&q=75&w=400" // Replace with your image URL
                title="Figma Design"
                buttonText="Learn More"
              />
            </div>
            <div class="item">
              <FigmaCard
                image="https://landingfoliocom.imgix.net/figmacomponents/1657771115727-62cf946b12847cc9ecafe6b2.png?lossless=true&auto=format&fit=max&q=75&w=400" // Replace with your image URL
                title="Figma dfsdf"
                buttonText="dfsdf"
              />
            </div>
            <div class="item">
              <FigmaCard
                image="https://landingfoliocom.imgix.net/figmacomponents/1660963984237-63004c909819aa75c4443dd6.png?lossless=true&auto=format&fit=max&q=75&w=400" // Replace with your image URL
                title="Figma dfsdf"
                buttonText="dfsdf"
              />
            </div>
          </div>

          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="solid"
              color="primary"
              size="md"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              View All Components
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
}
