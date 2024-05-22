"use client"
import useColorMode from "@/hooks/useColorMode"
import Image from "next/image";
import SunIcon from "@/public/icons/sun.svg"
import MoonIcon from "@/public/icons/moon.svg"

const style = "min-h-full text-black dark:text-white transition-colors duration-500"

export default function ThemeSwitch() {
    const [colorMode, setColorMode] = useColorMode();

    return (
        <button className={style} onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}>
            <Image src={colorMode == "light" ? MoonIcon : SunIcon} alt="słońce" className="dark:invert md:w-8 w-6"/> 
        </button>
    )
}