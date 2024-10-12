"use client"

import { dojo, domainIcon } from "@/constants/system"
import { Globe } from "lucide-react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import L from 'leaflet'


const NewMarker = new L.Icon({
    iconUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDQuOTkzLTUuNTM5IDEwLjE5My03LjM5OSAxMS43OTlhMSAxIDAgMCAxLTEuMjAyIDBDOS41MzkgMjAuMTkzIDQgMTQuOTkzIDQgMTBhOCA4IDAgMCAxIDE2IDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+",
    iconSize: [25, 35],
    iconAnchor: [5, 30]
})

export default function Wrap({ title }: { title: string }) {
    const info = dojo.find(d=>d.title === title)!
    const isNetwork = (link: string) => {
        let icon = null
        for (const domain in domainIcon) {
            if (new RegExp(domain, "g").test(link)) {
                icon = domainIcon[domain]
            }
        }

        return icon
    }
    const Content = dynamic(()=>import(`../../../dojo/${decodeURIComponent(title)}.mdx`),
    {
        loading: ()=><p>Loading...</p>,
        ssr: false
    }
    )

    const networkStyle = { background: "var(--red)", borderRadius: "10px", padding: "10px" }
    return (
        <div className="content">
            <Image src={info.cover} alt={info.title} style={{ objectFit: "cover", alignSelf: "center", borderRadius: "20px" }} width={400} height={400} />
            <h1 style={{ fontWeight: 900, fontSize: "64px", textAlign: "center" }}>{info.title}</h1>
            <div className="center" style={{ gap: "10px", alignSelf: "center" }}>
                {info.links.map((link, idx)=>
                    <div key={idx}>
                        {(()=>{
                        const icon = isNetwork(link)

                        return <Link href={link} style={networkStyle} className="center">
                            {icon ?
                            <Image src={icon} width={20} height={20} alt={link}  />
                            :
                            <Globe />
                            }
                        </Link>
                        })()}
                    </div>
                )}
            </div>
            {info.address.map((addr, idx)=>(
                <MapContainer key={idx} center={{ lat: info.coords[idx][0], lng: info.coords[idx][1] }} zoom={13} style={{ height: "500px", outline: "none" }}>
                            <TileLayer
                            attribution=''
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                    <Marker position={{ lat: info.coords[idx][0], lng: info.coords[idx][1] }} icon={NewMarker}>
                        <Popup>{addr}</Popup>
                    </Marker>
                </MapContainer>
            ))}
            <Content />
        </div>
    )
}