import { staticDojoTitles } from "@/constants/system";
import Wrap from "./Wrap";

type Params = {
    title: string;
}

export async function generateStaticParams(): Promise<Params[]> {
    return staticDojoTitles
}

export default function Article({ params }: { params: { title: string } }) {
    return (
        <Wrap title={params.title} />
    )
}