// app/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Home Page</h1>
      <h2
        onClick={() => router.push("/dashboard")}
        style={{ cursor: "pointer", color: "blue" }}
      >
        Go to Dashboard
      </h2>
    </div>
  );
};

export default HomePage;
