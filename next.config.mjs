/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/syllabary',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
