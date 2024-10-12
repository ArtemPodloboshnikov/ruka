"use client"
import Card from "@/components/Card";
import Input from "@/components/Input";
import Switcher from "@/components/Switcher";
import { news } from "@/constants/system";
import { useState } from "react";
import { tags as commonTags } from "@/constants/system"

export default function News() {
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState<string[]>([])
    const onlyTags = Object.values(commonTags)

    return (
        <>
            <div style={{ gridColumn: "1 / 13", gap: "5px" }} className="center">
                <Input value={search} setValue={setSearch} placeholder="Название" type="search" />
                {onlyTags.map((t, idx)=>(
                    <Switcher key={idx} value={t} options={tags} setOptions={setTags} />
                ))}
            </div>
            {(()=>{

                let newsFilter = tags.length ? news.filter(n=>n.tags.some(t=>tags.includes(t))) : news
                newsFilter = !!search ? newsFilter.filter(d=>new RegExp(`^${search}`, "ig").test(d.title)) : newsFilter
                return newsFilter.map((n, idx)=>
                    <Card
                    key={idx}
                    src={n.cover}
                    title={n.title}
                    tags={n.tags}
                    href={`/news/${n.file}`}
                    />
                )
            })()}
        </>
    )
}