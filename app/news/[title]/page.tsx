import dynamic from "next/dynamic"
import { staticTitles } from "@/constants/system";
import { Suspense } from "react";

type Params = {
    title: string;
}

export async function generateStaticParams(): Promise<Params[]> {
    return staticTitles
}

export default function Article({ params }: { params: { title: string } }) {
    const Content = dynamic(()=>import(`../../../news/${decodeURIComponent(params.title)}.mdx`),
    {
        loading: ()=><p>Loading...</p>,
        ssr: false
    }
    )
    return (
        <div style={{ gridColumn: "1 / 13", display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "60px", paddingRight: "30px" }}>
            <Suspense fallback={<></>}>
                <Content />
            </Suspense>
        </div>
    )
}