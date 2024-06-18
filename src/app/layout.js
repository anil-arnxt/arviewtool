import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArNXT",
  description: "App for AR view",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

       <Head>
   
    
       </Head>
      <body className={inter.className}>
      <Script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@google/model-viewer@3.5.0/+esm"
          strategy="afterInteractive"
        />
        {children}</body>
    </html>
  );
}
