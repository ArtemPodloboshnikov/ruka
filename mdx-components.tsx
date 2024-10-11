"use client"
import { useInView } from 'framer-motion';
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { useRef } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return {
    img: (props)=>(
        <div
        ref={ref}
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          >
          <Image
          style={{ justifySelf: "center", objectFit: "cover" }}
          src={`/${decodeURIComponent(String(props.src))}`}
          alt={String(props.alt)}
          title={props.alt}
          fill
          />

        </div>
    ),
    ...components,
  }
}