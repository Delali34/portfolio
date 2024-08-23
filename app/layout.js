import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Scrolltext from "@/components/Scrolltext";
import Sidemenu from "@/components/Sidemenu";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Ernest Delali",
  description: "Web developer with html, css and javascript experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} bg-[#FDF6EC]`}>
        <Scrolltext />
        <div className="flex flex-grow">
          <Sidemenu />
          <main className="flex-grow p-5 lg:ml-64 md:ml-32 ml-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
