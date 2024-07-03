"use client"
import { Button } from "./ui/button";
import { CiMenuFries } from "react-icons/ci";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNav = () => {

    const pathName = usePathname();
    const links = [
        {
            name: "home",
            path: "/"
        },
        {
            name: "services",
            path: "/services"
        },
        {
            name: "resume",
            path: "/resume"
        },
        {
            name:"work",
            path: "/work"
        },
        {
            name: "contact",
            path: "/contact"
        }
    ]
    return (
        
             <Sheet>
      <SheetTrigger asChild>
        <Button ><CiMenuFries className="text-[30px] font-bold text-accent"/></Button>
      </SheetTrigger>
      <SheetContent>
      <nav className="flex flex-col gap-8 justify-center items-center mt-[100px]">
            {links.map((link, index) => {
                return <Link 
                href={link.path} 
                key={index}
                className={`${link.path === pathName && "text-accent border-b-2  border-accent"} uppercase font-medium hover:text-accent transition-all`}
                >
                    {link.name}
                </Link>
            })}
        </nav>

        {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
        
    );
};

export default MobileNav;