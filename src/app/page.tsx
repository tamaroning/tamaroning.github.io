"use client";

import { EarthViewer } from "@/components/webgl/earth";

export default function Page() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <EarthViewer />
    </div>
  );
}