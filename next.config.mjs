/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint errors from breaking the build
  },
};

export default nextConfig;
