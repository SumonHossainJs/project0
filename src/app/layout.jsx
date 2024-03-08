import { Inter } from "next/font/google";
import "../styles/main_Styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "This is Project0",
  description: "I will collect components and Design styles. Insha allah ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>
        <div className="background">

        {children}
        </div>
        </body>
    </html>
  );
}
