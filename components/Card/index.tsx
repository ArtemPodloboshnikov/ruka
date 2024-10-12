import Image, { StaticImageData } from "next/image"
import styles from "./index.module.css"
import Link from "next/link"

type CardProps = {
    src: string|StaticImageData,
    title: string,
    tags: string[],
    href: string
}

const Card = ({ src, title, tags, href }:CardProps) => {
    return (
        <Link className={styles.wrap} href={href}>
            <div style={{ height: "423px", width: "100%", position: "relative" }}>
                <Image src={src} alt={title} fill className={styles.img} />
            </div>
            <div
            className={styles.info}
            style={{ gap: "10px", transition: "none", boxShadow: "none", borderRadius: "0", marginTop: "10px", paddingLeft: "15px", paddingRight: "15px" }}
            >
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.tags}>
                    {tags.map((tag, idx)=>
                    <div
                    key={idx}
                    className={styles.tag}
                    >
                        {tag}
                        {idx !== tags.length - 1 ? "," : ""}
                    </div>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default Card