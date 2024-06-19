"use client";

import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Input from "@mui/joy/Input";
import styles from "./Header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ["Templates", "Components"];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => router.push("/login")}>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Sign Up" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Sheet
      variant="solid"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        bgcolor: "background.body",
      }}
    >
      {isMobile && (
        <IconButton
          edge="start"
          color="neutral"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
        className={styles.logo}
      />
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        {menuItems.map((item) => (
          <Button key={item} variant="plain" color="neutral" sx={{ mx: 1 }}>
            {item}
          </Button>
        ))}
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
        <Input placeholder="Search here.." />
        <Button variant="soft" color="secondary" sx={{ mx: 1 }}>
          Login
        </Button>
        <Button variant="solid" color="primary" sx={{ mx: 1 }}>
          Sign Up
        </Button>
      </Box>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </Sheet>
  );
};

export default Header;
