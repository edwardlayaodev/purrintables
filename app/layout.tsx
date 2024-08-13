import "./_styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Organism from "@organism";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purrintables",
  description: "This is the website of Purrintables",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Organism.Wrapper>
        <body className={inter.className}>
          <Organism.Header />
          {children}
          <Organism.Footer />
        </body>
      </Organism.Wrapper>
    </html>
  );
}
