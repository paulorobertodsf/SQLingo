import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
}

export const Sidebar = ({className}: Props) => {
    return (
        <div className={cn("(flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className,)}>
            <Link href="/questions">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/logo.svg" height={50} width={50} alt="Logo"></Image>
                    <h1 className="text-2xl font-extrabold text-sky-500 tracking-wide">SQLingo</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg"/>
                <SidebarItem label="Practice" href="https://sqlfiddle.com/" iconSrc="/sqlpractice.svg"/>
                <SidebarItem label="Questions" href="/questions" iconSrc="/questions.svg"/>
                <SidebarItem label="Mystery" href="https://mystery.knightlab.com/" iconSrc="/detective.svg"/>
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/"/>
                </ClerkLoaded>
            </div>
        </div>
    );
};