import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                "source": "/",
                "destination": "/news",
                "permanent": true
            }
        ]
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    output: "export",
    basePath: "/",
    images: {
        unoptimized: true,
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm]
    }
})

export default withMDX(nextConfig);
