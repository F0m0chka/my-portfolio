/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Это разрешит билд, даже если в коде ошибки типов (красные линии)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Это пропустит проверку правил написания кода
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;