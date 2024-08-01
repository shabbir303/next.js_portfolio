import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-8 xl:py-12  ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
        <Link href="/">
          <h1 className="text-4xl font-semibold">Shabbir<span className="text-accent font-bold">.</span></h1>
        </Link>
        </div>
        {/* desktop nav */}
        <div className="hidden xl:flex mx-auto gap-8 items-center ">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent rounded-xl text-black">
              Hire Me
            </Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden w-[30px]">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;