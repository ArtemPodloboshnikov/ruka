"use client"
import dynamic from "next/dynamic"

export default function Article({ params }: { params: { title: string } }) {
    const Content = dynamic(()=>import(`../../../news/${decodeURIComponent(params.title)}.mdx`),
    {
        loading: ()=><p>Loading...</p>,
        ssr: false
    }
    )
    return (
        <div style={{ gridColumn: "1 / 13", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Content />
        </div>
    )
}