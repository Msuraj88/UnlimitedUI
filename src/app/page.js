"use client";

import React from "react";
import Image from "next/image";
import Header from "./Components/header/header";
import Hero from "./Components/Home/hero";
import TemplateCards from "./Components/ProductCards/CardComponent";
import CardsGrid from "./Components/ProductCards/CardsGrid";
import NewsLetter from "./Components/Home/newsLetter";
import Footer from "./Components/footer/footer"

import { useRouter } from "next/navigation";

import Box from "@mui/joy";

export default function Home() {

  const router = useRouter();


  return (
    <div className="app-bg-Dark">
      <Header />
      <Hero />
      <CardsGrid />
      <NewsLetter />
      <Footer />
    </div>
  );
}
