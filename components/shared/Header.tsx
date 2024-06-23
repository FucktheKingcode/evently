'use client';

import Link from "next/link"
import Image from "next/image"
import { SignedIn, SignedOut, UserButton, UserProfile } from "@clerk/nextjs"
import { Button } from "../ui/button"
import NavIteam from "./NavIteam"
import MobileNav from "./MobileNav"
import { headerLinks } from "@/constants"
import { usePathname } from 'next/navigation'
import { text } from 'stream/consumers'

const Header = () => {
    const pathname = usePathname();
    return (
        <header className=" w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className=" w-36">
                    <Image src="/assets/images/logo.svg" width={128} height={38}
                        alt="Evently logo"
                    />
                </Link>

                <SignedIn >

                    <nav className=" md:flex-between w-full max-w-xs">
                        {headerLinks.map((link) => {
                            const isActive = pathname === link.route;
                            return (
                                <li
                                    key={link.route}
                                    className={`${isActive && "text-primary-500"
                                        } flex-center p-medium-16 whitespace-nowrap`}
                                >
                                    <Link href={link.route}>{link.label}</Link>
                                </li>
                            )
                        })}
                    </nav>

                </SignedIn>


                <div className="flex w-32 justify-end gap-3">

                    <SignedIn >
                        <nav className=" md:flex-between w-full max-w-xs">
                            <UserButton afterSignOutUrl="/" />
                            <MobileNav />
                        </nav>

                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header