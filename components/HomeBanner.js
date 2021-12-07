import React, { useState } from "react";
// import videoNeon from "/videos/home/neon.mp4";

function HomeBanner() {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="/videos/home/neon.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default HomeBanner;
