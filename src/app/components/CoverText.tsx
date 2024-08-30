import React from "react";
import { Cover } from "@/app/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="mb-20">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Beli Produk Sudah Pasti <br /> Di <Cover>Nama Merchand</Cover>
      </h1>
    </div>
  );
}
