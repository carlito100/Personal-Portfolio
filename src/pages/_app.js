import { Outfit, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </main>
  );
}
