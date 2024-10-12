import dynamic from "next/dynamic"
import { staticTitles } from "@/constants/system";
import { ComponentType, Suspense } from "react";

type Params = {
    title: string;
}

export async function generateStaticParams(): Promise<Params[]> {
    return staticTitles
}

export async function getStaticProps(context: { params: { title: string } }) {
    const title = context.params.title
    const Content = dynamic(()=>import(`../../../news/${decodeURIComponent(title)}.mdx`),
    {
        loading: ()=><p>Loading...</p>,
        ssr: false
    }
    )
    return {
        props: { Content }
    }
}

export default function Article({ Content }: { Content: ComponentType }) {
    // const Content = dynamic(()=>import(`../../../news/${decodeURIComponent(params.title)}.mdx`),
    // {
    //     loading: ()=><p>Loading...</p>,
    //     ssr: false
    // }
    // )
    return (
        <div style={{ gridColumn: "1 / 13", display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "60px", paddingRight: "30px" }}>
            <Suspense fallback={<></>}>
                <Content />
            </Suspense>
        </div>
    )
}