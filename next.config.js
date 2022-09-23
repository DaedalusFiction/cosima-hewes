/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "firebasestorage.googleapis.com",
            "netlify.app",
            "googleapis.com",
            "cosimahewes.netlify.app",
        ],
        formats: ["image/webp", "image/avif"],
    },
};

module.exports = nextConfig;
