import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/logo.jpeg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
