import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "École de Gastronomie Jean Paul II — Brazzaville",
  description: "L'art culinaire au service de l'excellence africaine. Formation professionnelle en gastronomie et restauration à Brazzaville, Congo.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
