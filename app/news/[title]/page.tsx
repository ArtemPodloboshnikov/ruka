import { staticTitles } from "@/constants/system";
import Wrap from "./Wrap";

type Params = {
    title: string;
}

export async function generateStaticParams(): Promise<Params[]> {
    return staticTitles
}

export default function Article({ params }: { params: { title: string } }) {
    return (
        <Wrap title={params.title} />
    )
}