import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

const outfit = Outfit({ subsets: ["latin"] })



export const metadata = {
  title: "AdXL AI",
  description: "Created by Arik Alexandrov",
  icons: {
    icon: "/imgs/icon.png",
    shortcut: "/imgs/icon.png",
    apple: "/imgs/icon.png"
    // icon: "https://res.cloudinary.com/arikxl/image/upload/v1750618659/Ella2023/n6s6ixzozccvvu9fs2pp.png",
    // shortcut: "https://res.cloudinary.com/arikxl/image/upload/v1750618659/Ella2023/n6s6ixzozccvvu9fs2pp.png",
    // apple: "https://res.cloudinary.com/arikxl/image/upload/v1750618659/Ella2023/n6s6ixzozccvvu9fs2pp.png",// or .png, .svg, etc.
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={`${outfit.className}`}>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>

  );
}
