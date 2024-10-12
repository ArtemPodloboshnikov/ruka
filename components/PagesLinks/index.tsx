"use client"
import Link from "next/link"
import styles from "./index.module.css"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const PagesLinks = () => {
    const pathname = usePathname()
    const links = [
        {
            href: "/about",
            text: "О нас",
            cover: "team.avif"
        },
        {
            href: "/dojo",
            text: "Додзё",
            cover: "dojo.avif"
        },
        {
            href: "/news",
            text: "Новости",
            cover: "news.avif"
        },
        {
            href: "/rules",
            text: "Устав",
            cover: "dojo.avif"
        },
    ]
    const startIndex: {[key: string]: number} = Object.assign({}, ...links.map((link, idx)=>({ [link.href]: idx })))
    console.log(startIndex)
    const [current, setCurrent] = useState(Number(Object.keys(startIndex).map(domain=>{if (new RegExp(domain).test(pathname)) return startIndex[domain] }).filter(Boolean)[0]))


    const changeBackground = (idx: number) => {
        const sidebar = document.getElementById("sidebar")
        sidebar!.style.backgroundImage = `url(/ruka/images/${links[idx].cover})`
    }

    useEffect(()=>{
        changeBackground(current)
    }, [])

    const click = (idx: number) => {
        changeBackground(idx)
        setCurrent(idx)
    }
    return (
        <nav className={styles.links}>
            {links.map((link, idx)=>
            <Link
            key={idx}
            href={link.href}
            className={idx === current ? styles.active : "" }
            onClick={()=>click(idx)}
            >
                {link.text}
            </Link>)}
        </nav>
    )
}

export default PagesLinks