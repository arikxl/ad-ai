import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
// import { SignIn } from "@clerk/clerk-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <a href="/workspace">
        
      <Button>Workspace</Button>
    </a>
      <UserButton/>
    </>
  );
}
