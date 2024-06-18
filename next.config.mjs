/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    output: 'export',
    images: {
        domains: ['codepencdn.unlimited3d.com', 'arnxtdealerpageproducts.s3.ap-south-1.amazonaws.com/'],
    },

};

export default nextConfig;
