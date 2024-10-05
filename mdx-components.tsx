import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props)=>(
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Image
          style={{ justifySelf: "center", objectFit: "cover" }}
          src={`/${decodeURIComponent(props.src)}`}
          alt={props.alt}
          title={props.alt}
          fill
          />

        </div>
    ),
    ...components,
  }
}