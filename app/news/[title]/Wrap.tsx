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
        <div className="content">
            <Content />
        </div>
    )
}