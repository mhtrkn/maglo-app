"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/assets/animations/loading.json";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useEffect, useRef } from "react";

export default function LottieLoader() {
  const isOpen = useLoadingStore((s) => s?.isOpen);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isOpen && lottieRef.current) {
      lottieRef.current.setSpeed(2);
    }
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-50 flex-center bg-black/50 backdrop-blur-xs transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "hidden pointer-events-none"}`}>
      <Lottie
        animationData={animationData}
        loop
        lottieRef={lottieRef}
        autoPlay
        style={{ width: 240, height: 240 }}
      />
    </div>
  )
}
