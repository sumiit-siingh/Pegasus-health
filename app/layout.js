import { Bitter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Configure the font
const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pegasus Health",
  description: "Super Broker for Brokers",
};

export default function RootLayout({ children }) {
  return (
    // Apply the font's className to the <html> tag
    <html lang="en" className={bitter.className}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
