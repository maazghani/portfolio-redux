import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maaz Ghani — Portfolio",
    short_name: "Maaz Ghani",
    description:
      "Security-first Staff Kubernetes Engineer and Site Reliability Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#232634",
    theme_color: "#303446",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
