import {Inter} from "next/font/google";
import NavBar from "@/components/NavBar";
import Providers from "@/components/Providers";
const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Rick&Morty🍺👽 Post-Reactions",
  description: "Learning MST and MobX",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="app">
            <NavBar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
