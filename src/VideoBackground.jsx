import React from "react";

// Full-viewport cinematic background video, shared across every route
// (rendered once in App so it doesn't reload on hash navigation).
const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4";

export default function VideoBackground() {
  return (
    <>
      <video
        className="video-bg"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      {/* Blur only (no dark gradient): masked to the bottom of the screen */}
      <div className="bottom-blur-overlay" aria-hidden="true" />
    </>
  );
}
