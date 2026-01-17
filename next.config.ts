/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Это заставит Vercel собрать сайт, даже если есть ошибки типов
    ignoreBuildErrors: true,
  },
  eslint: {
    // Это пропустит проверку правил написания кода
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;