'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { text } from 'stream/consumers'

const NavIteam = () => {
    const pathname = usePathname();
    return (
        <ul className="flex w-full flex-col items-start gap-5 justify-between ">
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
        </ul>
    )
}

export default NavIteam