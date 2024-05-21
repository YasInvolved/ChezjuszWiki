"use client"
import type { ReactNode } from "react"
import ThemeSwitch from "./ThemeSwitch"

export default function Navbar({children}: {children: ReactNode}) {
    return (
        <>
            <nav className="sticky top-0 flex items-center px-4 py-2 shadow-lg dark:bg-darker min-w-screen h-16 transition-colors duration-500">
                <span className="text-2xl font-bold text-black dark:text-white">ChezjuszWiki</span>
                <div className="flex w-full justify-end">
                    <ThemeSwitch/>
                </div>
            </nav>
            {children}
        </>
    )
}