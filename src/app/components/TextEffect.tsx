"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const words = `Eh, kamu yang suka foto-foto, aku nemu tempat bagus nih buat beli gear fotografi.
Mereka punya kamera, lensa, sampai aksesoris yang oke banget, dan harganya juga nggak terlalu mahal. Cocok banget buat upgrade gear kamu! Aku baru cek produknya, kualitasnya bagus-bagus. Kalau mau, aku kasih tahu detailnya ya. Siapa tahu kamu tertarik`;

export function TextEffect() {
  return <TextGenerateEffect words={words} />
}
