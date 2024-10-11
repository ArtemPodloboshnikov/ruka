"use client"
import Link from "next/link"
import styles from "./index.module.css"
import { useState } from "react"
import { createPortal } from "react-dom"

const PagesLinks = () => {
    const [current, setCurrent] = useState(2)
    const [coverIndex, setCoverIndex] = useState(-1)
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
            href: "/contacts",
            text: "Контакты",
            cover: "dojo.avif"
        },
    ]
    return (
        <nav className={styles.links} onMouseLeave={()=>{setTimeout(()=>setCoverIndex(-1), 1500)}}>
            {links.map((link, idx)=>
            <Link
            key={idx}
            href={link.href}
            className={idx === current ? styles.active : "" }
            onClick={()=>setCurrent(idx)}
            onMouseOver={()=>{setCoverIndex(idx);}}
            style={coverIndex !== -1 && current === idx ? { color: "var(--red)" } : { }}
            >
                {link.text}
                {coverIndex === idx &&  createPortal(
                    <div className={styles.cover} style={{ backgroundImage: `url(/images/${links[idx].cover})` }} />,
                    document.getElementById("sidebar")!
                )}
            </Link>)}
        </nav>
    )
}

export default PagesLinks