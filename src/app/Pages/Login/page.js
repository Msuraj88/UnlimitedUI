// components/LoginPage.js

"use client"; // Use this directive for client-side components in Next.js 13+

import React from "react";
import { Box, Button, Typography, TextField, Card, Link } from "@mui/joy";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./page.module.css";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";

const LoginPage = () => {
  return (
    <div>
      <div className={styles.loginPage}>
        <div className={styles.accountBlock} globalShadowB>
          <div className={[styles.globalShadowB, "globalShadowB"]}>
            <Box>
              <Stack gap={4} sx={{ mb: 2 }}>
                <Stack gap={1}>
                  <Typography component="h1" level="h3">
                    Sign in
                  </Typography>
                  <Typography level="body-sm">
                    Welcome back! 👋 Login to get started!
                  </Typography>
                </Stack>
                <Button
                  variant="soft"
                  color="neutral"
                  fullWidth
                  startDecorator={<GoogleIcon />}
                >
                  Continue with Google
                </Button>
              </Stack>
              <Divider
                sx={(theme) => ({
                  [theme.getColorSchemeSelector("light")]: {
                    color: { xs: "#FFF", md: "text.tertiary" },
                  },
                })}
              >
                or
              </Divider>
              <Stack gap={4} sx={{ mt: 2 }}>
                <form>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      gap: 2,
                    }}
                  >
                    <FormControl required>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" name="email" />
                    </FormControl>
                    <FormControl required>
                      <FormLabel>Password</FormLabel>
                      <Input type="password" name="password" />
                    </FormControl>
                  </Box>
                  <Stack gap={4} sx={{ mt: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox
                        size="sm"
                        label="Remember me"
                        name="persistent"
                      />
                      <Link level="title-sm" href="#replace-with-a-link">
                        Forgot your password?
                      </Link>
                    </Box>
                    <Button type="submit" fullWidth>
                      Sign in
                    </Button>
                  </Stack>
                  <Typography level="body-sm" sx={{ mt: 2 }}>
                    New to company?{" "}
                    <Link href="#replace-with-a-link" level="title-sm">
                      Sign up!
                    </Link>
                  </Typography>
                </form>
              </Stack>
            </Box>
          </div>
        </div>
        <Box component="footer" sx={{ py: 3 }}>
          <Typography level="body-xs" textAlign="center">
            © Your company {new Date().getFullYear()}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;
