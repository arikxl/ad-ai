import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] })



export const metadata = {
  title: "XL AI Ads Generator",
  description: "Created by Arik Alexandrov",
  icons: {
    icon: "https://res.cloudinary.com/arikxl/image/upload/v1750618659/Ella2023/n6s6ixzozccvvu9fs2pp.png",
    shortcut: "https://res.cloudinary.com/arikxl/image/upload/v1750618659/Ella2023/n6s6ixzozccvvu9fs2pp.png",
    apple: "https://res.cloudinary.com/arikxl/image/upload/v1750618659/Ella2023/n6s6ixzozccvvu9fs2pp.png",// or .png, .svg, etc.
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={`${outfit.className}`}>

          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
