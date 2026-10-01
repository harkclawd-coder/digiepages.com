import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name}: ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#080c0a",
          color: "#e8efeb",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 36, fontWeight: 700 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: "#3ddc97" }} />
          {SITE.name}
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3, maxWidth: 980 }}>
          Hyper-local marketing that puts you on the map
        </div>
        <div style={{ fontSize: 30, color: "#9db0a7" }}>
          Directories · Google Business Profile · Local ads
        </div>
      </div>
    ),
    size,
  );
}
