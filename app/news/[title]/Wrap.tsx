"use client"

import dynamic from "next/dynamic"


export default function Wrap({ title }: { title: string }) {
    const Content = dynamic(()=>import(`../../../news/${decodeURIComponent(title)}.mdx`),
    {
        loading: ()=><p>Loading...</p>,
        ssr: false
    }
    )
    return (
        <div style={{ gridColumn: "1 / 13", display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "60px", paddingRight: "30px" }}>
            <Content />
        </div>
    )
}