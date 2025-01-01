import React from "react";
import BackgroundBeamsWithCollision from "../components/ui/Backgroundbeams";

export default function BackgroundBeamsWithCollisionDemo({children,className=""}) {
  return (
    <BackgroundBeamsWithCollision className={`min-h-screen w-full relative ${className}`}>
      {children}
    </BackgroundBeamsWithCollision>
  );
}