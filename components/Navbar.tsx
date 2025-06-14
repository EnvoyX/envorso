import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="flex-shrink-0 mr-4">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src={`/icons/huohuo.png`} alt="logo" width={46} height={44} />
          <h1 className="max-md:hidden">Envorso</h1>
        </div>
      </Link>
      <div className="flex items-center gap-8 flex-shrink-0">
        <NavItems />
        <SignedOut>
          <div className="flex items-center gap-2">
            <SignInButton>
              <button className="btn-signin">Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
