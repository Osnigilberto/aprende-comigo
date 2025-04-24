// src/app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aprende Comigo",
  description: "Projeto de aprendizado e diversão",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main style={{ marginTop: '60px' }}> {/* Ajuste para não sobrepor o conteúdo */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
