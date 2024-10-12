import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // async redirects() {
    //     return [
    //         {
    //             "source": "/",
    //             "destination": "/news",
    //             "permanent": true
    //         }
    //     ]
    // },
    reactStrictMode: false,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    output: "export",
    basePath: "/ruka",
    images: {
        unoptimized: true,
        formats: ['image/avif'],
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm]
    }
})

export default withMDX(nextConfig);
