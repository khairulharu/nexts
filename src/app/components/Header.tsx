"use client";
import React from "react";

import { HeroParallax } from "@/app/components/ui/hero-parallax";

export default function Header() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2021/08/19/09/17/poppies-6557536_1280.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/09/03/18/03/desert-9019840_1280.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2023/05/31/17/30/camera-8031914_960_720.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/02/20/05/16/hummingbird-8584603_960_720.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://cdn.pixabay.com/photo/2023/11/30/07/08/bread-8420931_960_720.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/08/06/10/43/wine-8949009_960_720.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/28/14/05/candle-8661042_960_720.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
     "https://cdn.pixabay.com/photo/2024/09/01/14/35/western-diamondback-rattlesnake-9014179_960_720.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/08/31/17/58/peacock-9012143_960_720.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/09/02/15/06/vietnam-9017058_960_720.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://cdn.pixabay.com/photo/2021/08/19/09/17/poppies-6557536_960_720.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/09/03/18/03/desert-9019840_1280.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2023/05/31/17/30/camera-8031914_960_720.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/04/09/22/28/trees-8686902_960_720.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://cdn.pixabay.com/photo/2023/05/31/17/30/camera-8031914_960_720.jpg",
  },
];
