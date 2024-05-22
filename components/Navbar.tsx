import type { ReactNode } from "react"
import ThemeSwitch from "./ThemeSwitch"

const destinations = [
    { ref: "/budynki", name: "Budynki" },
    { ref: "/druzyny", name: "Drużyny" },
    { ref: "/dramy", name: "Dramy" },
    { ref: "/historie", name: "Historie" },
]

export default function Navbar({children}: {children: ReactNode}) {
    return (
        <>
            <nav className="sticky top-0 flex items-center md:px-12 px-4 md:py-6 py-2 shadow-lg dark:bg-darker min-w-screen md:h-16 h-12 transition-colors duration-500">
                <div className="w-full">
                    <a href="/" className="text-xl md:text-2xl font-bold text-black dark:text-white">SerwerWiki</a>
                </div>
                <div className="flex gap-4 w-full justify-center">
                    {destinations.map((data, index) => <a key={index} href={data.ref} className="text-black dark:text-white">{data.name}</a>)}
                </div>
                <div className="flex gap-4 w-full justify-end">
                    <ThemeSwitch/>
                </div>
            </nav>
            {children}
        </>
    )
}