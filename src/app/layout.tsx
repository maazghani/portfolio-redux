import type { Metadata, Viewport } from "next";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Maaz Ghani — Staff Kubernetes Engineer",
    template: "%s — Maaz Ghani",
  },
  description:
    "Security-first Site Reliability Engineer specializing in Kubernetes, cloud-native platforms, and resilient infrastructure.",
  applicationName: "Maaz Ghani — Portfolio",
  authors: [{ name: "Maaz Ghani", url: "https://maaz.sh" }],
  creator: "Maaz Ghani",
  keywords: [
    "Maaz Ghani",
    "Kubernetes",
    "Site Reliability Engineering",
    "Platform Engineering",
    "AWS",
    "Istio",
    "Terraform",
  ],
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
  openGraph: {
    title: "Maaz Ghani — Staff Kubernetes Engineer",
    description:
      "Security-first SRE building secure, resilient, and maintainable platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Maaz Ghani — Staff Kubernetes Engineer",
    description:
      "Security-first SRE building secure, resilient, and maintainable platforms.",
    creator: "@icepaani",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#303446",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
