import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header"; // ✔️
import Footer from '../../components/footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ToutAuMeilleurPrix.com",
  description: "Marketplace de deals au meilleur prix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#250048]`}
      >
        <Header /> {/* doit être un composant Client */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
