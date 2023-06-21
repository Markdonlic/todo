import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "Todo Home | %s",
    default: "Todo Home",
  },
  description: "Nextjs Todo App",
  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
      },
    ],
    other: [
      {
        rel: "todo-logo",
        url: "/auth-logo.png",
      },
      {
        rel: "andriod-chrome-192x192",
        url: "/favicon_io/andriod-chrome-192x192.png",
      },
      {
        rel: "andriod-chrome-512x512",
        url: "/favicon_io/andriod-chrome-512x512.png",
      },
      {
        rel: "favicon-16x16",
        url: "/favicon_io/favicon-16x16.png",
      },
      {
        rel: "favicon-32x32",
        url: "/favicon_io/favicon-32x32.png",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
