"use client";

import Lottie from "lottie-react";
import animationData from "@/assets/animations/loading.json";
import { useLoadingStore } from "@/store/useLoadingStore";

export default function LottieLoader() {
  const isOpen = useLoadingStore((s) => s?.isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex-center bg-black/50 backdrop-blur-xs transition-opacity">
      <Lottie
        animationData={animationData}
        loop
        style={{ width: 240, height: 240 }}
      />
    </div>
  );
}
