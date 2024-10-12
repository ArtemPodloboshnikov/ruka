"use client"
import Card from "@/components/Card";
import Input from "@/components/Input";
import Switcher from "@/components/Switcher";
import { cities, dojo } from "@/constants/system";
import { useState } from "react";

export default function Dojo() {
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState<string[]>([])

    return (
        <>
            <div style={{ gridColumn: "1 / 13", gap: "5px" }} className="center">
                <Input value={search} setValue={setSearch} placeholder="Название" type="search" />
                {Object.values(cities).map((city, idx)=>(
                    <Switcher key={idx} value={city} options={tags} setOptions={setTags} />
                ))}
            </div>
            {(()=>{
                let dojoFilter = tags.length ? dojo.filter(d=>d.tags.some(tag=>tags.includes(tag))) : dojo
                dojoFilter = !!search ? dojoFilter.filter(d=>new RegExp(`^${search}`, "ig").test(d.title)) : dojoFilter
                return dojoFilter.map((d, idx)=>
                    <Card
                    key={idx}
                    title={d.title}
                    tags={d.tags}
                    src={d.cover}
                    href={`/dojo/${d.file}`}
                    />
                )
            })()}
        </>
    )
}