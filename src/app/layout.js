import { Inter } from '@next/font/google'; // Import Inter from Google Fonts
import "./globals.css";
import NavBar from "./components/NavBar";

// Load Inter font from Google Fonts
const inter = Inter({
  subsets: ['latin'], // Specify subsets as needed
  variable: '--font-inter', // CSS variable for font
});

export const metadata = {
  title: "Haye Media",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`} // Use only the Inter font variable
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
