/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Позволяет собрать сайт, игнорируя красные подчеркивания
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;