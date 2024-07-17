import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] ,
  weight:["400","500","600"],
  
});

export const metadata = {
  title: "TravelAqsa landing page",
  description: "TravelAqsa - Traveling Made Easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={jost.className}>{children}</body>
    </html>
  );
}
/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/