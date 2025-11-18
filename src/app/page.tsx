"use client";

import { ROUTES } from "@/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(ROUTES.DASHBOARD);
  })
  return <></>;
}
