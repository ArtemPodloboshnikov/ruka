import Card from "@/components/Card";
import { news } from "@/constants/system";

export default function News() {
    return (
        <>
            {news.map((n, idx)=>{
                return (
                    <Card
                    key={idx}
                    src={n.cover}
                    title={n.title}
                    tags={n.tags}
                    href={n.file}
                    />
                )
            })}
        </>
    )
}