// components/LoginPage.js

"use client"; // Use this directive for client-side components in Next.js 13+

import React from "react";
import Header from "../../Components/header/header";
import { Container, Grid } from "@mui/joy";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/joy/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import Button from "@mui/joy/Button";
import AspectRatio from "@mui/joy/AspectRatio";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Container>
        <Box
          sx={{
            marginTop: "42px",
          }}
        >
          <h1>My Profile</h1>
        </Box>
        <Box
          sx={{
            marginTop: "24px",
          }}
        >
          <Tabs aria-label="Basic tabs" defaultValue={0}>
            <TabList>
              <Tab>My Profile</Tab>
            </TabList>
            <TabPanel value={0}>
              <Stack
                spacing={4}
                sx={{
                  display: "flex",
                  maxWidth: "800px",
                  mx: "auto",
                  px: { xs: 2, md: 6 },
                  py: { xs: 2, md: 3 },
                }}
              >
                {" "}
                <Card>
                  <Box sx={{ mb: 1 }}>
                    <Typography level="title-md">Personal info</Typography>
                    <Typography level="body-sm">
                      Customize how your profile information will apper to the
                      networks.
                    </Typography>
                  </Box>
                  <Divider />
                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
                  >
                    <Stack direction="column" spacing={1}>
                      <AspectRatio
                        ratio="1"
                        maxHeight={200}
                        sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                          srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                          loading="lazy"
                          alt=""
                        />
                      </AspectRatio>
                      <IconButton
                        aria-label="upload new picture"
                        size="sm"
                        variant="outlined"
                        color="neutral"
                        sx={{
                          bgcolor: "background.body",
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          left: 100,
                          top: 170,
                          boxShadow: "sm",
                        }}
                      >
                        <EditRoundedIcon />
                      </IconButton>
                    </Stack>
                    <Stack spacing={2} sx={{ flexGrow: 1 }}>
                      <Stack spacing={1}>
                        <FormLabel>Name</FormLabel>
                        <FormControl
                          sx={{
                            display: { sm: "flex-column", md: "flex-row" },
                            gap: 2,
                          }}
                        >
                          <Input size="sm" placeholder="First name" />
                          <Input
                            size="sm"
                            placeholder="Last name"
                            sx={{ flexGrow: 1 }}
                          />
                        </FormControl>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <FormControl>
                          <FormLabel>Role</FormLabel>
                          <Input size="sm" defaultValue="UI Developer" />
                        </FormControl>
                        <FormControl sx={{ flexGrow: 1 }}>
                          <FormLabel>Email</FormLabel>
                          <Input
                            size="sm"
                            type="email"
                            startDecorator={<EmailRoundedIcon />}
                            placeholder="email"
                            defaultValue="siriwatk@test.com"
                            sx={{ flexGrow: 1 }}
                          />
                        </FormControl>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack
                    direction="column"
                    spacing={2}
                    sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Stack direction="column" spacing={1}>
                        <AspectRatio
                          ratio="1"
                          maxHeight={108}
                          sx={{ flex: 1, minWidth: 108, borderRadius: "100%" }}
                        >
                          <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                          />
                        </AspectRatio>
                        <IconButton
                          aria-label="upload new picture"
                          size="sm"
                          variant="outlined"
                          color="neutral"
                          sx={{
                            bgcolor: "background.body",
                            position: "absolute",
                            zIndex: 2,
                            borderRadius: "50%",
                            left: 85,
                            top: 180,
                            boxShadow: "sm",
                          }}
                        >
                          <EditRoundedIcon />
                        </IconButton>
                      </Stack>
                      <Stack spacing={1} sx={{ flexGrow: 1 }}>
                        <FormLabel>Name</FormLabel>
                        <FormControl
                          sx={{
                            display: {
                              sm: "flex-column",
                              md: "flex-row",
                            },
                            gap: 2,
                          }}
                        >
                          <Input size="sm" placeholder="First name" />
                          <Input size="sm" placeholder="Last name" />
                        </FormControl>
                      </Stack>
                    </Stack>
                    <FormControl>
                      <FormLabel>Role</FormLabel>
                      <Input size="sm" defaultValue="UI Developer" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        size="sm"
                        type="email"
                        startDecorator={<EmailRoundedIcon />}
                        placeholder="email"
                        defaultValue="siriwatk@test.com"
                        sx={{ flexGrow: 1 }}
                      />
                    </FormControl>
                  </Stack>
                  <CardOverflow
                    sx={{ borderTop: "1px solid", borderColor: "divider" }}
                  >
                    <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                      <Button size="sm" variant="outlined" color="neutral">
                        Cancel
                      </Button>
                      <Button size="sm" variant="solid">
                        Save
                      </Button>
                    </CardActions>
                  </CardOverflow>
                </Card>
              </Stack>
            </TabPanel>
            <TabPanel value={1}>
              <b>Second</b> tab panel
            </TabPanel>
            <TabPanel value={2}>
              <b>Third</b> tab panel
            </TabPanel>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
