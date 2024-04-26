import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
   return(
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
         <Button size="lg" variant="ghost" className="w-full">
            <Image src="/mysql.svg" alt="MySQL" height={70} width={75} className="mr-4 rounded-md"/>
         </Button>
         <Button size="lg" variant="ghost" className="w-full">
            <Image src="/oracle.svg" alt="MySQL" height={80} width={85} className="mr-4 rounded-md"/>
         </Button>
         <Button size="lg" variant="ghost" className="w-full">
            <Image src="/postgres.png" alt="MySQL" height={40} width={45} className="mr-4 rounded-md"/>
         </Button>
         <Button size="lg" variant="ghost" className="w-full">
            <Image src="/sqlserver.svg" alt="MySQL" height={60} width={65} className="mr-4 rounded-md"/>
         </Button>
      </div>
    </footer>
   ) 
};