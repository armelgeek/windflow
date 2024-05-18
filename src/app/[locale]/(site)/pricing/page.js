import Plans from "@/components/core/pricing";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <div className="container py-20">
      <div className="w-full my-16 text-center">
        <h1 className="text-3xl font-bold">Pricing</h1>
      </div>
      <Plans/>
    </div>
  );
}
